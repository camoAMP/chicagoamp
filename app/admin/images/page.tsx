import { MotionReveal } from "@/components/motion-reveal"
import { PageHeader } from "@/components/amp/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { imageAssets } from "@/lib/amp-data"
import { ImageActions } from "@/components/admin/image-actions"
import { withBasePath } from "@/lib/with-base-path"

const statusStyles: Record<string, string> = {
  Ready: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Optimized: "bg-primary/15 text-primary border-primary/30",
  Duplicate: "bg-secondary/15 text-secondary border-secondary/30",
  Watermarked: "bg-accent/15 text-accent border-accent/30",
}

export default function AdminImagesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Image Manager"
        title="Smart Image Library"
        subtitle="Auto-grab Vimeo thumbnails, detect duplicates by SHA256, and batch export WebP/AVIF assets."
      />

      <Card className="glass-effect border-primary/20">
        <CardContent className="px-6 pt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Search + Filter</div>
            <p className="text-sm text-muted-foreground">
              Find assets across Vimeo imports, uploads, and generated OpenGraph images.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Input placeholder="Search by tag, hash, or campaign" className="w-64 bg-card/60" />
            <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
              Run Dedupe Scan
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Bulk Optimize
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect border-border">
        <CardContent className="px-6 pt-6 space-y-3">
          <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Image Service</div>
          <div className="text-lg font-semibold">Upload + SHA256 dedupe</div>
          <ImageActions />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {imageAssets.map((image, index) => (
          <MotionReveal key={image.id} delay={index * 0.04}>
            <Card className="glass-effect border-border overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img src={withBasePath(image.url)} alt={image.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute left-3 top-3">
                  <Badge className={statusStyles[image.status] ?? "bg-muted"}>{image.status}</Badge>
                </div>
              </div>
              <CardContent className="px-6 pt-5 pb-6 space-y-2">
                <div className="text-lg font-semibold">{image.title}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{image.id}</div>
                <div className="text-sm text-muted-foreground">SHA256: {image.hash}</div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{image.size}</span>
                  <span>{image.source}</span>
                </div>
              </CardContent>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </div>
  )
}
