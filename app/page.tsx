import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BentoServices } from "@/components/bento-services"
import { HighlightVideoSection } from "@/components/highlight-video-section"
import { BrandLogosSection } from "@/components/brand-logos-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HighlightVideoSection />
      <BrandLogosSection />
      <BentoServices />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
