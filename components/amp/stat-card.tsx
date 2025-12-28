import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type StatCardProps = {
  label: string
  value: string
  detail?: string
  className?: string
}

export function StatCard({ label, value, detail, className }: StatCardProps) {
  return (
    <Card className={cn("glass-effect border-primary/20", className)}>
      <CardContent className="px-6 pt-6">
        <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </div>
        <div className="text-2xl sm:text-3xl font-semibold text-primary mt-2">
          {value}
        </div>
        {detail ? (
          <div className="text-sm text-muted-foreground mt-1">{detail}</div>
        ) : null}
      </CardContent>
    </Card>
  )
}
