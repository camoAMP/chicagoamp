import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { withBasePath } from "@/lib/with-base-path"

const aboutStats = [
  { label: "Founded", value: "2014" },
  { label: "Projects", value: "200+" },
  { label: "Cities Served", value: "18" },
  { label: "Creative Disciplines", value: "7" },
]

const aboutValues = [
  {
    title: "Craft with intention",
    description: "Every frame, layout, and beat is designed to make your brand feel unmistakable.",
  },
  {
    title: "Collaborate openly",
    description: "We keep feedback loops tight and transparent so your team feels in the work at every step.",
  },
  {
    title: "Move with momentum",
    description: "Fast timelines are matched with structured planning that keeps quality high and stress low.",
  },
]

const aboutSteps = [
  {
    title: "Discovery and strategy",
    description: "We align on goals, audiences, and the narrative that will drive results.",
  },
  {
    title: "Creative build",
    description: "Our producers, designers, and strategists craft the assets your campaign needs.",
  },
  {
    title: "Launch and optimization",
    description: "We ship, measure, and refine so the work keeps performing after launch day.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 uppercase tracking-[0.3em]">
            About Chicago AMP
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-balance">
            We build worlds for brands that want to be remembered
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Chicago AMP is a multidisciplinary creative studio that blends marketing strategy with production. We help
            teams launch campaigns, tell stories, and translate big ideas into experiences that feel cinematic and human.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Start a project</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/portfolio">View portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat) => (
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
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Our story</p>
              <h2 className="text-3xl sm:text-4xl font-bold">A studio born from production and built for growth</h2>
              <p className="text-muted-foreground">
                We started as filmmakers who understood how to move people through sound, light, and story. That
                production backbone now powers everything from brand campaigns to immersive web experiences.
              </p>
              <p className="text-muted-foreground">
                Today we partner with founders, marketing leaders, and creative teams who need a reliable studio to help
                them ship big ideas without losing momentum.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/services">Explore services</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/contact">Talk with us</Link>
                </Button>
              </div>
            </div>
            <div className="glass-effect rounded-3xl overflow-hidden border border-border shadow-2xl">
              <img
                src={withBasePath("/L1000639.jpg")}
                alt="Chicago AMP crew on set"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">How we work</p>
            <h2 className="text-3xl sm:text-4xl font-bold">A focused process with room for bold ideas</h2>
            <p className="text-muted-foreground">
              We bring structure to creative projects so you always know what is happening, what is next, and how
              success is measured.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {aboutSteps.map((step, index) => (
              <Card key={step.title} className="glass-effect border-border p-8 space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Step {index + 1}</p>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">What we value</p>
            <h2 className="text-3xl sm:text-4xl font-bold">The principles behind the work</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {aboutValues.map((value) => (
              <Card key={value.title} className="glass-effect border-border p-8 space-y-4">
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
