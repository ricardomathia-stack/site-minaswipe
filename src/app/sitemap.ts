import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";
import { SOLUTIONS } from "@/lib/solutions";
import { SEGMENTS } from "@/lib/segments";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: COMPANY.url, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${COMPANY.url}/quem-somos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${COMPANY.url}/solucoes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${COMPANY.url}/segmentos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${COMPANY.url}/parceiros`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${COMPANY.url}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
  const solutionPages: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${COMPANY.url}/solucoes/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));
  const segmentPages: MetadataRoute.Sitemap = SEGMENTS.map((s) => ({
    url: `${COMPANY.url}/segmentos/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));
  return [...base, ...solutionPages, ...segmentPages];
}
