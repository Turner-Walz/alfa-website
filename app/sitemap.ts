import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alookfromabove.co",
      lastModified: new Date(),
    },
  ];
}
