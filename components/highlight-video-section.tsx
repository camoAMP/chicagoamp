import Link from "next/link"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/with-base-path"

export function HighlightVideoSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Highlight Reel</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            See Chicago AMP <span className="text-primary glow-cyan">In Motion</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A fast look at the visual standards we bring to campaigns, launches, and live productions.
          </p>
        </div>

        <div className="mt-10 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-border glass-effect">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={withBasePath("/movie.jpg")}
            className="w-full h-full object-cover"
          >
            <source src={withBasePath("/ChicagoAmp-LogoBuild.mp4")} type="video/mp4" />
          </video>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/portfolio">Explore Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
