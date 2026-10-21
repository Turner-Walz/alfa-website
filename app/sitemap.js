import { SITE_URL } from "./lib/site";

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/media`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/construction`, lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
