import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const valueProps = [
  {
    title: "Creative Excellence",
    description: "High-quality video and photography that captivate and connect with your audience.",
  },
  {
    title: "Integrated Marketing Solutions",
    description: "We combine visuals with strategy for campaigns that convert.",
  },
  {
    title: "Website Design & Development",
    description: "Custom websites that showcase your brand and drive measurable results.",
  },
]

const portfolioHighlights = [
  {
    title: "Cinematic Brand Films",
    category: "Video Production",
    result: "50+ films delivered",
  },
  {
    title: "Editorial Photo Stories",
    category: "Photography",
    result: "Product, lifestyle, and events",
  },
  {
    title: "Conversion-Ready Websites",
    category: "Web Design",
    result: "Modern builds that perform",
  },
]

const credibilityStats = [
  { label: "Years of experience", value: "10+" },
  { label: "Projects completed", value: "200+" },
  { label: "Films produced", value: "50+" },
  { label: "Weddings captured", value: "100+" },
]

const processSteps = [
  {
    title: "Capture Your Story",
    description: "Professional video and photography that reflect your brand.",
  },
  {
    title: "Build Your Presence",
    description: "Custom website design and development for a strong digital footprint.",
  },
  {
    title: "Market with Impact",
    description: "Strategic campaigns powered by visuals and data-driven insights.",
  },
]

export default function MarketinPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 uppercase tracking-[0.3em]">
            Marketing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-balance">
            Your Visual Storytelling Partner for Marketing Success
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            From cinematic videos and photography to strategic marketing and custom websites&mdash;we make it all work.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Value Proposition</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Us?</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {valueProps.map((pillar) => (
              <Card key={pillar.title} className="glass-effect border-border p-8 space-y-4">
                <h3 className="text-2xl font-bold">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Proof & Credibility</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Trusted by Brands That Value Impact</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="glass-effect border-border p-8 space-y-6 lg:col-span-2">
              <div>
                <h3 className="text-2xl font-bold">Portfolio Highlights</h3>
                <p className="text-muted-foreground mt-2">
                  Showcase your best video projects, photography shoots, and websites.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {portfolioHighlights.map((item) => (
                  <Card key={item.title} className="glass-effect border-border p-6 space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.category}</p>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm text-primary font-semibold">{item.result}</p>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="glass-effect border-border p-8 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Testimonials</p>
                <h3 className="text-2xl font-bold">Client Feedback</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                "They transformed our brand with stunning visuals and a marketing strategy that works."
              </p>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Client Name</p>
            </Card>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-10">
            {credibilityStats.map((stat) => (
              <Card key={stat.label} className="glass-effect border-border p-6 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold text-primary mt-2">{stat.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Process: From Vision to Impact</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Card key={step.title} className="glass-effect border-border p-8 space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Step {index + 1}</p>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-effect border-border p-10 text-center space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Featured Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Free Brand Audit + Visual Strategy Session</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book a 30-minute consultation with our experts and discover how to elevate your brand with visuals and
              marketing that work.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Claim Your Free Session</Link>
            </Button>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-effect border-border p-10 text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Secondary CTA</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Brand?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's create visuals, websites, and campaigns that drive real growth.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
