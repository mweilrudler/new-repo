const MAX_LENGTHS = {
  firstName: 80,
  lastName: 80,
  email: 160,
  phone: 40,
  service: 120,
  message: 4000,
};

const GRAPH_SCOPE = "https://graph.microsoft.com/.default";
const GRAPH_TOKEN_URL_BASE = "https://login.microsoftonline.com";
const GRAPH_SEND_MAIL_URL_BASE = "https://graph.microsoft.com/v1.0";

function readEnv(name) {
  return process.env[name]?.trim() || "";
}

function readField(body, key) {
  const value = body?.[key];

  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, MAX_LENGTHS[key] || 500);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function getGraphAccessToken() {
  const tenantId = process.env.MICROSOFT_TENANT_ID;
  const clientId = process.env.MICROSOFT_CLIENT_ID;
  const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error("Microsoft Graph credentials are not configured.");
  }

  const tokenResponse = await fetch(
    `${GRAPH_TOKEN_URL_BASE}/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        scope: GRAPH_SCOPE,
        grant_type: "client_credentials",
      }),
    }
  );

  const tokenBody = await tokenResponse.json().catch(() => ({}));

  if (!tokenResponse.ok || !tokenBody.access_token) {
    console.error("Microsoft Graph token error:", tokenBody);
    throw new Error("Could not authenticate with Microsoft Graph.");
  }

  return tokenBody.access_token;
}

async function sendContactEmail({ senderEmail, toEmail, subject, replyTo, html }) {
  const accessToken = await getGraphAccessToken();
  const sendMailUrl = `${GRAPH_SEND_MAIL_URL_BASE}/users/${encodeURIComponent(
    senderEmail
  )}/sendMail`;

  const response = await fetch(sendMailUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: {
        subject,
        body: {
          contentType: "HTML",
          content: html,
        },
        toRecipients: [
          {
            emailAddress: {
              address: toEmail,
            },
          },
        ],
        replyTo: [
          {
            emailAddress: {
              address: replyTo.email,
              name: replyTo.name,
            },
          },
        ],
      },
      saveToSentItems: true,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Microsoft Graph sendMail error:", errorText);
    throw new Error("Microsoft Graph could not send the contact email.");
  }
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  if (typeof body?.company === "string" && body.company.trim()) {
    return Response.json({ ok: true });
  }

  const firstName = readField(body, "firstName");
  const lastName = readField(body, "lastName");
  const email = readField(body, "email");
  const phone = readField(body, "phone");
  const service = readField(body, "service");
  const message = readField(body, "message");

  if (!firstName || !lastName || !email || !service || !message) {
    return Response.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const toEmail = readEnv("CONTACT_TO_EMAIL") || "info@rudler.cpa";
  const senderEmail = readEnv("CONTACT_SENDER_EMAIL") || toEmail;

  if (!senderEmail) {
    console.error("Contact form is missing CONTACT_SENDER_EMAIL or CONTACT_TO_EMAIL.");
    return Response.json(
      { error: "The contact form is not configured yet." },
      { status: 500 }
    );
  }

  const fullName = `${firstName} ${lastName}`;
  const subject = `Website contact form: ${service}`;
  const html = `
    <h2>Website Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Service Needed:</strong> ${escapeHtml(service)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  try {
    await sendContactEmail({
      senderEmail,
      toEmail,
      subject,
      replyTo: {
        email,
        name: fullName,
      },
      html,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return Response.json(
      { error: "We could not send your inquiry. Please try again." },
      { status: 502 }
    );
  }
}
