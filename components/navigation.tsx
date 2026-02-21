"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/with-base-path"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/labs", label: "Labs" },
  { href: "/culture", label: "Culture" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Chicago AMP Home">
            <img src={withBasePath("/chicago-amp-logo.png")} alt="Chicago AMP Logo" className="h-14 w-14 object-contain" />
            <span className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground sm:block">
              Chicago AMP
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.18em] text-foreground/85 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90" data-cursor="explore">
              <Link href="/#project-builder">Build Your World</Link>
            </Button>
          </div>

          <button className="text-foreground md:hidden" onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen ? (
          <div className="space-y-3 border-t border-border/60 py-4 md:hidden">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm uppercase tracking-[0.2em] text-foreground/90 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#project-builder" onClick={() => setIsOpen(false)}>
                Build Your World
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
