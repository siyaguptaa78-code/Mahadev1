import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "daily" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
    {
      url: "/mahadev-betting-app",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: "/mahadev-book-id",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/login", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/register", priority: 0.8, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
