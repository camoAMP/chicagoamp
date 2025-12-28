import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type PageHeaderProps = {
  title: string
  subtitle?: string
  eyebrow?: string
  className?: string
}

export function PageHeader({ title, subtitle, eyebrow, className }: PageHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {eyebrow ? (
        <Badge className="w-fit bg-primary/15 text-primary border-primary/30">
          {eyebrow}
        </Badge>
      ) : null}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold tracking-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  )
}
