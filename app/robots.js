const siteUrl = "https://www.rudler.cpa";

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
