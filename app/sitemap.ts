import type { MetadataRoute } from "next";
import { getSiteOrigin } from "./site-origin";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = await getSiteOrigin();

  return [{ url: origin, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
