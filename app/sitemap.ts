import type { MetadataRoute } from "next"
import { servicesData } from "@/lib/services-data"

export const dynamic = "force-static"

const baseUrl = "https://www.chicagoamp.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/labs",
    "/culture",
    "/about",
    "/contact",
    "/portfolio",
    "/services",
    "/websites",
    "/video-production-services",
    "/graphics-branding",
    "/world-making",
    "/marketing",
    "/privacy-policy",
    "/admin",
    "/admin/videos",
    "/admin/images",
    "/analytics",
    "/revenue",
    "/seo",
  ]

  const serviceRoutes = servicesData.map((service) => `/services/${service.slug}`)

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }))
}
