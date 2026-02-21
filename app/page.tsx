import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicCursor } from "@/components/dynamic-cursor"
import { HeroSection } from "@/components/hero-section"
import { DiscoveryLabSection } from "@/components/discovery-lab-section"
import { PerformanceProofSection } from "@/components/performance-proof-section"
import { ProjectBuilderSection } from "@/components/project-builder-section"
import { Footer } from "@/components/footer"

const baseTitle = "Home | Digital Theatre"
const baseDescription =
  "Chicago AMP is a Chicago video marketing agency for high-end brand storytelling, blending cinematic craft with performance-driven strategy."

export const metadata: Metadata = {
  title: baseTitle,
  description: baseDescription,
  keywords: [
    "Chicago Video Marketing Agency",
    "High-End Brand Storytelling",
    "Cinematic Brand Strategy",
    "Performance-Driven Creative",
    "World-Building Brand Campaigns",
  ],
  openGraph: {
    title: `${baseTitle} | Chicago AMP`,
    description: baseDescription,
    url: "https://www.chicagoamp.com",
    images: ["/chicago-amp-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${baseTitle} | Chicago AMP`,
    description: baseDescription,
    images: ["/chicago-amp-logo.png"],
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <DynamicCursor />
      <Navigation />
      <HeroSection />
      <DiscoveryLabSection />
      <PerformanceProofSection />
      <ProjectBuilderSection />
      <Footer />
    </main>
  )
}
