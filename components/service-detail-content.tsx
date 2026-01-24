import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ServiceDetail } from "@/lib/services-data"
import { withBasePath } from "@/lib/with-base-path"

interface ServiceDetailContentProps {
  service: ServiceDetail
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const Icon = service.icon
  const whatYouGet =
    service.whatYouGet ??
    service.highlights?.map((highlight) => `${highlight.label} — ${highlight.description}`) ??
    []
  const perfectFor = service.perfectFor ?? ""
  const statLine = service.statLine ?? service.metrics
  const ctaLine =
    service.ctaLine ?? "Share your goals and we'll send a tailored scope, timeline, and budget for approval."
  const introParagraph = service.introParagraph ?? service.longDescription
  const heroTagline = service.heroTagline ?? service.description

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className={`${service.color} w-14 h-14 flex items-center justify-center rounded-full bg-background/70`}>
                <Icon size={36} />
              </div>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Creative Solution</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{service.title}</h1>
                <p className="text-xl font-semibold text-primary/80">{heroTagline}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{introParagraph}</p>
                {statLine && <p className="italic text-sm text-muted-foreground">{statLine}</p>}
              </div>
              <div className="flex flex-wrap gap-4">
                {service.stats.map((stat) => (
                  <Card key={stat.label} className="p-4 glass-effect border-border min-w-[140px]">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  </Card>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Start a {service.title} project</Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link href="/portfolio">See related work</Link>
                </Button>
              </div>
            </div>

            <div className="glass-effect rounded-3xl overflow-hidden border border-border shadow-2xl">
              {service.video ? (
                <div className="aspect-video">
                  <iframe
                    src={service.video}
                    title={`${service.title} showcase`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <img
                  src={withBasePath(service.image || "/placeholder.svg")}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Card className="glass-effect border-border p-8 space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">What you get</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {whatYouGet.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {perfectFor && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Perfect for</h3>
                <p className="text-muted-foreground">{perfectFor}</p>
              </div>
            )}
          </Card>

          {service.additionalNote && (
            <Card className="glass-effect border-border p-8">
              <p className="text-muted-foreground">{service.additionalNote}</p>
            </Card>
          )}

          {(service.onboardingSteps || service.requirements) && (
            <div className="grid gap-10 lg:grid-cols-2">
              {service.onboardingSteps && (
                <Card className="glass-effect border-border p-8 space-y-4">
                  <h3 className="text-2xl font-bold">Client onboarding</h3>
                  <p className="text-muted-foreground">
                    We guide you through a structured process so projects stay on-brand and on-budget.
                  </p>
                  <div className="space-y-3">
                    {service.onboardingSteps.map((step, index) => (
                      <div key={step.title} className="space-y-1">
                        <p className="text-sm uppercase tracking-[0.2em] text-primary">
                          Step {index + 1}: {step.title}
                        </p>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
              {service.requirements && (
                <Card className="glass-effect border-border p-8 space-y-3">
                  <h3 className="text-2xl font-bold">What we need from you</h3>
                  <p className="text-muted-foreground">
                    Sharing these details upfront keeps the creative brief tight and accelerates approvals.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {service.requirements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          )}

          <Card className="glass-effect border-border p-8 space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Ready when you are</p>
            <h3 className="text-2xl font-bold">Let’s build your {service.title}</h3>
            <p className="text-muted-foreground">{ctaLine}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact us today</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/portfolio">View recent work</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
