"use client"

import Link from "next/link"
import { Bell, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AdminTopbar() {
  return (
    <div className="flex flex-col gap-4 border-b border-border bg-background/80 px-6 py-4 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Search size={18} />
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Chicago AMP</div>
          <div className="text-lg font-semibold">Vimeo Operations Console</div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search videos, images, campaigns"
            className="pl-9 w-64 bg-card/60 border-border"
          />
        </div>
        <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
          <Bell className="mr-2 h-4 w-4" />
          Alerts
        </Button>
        <Link href="/admin/videos">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Upload
          </Button>
        </Link>
      </div>
    </div>
  )
}
