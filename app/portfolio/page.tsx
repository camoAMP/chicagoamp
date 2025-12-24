import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { CTASection } from "@/components/cta-section"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioHero />
      <PortfolioGrid />
      
      {/* Real Estate Showcase Embed Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Real Estate <span className="text-primary glow-cyan">Showcase</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All projects done by us for the real estate market.
            </p>
          </div>

          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden glass-effect">
            <iframe
              src="https://player.vimeo.com/video/1143186935?badge=0&autopause=0&player_id=0&app_id=58479"
              title="Demos - New Image Builders"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Events Showcase Embed Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Events <span className="text-primary glow-cyan">Showcase</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Highlighting live events and on-site production work.
            </p>
          </div>

          <div className="aspect-[1.896] max-w-4xl mx-auto rounded-xl overflow-hidden glass-effect">
            <iframe
              src="https://player.vimeo.com/video/1148500445?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              title="L1000185"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Bank Video Showcase Embed Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Bank Video <span className="text-primary glow-cyan">Showcase</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Short-form commercial work for financial brands.
            </p>
          </div>

          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden glass-effect">
            <iframe
              src="https://player.vimeo.com/video/1146799101?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              title="Bank Video Cuttingblock"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* School Hockey Showcase Embed Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              School Hockey <span className="text-primary glow-cyan">Highlight</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sports storytelling that captures momentum and community.
            </p>
          </div>

          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden glass-effect">
            <iframe
              src="https://player.vimeo.com/video/1129570330?h=ac0e5972c3&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              title="School Hockey Highlight"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Gala Showcase Embed Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Gala <span className="text-primary glow-cyan">Showcase</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Annual gala coverage and event storytelling.
            </p>
          </div>

          <div className="aspect-[1.896] max-w-4xl mx-auto rounded-xl overflow-hidden glass-effect">
            <iframe
              src="https://player.vimeo.com/video/1132380645?h=83dd58a047&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              title="AIP Annual Gala"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Honda Showcase Embed Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Honda <span className="text-primary glow-cyan">Black Friday</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Retail campaign spot built for high-impact seasonal offers.
            </p>
          </div>

          <div className="aspect-[1.222] max-w-4xl mx-auto rounded-xl overflow-hidden glass-effect">
            <iframe
              src="https://player.vimeo.com/video/768255551?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              title="Honda Black Friday Spot"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Weddings Showcase Embed Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Weddings <span className="text-primary glow-cyan">Showcase</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cinematic wedding films with a focus on emotion and story.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-3">
              <div className="aspect-video rounded-xl overflow-hidden glass-effect">
                <iframe
                  src="https://player.vimeo.com/video/342395374?h=6e1cf2f061&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Matt and Sarah"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">Matt and Sarah</p>
            </div>

            <div className="space-y-3">
              <div className="aspect-video rounded-xl overflow-hidden glass-effect">
                <iframe
                  src="https://player.vimeo.com/video/232547994?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Ashley and Elias Wedding"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">Ashley and Elias</p>
            </div>

            <div className="space-y-3">
              <div className="aspect-video rounded-xl overflow-hidden glass-effect">
                <iframe
                  src="https://player.vimeo.com/video/360461638?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Claire and Dan Guimon"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">Claire and Dan Guimon</p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </main>
  )
}
