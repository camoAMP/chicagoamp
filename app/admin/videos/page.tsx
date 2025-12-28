import { MotionReveal } from "@/components/motion-reveal"
import { PageHeader } from "@/components/amp/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { videoRows } from "@/lib/amp-data"

const statuses: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Transcoding: "bg-primary/15 text-primary border-primary/30",
  Scheduled: "bg-secondary/15 text-secondary border-secondary/30",
}

export default function AdminVideosPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Vimeo Admin"
        title="Video Uploads + Transcoding"
        subtitle="Drag-drop new files, monitor transcoding, and batch-edit SEO metadata before launch."
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr]">
        <MotionReveal>
          <Card className="glass-effect border-primary/20">
            <CardContent className="px-6 pt-6 space-y-4">
              <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Upload Queue</div>
              <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-8 text-center">
                <div className="text-lg font-semibold">Drop video files here</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Supports MP4, MOV, ProRes. Auto-creates poster frames + thumbnails.
                </p>
                <Button className="mt-5 bg-primary text-primary-foreground hover:bg-primary/90">
                  Browse Files
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Transcoding Status</span>
                  <span className="text-primary">3 jobs running</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-2/3 rounded-full bg-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <Card className="glass-effect border-secondary/20">
            <CardContent className="px-6 pt-6 space-y-4">
              <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Bulk SEO Metadata</div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Auto-generate titles",
                  "Inject schema markup",
                  "Normalize tags",
                  "Sync OpenGraph",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-border/60 p-4 bg-background/40">
                    <div className="text-sm font-medium">{item}</div>
                    <div className="text-xs text-muted-foreground mt-1">Apply to all selected videos</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="border-secondary/40 text-secondary hover:bg-secondary/10">
                Run SEO Batch
              </Button>
            </CardContent>
          </Card>
        </MotionReveal>
      </div>

      <Card className="glass-effect border-border">
        <CardContent className="px-6 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Latest Videos</div>
              <div className="text-2xl font-semibold mt-1">Vimeo Library</div>
            </div>
            <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
              Export CSV
            </Button>
          </div>
          <Table className="mt-6">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>SEO</TableHead>
                <TableHead>Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {videoRows.map((video) => (
                <TableRow key={video.id}>
                  <TableCell className="text-muted-foreground">{video.id}</TableCell>
                  <TableCell className="font-medium">{video.title}</TableCell>
                  <TableCell>
                    <Badge className={statuses[video.status] ?? "bg-muted text-foreground"}>
                      {video.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{video.duration}</TableCell>
                  <TableCell>{video.seo}</TableCell>
                  <TableCell className="text-muted-foreground">{video.lastUpdated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
