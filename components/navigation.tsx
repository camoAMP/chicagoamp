"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/with-base-path"

const servicesLinks = [
  { href: "/world-making", label: "World Making" },
  { href: "/websites", label: "All Our Website Builds" },
  { href: "/marketin", label: "Marketing" },
  { href: "/video-production-services", label: "Video Production Services" },
  { href: "/music-videos", label: "Cinematic Music Videos" },
  { href: "/event-coverage", label: "Event Coverage" },
  { href: "/wedding-films", label: "Wedding Films" },
  { href: "/lighting-set-design", label: "Lighting & Set Design" },
  { href: "/sound-design", label: "Sound Design" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openServices = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setIsServicesOpen(true)
  }

  const delayCloseServices = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
    }
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 150)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <img 
                src={withBasePath("/chicago-amp-logo.png")} 
                alt="Chicago AMP Logo" 
                className="h-20 w-20 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <div className="relative" onMouseEnter={openServices} onMouseLeave={delayCloseServices}>
              <button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                onFocus={openServices}
                onBlur={delayCloseServices}
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown size={16} className={isServicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute right-0 top-full translate-y-3 w-64 rounded-2xl border border-border bg-background shadow-xl glass-effect p-3 space-y-1"
                  onMouseEnter={openServices}
                  onMouseLeave={delayCloseServices}
                >
                  {servicesLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block rounded-xl px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Services</p>
              <div className="space-y-2">
                {servicesLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-foreground hover:text-primary transition-colors pl-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/portfolio" className="block text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="block text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="block text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
