import type { MetadataRoute } from "next"

const baseUrl = "https://www.chicagoamp.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/admin`, lastModified: new Date() },
    { url: `${baseUrl}/admin/videos`, lastModified: new Date() },
    { url: `${baseUrl}/admin/images`, lastModified: new Date() },
    { url: `${baseUrl}/marketing`, lastModified: new Date() },
    { url: `${baseUrl}/analytics`, lastModified: new Date() },
    { url: `${baseUrl}/revenue`, lastModified: new Date() },
    { url: `${baseUrl}/seo`, lastModified: new Date() },
  ]
}
