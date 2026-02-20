"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { servicesData } from "@/lib/services-data"
import { withBasePath } from "@/lib/with-base-path"

export function BentoServices() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Our <span className="text-primary glow-cyan">Creative Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            World-building through lighting, sound, and set design. Creating realms for the stories we tell.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = service.icon
            return (
              <Link href={`/services/${service.slug}`} key={service.slug}>
                <Card className="group relative h-full p-8 glass-effect border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />

                  <div className="relative space-y-4">
                    {/* Show video if available, otherwise show image or icon */}
                    {service.video ? (
                      <div className="w-full h-32 rounded-lg overflow-hidden">
                        <iframe
                          src={service.video}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    ) : service.image ? (
                      <div className="w-full h-32 rounded-lg overflow-hidden">
                        <img 
                          src={withBasePath(service.image)} 
                          alt={service.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    ) : (
                      <div className={`${service.color} w-12 h-12 flex items-center justify-center`}>
                        <Icon size={32} />
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>

                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                    <div className="pt-4 border-t border-border">
                      <span className={`text-sm font-semibold ${service.color}`}>{service.metrics}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
