import { notFound } from "next/navigation"
import { servicesData, getServiceBySlug } from "@/lib/services-data"
import { ServiceDetailContent } from "@/components/service-detail-content"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }))
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailContent service={service} />
}
