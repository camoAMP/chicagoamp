import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicCursor } from "@/components/dynamic-cursor"
import { WorkEvidencePage } from "@/components/work-evidence-page"
import { Footer } from "@/components/footer"

const baseTitle = "Work | Evidence of Craft"
const baseDescription =
  "Chicago AMP Work: immersive case studies in B2B tech video storytelling, medical training video production, and performance-led cinematic campaigns."

export const metadata: Metadata = {
  title: baseTitle,
  description: baseDescription,
  keywords: [
    "Video SEO",
    "B2B Tech Video Storytelling",
    "Medical Training Video Production",
    "Chicago Video Marketing Agency",
    "Performance Panel Case Studies",
  ],
  openGraph: {
    title: `${baseTitle} | Chicago AMP`,
    description: baseDescription,
    url: "https://www.chicagoamp.com/work",
    images: ["/chicago-amp-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${baseTitle} | Chicago AMP`,
    description: baseDescription,
    images: ["/chicago-amp-logo.png"],
  },
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <DynamicCursor />
      <Navigation />
      <WorkEvidencePage />
      <Footer />
    </main>
  )
}
