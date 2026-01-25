import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { withBasePath } from "@/lib/with-base-path"
import { WorldMapFrame } from "@/components/world-map-frame"

const focusPoints = [
  {
    title: "Producers who solve problems",
    description:
      "We are producers first - problem solvers who build clear, creative solutions that move projects forward.",
  },
  {
    title: "Creativity is our medium",
    description:
      "We deal with creativity every day, shaping ideas into tangible worlds that feel bold, intentional, and human.",
  },
  {
    title: "Goals come first",
    description:
      "The most important thing you can do is be open about what you want to have happen and what your goals are. We open with that as page one.",
  },
]

const worldRange = [
  {
    title: "Creative stage design",
    description: "Sets, lighting, and spatial storytelling that turn a space into a scene.",
  },
  {
    title: "Logo + brand identity",
    description: "Logo systems and brand assets that make your presence instantly recognizable.",
  },
  {
    title: "Corporate builds + digital copy",
    description: "Corporate builds, decks, and digital copy that articulate your message with clarity.",
  },
  {
    title: "Full-on fantasy filmmaking",
    description: "Cinematic storytelling that turns imagination into immersive, on-screen worlds.",
  },
]

export default function WorldMakingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 uppercase tracking-[0.3em]">
            World Making
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-balance">
            We are producers solving problems and building solutions.
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We deal with creativity, turning ambition into structure and structure into something unforgettable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Start with your goals</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/portfolio">See the worlds</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Page one</p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Open with what you want to have happen.
              </h2>
              <p className="text-muted-foreground text-lg">
                The most important thing you can do is be open with what you would like to have happen and what your
                goals are. We open every project with that conversation so the creative build starts from clarity.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {focusPoints.map((point) => (
                  <Card key={point.title} className="glass-effect border-border p-5 space-y-2">
                    <h3 className="text-lg font-semibold">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="glass-effect rounded-3xl overflow-hidden border border-border shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={withBasePath("/ChicagoAmp-LogoBuild.mp4")} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">The range</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              From creative stage design to full-on fantasy filmmaking
            </h2>
            <p className="text-muted-foreground">
              From creative stage design to logo and corporate build, digital copy to full-on fantasy filmmaking - if it
              needs to exist, we produce it.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {worldRange.map((item) => (
              <Card key={item.title} className="glass-effect border-border p-6 space-y-3">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">World map</p>
              <h2 className="text-3xl sm:text-4xl font-bold">Global reach, local focus</h2>
              <p className="text-muted-foreground text-lg">
                We build worlds wherever the story demands it. From local stages to global releases, our teams produce
                with the same creative intensity and problem-solving mindset.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-border px-4 py-1 text-sm text-muted-foreground">
                  Chicago HQ
                </span>
                <span className="rounded-full border border-border px-4 py-1 text-sm text-muted-foreground">
                  Remote-ready
                </span>
                <span className="rounded-full border border-border px-4 py-1 text-sm text-muted-foreground">
                  Travel crews
                </span>
              </div>
            </div>
            <Card className="glass-effect border-border p-5">
              <div className="relative aspect-[5/3] w-full overflow-hidden rounded-2xl">
                <WorldMapFrame className="h-full w-full" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-effect border-border p-10 text-center space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Dreams to reality</p>
            <h3 className="text-3xl sm:text-4xl font-bold">We're here to make your dreams happen, baby!!</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tell us what success looks like, and we will produce the path that gets you there.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Tell us your goals</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Explore services</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
