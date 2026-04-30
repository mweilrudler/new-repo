const siteUrl = "https://www.rudler.cpa";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/client",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
