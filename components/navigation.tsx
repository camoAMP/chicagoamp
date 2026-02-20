"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/with-base-path"

const servicesLinks = [
  { href: "/services", label: "All Services" },
  { href: "/services/commercial-video", label: "Commercial Video" },
  { href: "/services/music-videos", label: "Music Videos" },
  { href: "/services/event-coverage", label: "Event Coverage" },
  { href: "/services/photography", label: "Photography" },
  { href: "/services/wedding-films", label: "Wedding Films" },
  { href: "/services/lighting-set-design", label: "Lighting & Set Design" },
  { href: "/services/sound-design", label: "Sound Design" },
  { href: "/world-making", label: "World Making" },
  { href: "/graphics-branding", label: "Graphics & Branding" },
  { href: "/websites", label: "Website Builds" },
  { href: "/marketing", label: "Marketing Suite" },
  { href: "/video-production-services", label: "Video Production Services" },
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
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
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
                Explore
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
            <Link href="/marketing" className="text-foreground hover:text-primary transition-colors">
              Marketing Suite
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              href="/services"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Explore</p>
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
            <Link
              href="/portfolio"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/marketing"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Marketing Suite
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
