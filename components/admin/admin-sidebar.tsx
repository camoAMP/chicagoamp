"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  DollarSign,
  ImageIcon,
  LayoutDashboard,
  Megaphone,
  Search,
  Video,
} from "lucide-react"

import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Videos", href: "/admin/videos", icon: Video },
  { label: "Images", href: "/admin/images", icon: ImageIcon },
  { label: "Marketing", href: "/marketing", icon: Megaphone },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Revenue", href: "/revenue", icon: DollarSign },
  { label: "SEO Lab", href: "/seo", icon: Search },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex lg:flex-col w-72 border-r border-border bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-3 px-6 py-6">
        <img src="/chicago-amp-logo.png" alt="Chicago AMP" className="h-12 w-12 object-contain" />
        <div>
          <div className="text-lg font-semibold">Chicago AMP</div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Command</div>
        </div>
      </div>
      <nav className="flex-1 px-4 pb-6 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition",
                isActive
                  ? "bg-primary/15 text-primary neon-border"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5",
              )}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="px-6 pb-6">
        <div className="glass-effect rounded-xl p-4 text-xs text-muted-foreground">
          Vimeo uploads + smart image handling live in one grid.
        </div>
      </div>
    </aside>
  )
}
