import { notFound } from "next/navigation"
import { getServiceBySlug } from "@/lib/services-data"
import { ServiceDetailContent } from "@/components/service-detail-content"

export default function ServicePage() {
  const service = getServiceBySlug("wedding-films")

  if (!service) {
    notFound()
  }

  return <ServiceDetailContent service={service} />
}
