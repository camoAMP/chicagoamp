"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, TrendingUp } from "lucide-react"
import { withBasePath } from "@/lib/with-base-path"

type PortfolioResult = {
  label: string
  value: string
}

type PortfolioCategory = "video" | "websites" | "photography" | "branding" | "marketing"

type PortfolioItem = {
  id: number
  title: string
  category: PortfolioCategory
  description: string
  image: string
  results: PortfolioResult[]
  tags: string[]
  link?: string
  linkLabel?: string
  embedUrl?: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Saybrook Brand Film",
    category: "video",
    description: "Cinematic commercial storytelling built to drive awareness and engagement.",
    image: "/portfolio-food-film.jpg",
    results: [
      { label: "Views", value: "100K+" },
      { label: "Engagement", value: "+250%" },
    ],
    tags: ["Video", "Commercial", "Brand Film"],
    link: "/services/commercial-video",
    linkLabel: "View service page",
    embedUrl: "https://player.vimeo.com/video/278586227?app_id=122963&wmode=opaque",
  },
  {
    id: 2,
    title: "Rival - Vigilante",
    category: "video",
    description: "Music video production with stylized lighting and narrative pacing.",
    image: "/portfolio-festival-event.jpg",
    results: [
      { label: "Views", value: "50K+" },
      { label: "Completion", value: "68%" },
    ],
    tags: ["Video", "Music Video", "Cinematography"],
    link: "/services/music-videos",
    linkLabel: "View service page",
    embedUrl: "https://player.vimeo.com/video/336722959?app_id=122963&wmode=opaque",
  },
  {
    id: 3,
    title: "HP AMUG Coverage",
    category: "video",
    description: "Multi-camera event coverage with social-ready recap outputs.",
    image: "/portfolio-tech-conference.jpg",
    results: [
      { label: "Attendees", value: "5K+" },
      { label: "Reach", value: "500K+" },
    ],
    tags: ["Video", "Event Coverage", "Corporate"],
    link: "/services/event-coverage",
    linkLabel: "View service page",
    embedUrl: "https://player.vimeo.com/video/245099976?app_id=122963&wmode=opaque",
  },
  {
    id: 4,
    title: "Beloveful Website",
    category: "websites",
    description: "Brand-focused website with editorial structure and conversion-first storytelling.",
    image: "/portfolio-ecommerce-seo.jpg",
    results: [
      { label: "Type", value: "Live" },
      { label: "Platform", value: "Web" },
    ],
    tags: ["Website", "Brand", "UX"],
    link: "https://beloveful.com",
    linkLabel: "Open live site",
  },
  {
    id: 5,
    title: "Our Community in Unity",
    category: "websites",
    description: "Community nonprofit site focused on programs, impact, and clear navigation.",
    image: "/portfolio-fitness-app.jpg",
    results: [
      { label: "Type", value: "Live" },
      { label: "Audience", value: "Community" },
    ],
    tags: ["Website", "Nonprofit", "Information Architecture"],
    link: "https://ourcommunityinunity.org",
    linkLabel: "Open live site",
  },
  {
    id: 6,
    title: "Editorial Photo Story",
    category: "photography",
    description: "Photography direction for fashion-forward storytelling and branded campaigns.",
    image: "/portfolio-fashion-doc.jpg",
    results: [
      { label: "Images", value: "120+" },
      { label: "Delivery", value: "5 days" },
    ],
    tags: ["Photography", "Editorial", "Campaign"],
    link: "/services/photography",
    linkLabel: "View photography service",
  },
  {
    id: 7,
    title: "Product Photography Set",
    category: "photography",
    description: "E-commerce and product hero photography for listings, social, and paid campaigns.",
    image: "/products.jpg",
    results: [
      { label: "Catalog", value: "75+ SKUs" },
      { label: "Formats", value: "Web + Ads" },
    ],
    tags: ["Photography", "Product", "E-commerce"],
    link: "/services/photography",
    linkLabel: "View photography service",
  },
  {
    id: 8,
    title: "Tech Brand Identity",
    category: "branding",
    description: "Branding and visual system design used across social, site, and campaign assets.",
    image: "/portfolio-tech-branding.jpg",
    results: [
      { label: "Deliverables", value: "40+" },
      { label: "Channels", value: "Multi" },
    ],
    tags: ["Branding", "Identity", "Design Systems"],
    link: "/graphics-branding",
    linkLabel: "View branding page",
  },
  {
    id: 9,
    title: "Campaign Strategy Sprint",
    category: "marketing",
    description: "Integrated launch framework for social, newsletter, and landing page conversion.",
    image: "/portfolio-marketing-campaign.jpg",
    results: [
      { label: "Lead Lift", value: "+38%" },
      { label: "Channels", value: "4" },
    ],
    tags: ["Marketing", "Campaign Ops", "Growth"],
    link: "/marketing",
    linkLabel: "View marketing suite",
  },
  {
    id: 10,
    title: "Hospitality Site Redesign (Placeholder)",
    category: "websites",
    description: "Placeholder project card for upcoming website case study publication.",
    image: "/portfolio-fintech-design.jpg",
    results: [
      { label: "Status", value: "Coming Soon" },
      { label: "Type", value: "Website" },
    ],
    tags: ["Website", "Placeholder", "Case Study"],
    link: "/websites",
    linkLabel: "View website builds",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "video", label: "Videos" },
  { id: "websites", label: "Websites" },
  { id: "photography", label: "Photography" },
  { id: "branding", label: "Branding" },
  { id: "marketing", label: "Marketing" },
] as const

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]["id"]>("all")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") {
      return portfolioItems
    }

    return portfolioItems.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              className={
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:border-primary/50 bg-transparent"
              }
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group relative overflow-hidden glass-effect border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={withBasePath(item.image)}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.category === "video" ? (
                    <Play className="h-16 w-16 text-primary" />
                  ) : (
                    <ExternalLink className="h-12 w-12 text-primary" />
                  )}
                </div>

                <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary glow-cyan">{item.results[0].value}</span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl glass-effect border-border">
            {selectedItem && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold">{selectedItem.title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    {selectedItem.embedUrl ? (
                      <iframe
                        src={selectedItem.embedUrl}
                        title={`${selectedItem.title} embed`}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; fullscreen"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                      />
                    ) : (
                      <img
                        src={withBasePath(selectedItem.image)}
                        alt={selectedItem.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">{selectedItem.description}</p>

                  <div>
                    <h4 className="text-xl font-bold mb-4">Results & Impact</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedItem.results.map((result) => (
                        <Card key={result.label} className="p-6 glass-effect border-border">
                          <div className="flex items-center gap-3 mb-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <span className="text-sm text-muted-foreground">{result.label}</span>
                          </div>
                          <div className="text-3xl font-bold text-primary glow-cyan">{result.value}</div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">Services Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-muted text-foreground text-sm px-4 py-2">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      {selectedItem.link && (
                        <Button asChild variant="outline" size="lg" className="w-full bg-transparent sm:w-auto">
                          {selectedItem.link.startsWith("http") ? (
                            <a href={selectedItem.link} target="_blank" rel="noreferrer">
                              {selectedItem.linkLabel ?? "View project"}
                            </a>
                          ) : (
                            <Link href={selectedItem.link}>{selectedItem.linkLabel ?? "View project"}</Link>
                          )}
                        </Button>
                      )}
                      <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                        <Link href="/contact">Start Your Project</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
