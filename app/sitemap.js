const siteUrl = "https://www.rudler.cpa"; 

export default function sitemap() {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" },
    { url: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { url: "/insights", priority: 0.7, changeFrequency: "weekly" },
    { url: "/careers", priority: 0.6, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.8, changeFrequency: "yearly" },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${siteUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
