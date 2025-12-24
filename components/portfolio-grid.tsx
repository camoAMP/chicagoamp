"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, TrendingUp } from "lucide-react"

type PortfolioResult = {
  label: string
  value: string
}

type PortfolioItem = {
  id: number
  title: string
  category: string
  description: string
  image?: string
  results: PortfolioResult[]
  tags: string[]
  link?: string
  embedUrl?: string
  embedType?: "video" | "post"
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Saybrook - Our World is Worth Fighting For",
    category: "commercial",
    description: "Environmental advocacy video showcasing the importance of preservation.",
    image: "/portfolio-tech-branding.jpg",
    results: [
      { label: "Views", value: "100K+" },
      { label: "Engagement", value: "+250%" },
    ],
    tags: ["Commercial", "Brand Film"],
  },
  {
    id: 2,
    title: "HP AMUG 2024",
    category: "corporate",
    description: "Working with HP 3D team to tell the story of what 3D is and who it helps.",
    image: "/portfolio-marketing-campaign.jpg",
    results: [
      { label: "Attendees", value: "5K+" },
      { label: "Social Reach", value: "500K+" },
    ],
    tags: ["Corporate", "Event Coverage"],
  },
  {
    id: 3,
    title: "Whüzy - Hotel Song",
    category: "music",
    description: "Music video featuring cinematic storytelling and visual artistry.",
    image: "/portfolio-food-film.jpg",
    results: [
      { label: "Views", value: "50K+" },
      { label: "Engagement", value: "+180%" },
    ],
    tags: ["Music Video", "Cinematography"],
  },
  {
    id: 4,
    title: "ABTA Reel - 209K Views",
    category: "corporate",
    description: "Reel by American Brain Tumor Association.",
    image: "/portfolio-festival-event.jpg",
    results: [
      { label: "Views", value: "209K" },
      { label: "Platform", value: "Facebook" },
    ],
    tags: ["Facebook Reel", "Nonprofit", "Community"],
    link: "https://www.facebook.com/share/r/1D7YZsADG2/",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1D7YZsADG2%2F&show_text=0&width=720",
    embedType: "video",
  },
  {
    id: 5,
    title: "ABTA Reel - 17K Views",
    category: "corporate",
    description: "Reel by American Brain Tumor Association.",
    image: "/portfolio-fitness-app.jpg",
    results: [
      { label: "Views", value: "17K" },
      { label: "Platform", value: "Facebook" },
    ],
    tags: ["Facebook Reel", "Nonprofit", "Storytelling"],
    link: "https://www.facebook.com/share/v/16UC1MsdKF/",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F16UC1MsdKF%2F&show_text=0&width=720",
    embedType: "video",
  },
  {
    id: 6,
    title: "The Unusual - Stan",
    category: "music",
    description: "Music video shot in Elgin with creative visuals and storytelling.",
    image: "/portfolio-fashion-doc.jpg",
    results: [
      { label: "Views", value: "40K+" },
      { label: "Social Shares", value: "5K+" },
    ],
    tags: ["Music Video", "Indie"],
  },
  {
    id: 7,
    title: "Wedding Recaps",
    category: "wedding",
    description: "Beautiful wedding videography capturing love stories and special moments.",
    image: "/portfolio-fintech-design.jpg",
    results: [
      { label: "Happy Couples", value: "100+" },
      { label: "Referrals", value: "95%" },
    ],
    tags: ["Wedding", "Event Coverage"],
  },
  {
    id: 8,
    title: "ABTA Reel - 911 Views",
    category: "corporate",
    description: "Reel by American Brain Tumor Association.",
    image: "/portfolio-tech-conference.jpg",
    results: [
      { label: "Views", value: "911" },
      { label: "Platform", value: "Facebook" },
    ],
    tags: ["Facebook Reel", "Nonprofit", "Awareness"],
    link: "https://www.facebook.com/share/v/1TVhEdT7hw/",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1TVhEdT7hw%2F&show_text=0&width=720",
    embedType: "video",
  },
  {
    id: 9,
    title: "Andrew Massih - ABTA Live Stream",
    category: "corporate",
    description:
      "ABTA talk about medical cannabis and the effects on brain tumors. The science broken down is interesting, we are live streaming it now. Give them a like.",
    image: "/portfolio-ecommerce-seo.jpg",
    results: [
      { label: "Format", value: "Live stream" },
      { label: "Platform", value: "Facebook" },
    ],
    tags: ["Facebook Post", "Live Stream", "Education"],
    link: "https://www.facebook.com/share/p/19esS5hJ1t/",
    embedUrl:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fp%2F19esS5hJ1t%2F&show_text=true&width=720",
    embedType: "post",
  },
  {
    id: 10,
    title: "Facebook Reel - 1DYvFWFAfA",
    category: "corporate",
    description: "Facebook reel shared on social.",
    image: "/placeholder.svg",
    results: [
      { label: "Platform", value: "Facebook" },
      { label: "Format", value: "Reel" },
    ],
    tags: ["Facebook Reel", "Social"],
    link: "https://www.facebook.com/share/v/1DYvFWFAfA/",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1DYvFWFAfA%2F&show_text=0&width=720",
    embedType: "video",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "commercial", label: "Commercial" },
  { id: "music", label: "Music Videos" },
  { id: "corporate", label: "Corporate" },
  { id: "wedding", label: "Weddings" },
]

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems =
    selectedCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
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

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group relative overflow-hidden glass-effect border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.category === "film" || item.category === "events" ? (
                    <Play className="h-16 w-16 text-primary" />
                  ) : (
                    <ExternalLink className="h-12 w-12 text-primary" />
                  )}
                </div>

                {/* Results Badge */}
                <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary glow-cyan">{item.results[0].value}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-muted text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl glass-effect border-border">
            {selectedItem && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold">{selectedItem.title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Image/Video */}
                  <div
                    className={`relative rounded-xl overflow-hidden ${
                      selectedItem.embedType === "post" ? "min-h-[420px] md:min-h-[520px]" : "aspect-video"
                    }`}
                  >
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
                      <>
                        <img
                          src={selectedItem.image || "/placeholder.svg"}
                          alt={selectedItem.title}
                          className="w-full h-full object-cover"
                        />
                        {(selectedItem.category === "film" || selectedItem.category === "events") && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                              <Play className="mr-2 h-5 w-5" />
                              Play Video
                            </Button>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground leading-relaxed">{selectedItem.description}</p>

                  {/* Results */}
                  <div>
                    <h4 className="text-xl font-bold mb-4">Results & Impact</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedItem.results.map((result, index) => (
                        <Card key={index} className="p-6 glass-effect border-border">
                          <div className="flex items-center gap-3 mb-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <span className="text-sm text-muted-foreground">{result.label}</span>
                          </div>
                          <div className="text-3xl font-bold text-primary glow-cyan">{result.value}</div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="text-xl font-bold mb-3">Services Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-muted text-foreground text-sm px-4 py-2">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      {selectedItem.link && (
                        <Button asChild variant="outline" size="lg" className="w-full bg-transparent sm:w-auto">
                          <a href={selectedItem.link} target="_blank" rel="noreferrer">
                            View on Facebook
                          </a>
                        </Button>
                      )}
                      <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                        Start Your Project
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
