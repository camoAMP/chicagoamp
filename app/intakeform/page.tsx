"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import type { LucideIcon } from "lucide-react"
import {
  AlertTriangle,
  BarChart3,
  Building2,
  ChevronLeft,
  ChevronRight,
  CloudUpload,
  IdCard,
  LayoutDashboard,
  Lightbulb,
  Menu,
  Network,
  Palette,
  Send,
  Server,
  ShoppingCart,
  Signature,
  Target,
  Users,
  X,
} from "lucide-react"

type IntakeSection = {
  id: string
  title: string
  heading: string
  icon: LucideIcon
}

const STORAGE_KEY = "chicagoAmpMasterIntakeDraft"

const sectionsList: IntakeSection[] = [
  { id: "s1-1", title: "1.1 LEGAL & CONTACT", heading: "LEGAL & CONTACT INTELLIGENCE", icon: IdCard },
  { id: "s1-2", title: "1.2 COMPANY BACKGROUND", heading: "COMPANY BACKGROUND", icon: Building2 },
  { id: "s1-3", title: "1.3 TARGET AUDIENCE", heading: "TARGET AUDIENCE", icon: Users },
  { id: "s1-4", title: "1.4 COMPETITORS", heading: "COMPETITOR LANDSCAPE", icon: BarChart3 },
  { id: "s2-1", title: "2.1 BRAND STATUS", heading: "CURRENT BRAND STATUS", icon: Palette },
  { id: "s2-2", title: "2.2 BRAND PERSONALITY", heading: "BRAND PERSONALITY", icon: Lightbulb },
  { id: "s2-3", title: "2.3 LOGO REQUIREMENTS", heading: "LOGO REQUIREMENTS", icon: Signature },
  { id: "s3-1", title: "3.1 OBJECTIVES", heading: "PROJECT OBJECTIVES", icon: Target },
  { id: "s3-2", title: "3.2 SITE ARCHITECTURE", heading: "SITE ARCHITECTURE", icon: Network },
  { id: "s3-3", title: "3.3 E-COMMERCE", heading: "E-COMMERCE REQUIREMENTS", icon: ShoppingCart },
  { id: "s3-4", title: "3.4 USER PORTAL", heading: "USER PORTAL REQUIREMENTS", icon: LayoutDashboard },
  { id: "s3-5", title: "3.5 TECHNICAL", heading: "TECHNICAL REQUIREMENTS", icon: Server },
]

function collectFormData(form: HTMLFormElement | null) {
  if (!form) return {} as Record<string, string>

  const payload: Record<string, string> = {}
  for (const [key, value] of new FormData(form).entries()) {
    payload[key] = typeof value === "string" ? value : value.name
  }
  return payload
}

export default function IntakeFormPage() {
  const [storageAvailable, setStorageAvailable] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [filledFieldCount, setFilledFieldCount] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)

  const progress = useMemo(() => {
    const sectionProgress = ((currentIndex + 1) / sectionsList.length) * 70
    const fieldProgress = Math.min(filledFieldCount * 4, 29)
    return Math.min(99, Math.round(sectionProgress + fieldProgress))
  }, [currentIndex, filledFieldCount])

  const currentSection = sectionsList[currentIndex]

  const sectionCounter = `${String(currentIndex + 1).padStart(2, "0")} / ${sectionsList.length}`

  function updateProgress() {
    const data = collectFormData(formRef.current)
    const count = Object.values(data).filter((value) => value.trim().length > 0).length
    setFilledFieldCount(count)
  }

  function goToSection(index: number) {
    const next = Math.max(0, Math.min(index, sectionsList.length - 1))
    setCurrentIndex(next)
    setMobileMenuOpen(false)
  }

  function nextSection() {
    goToSection(currentIndex + 1)
  }

  function prevSection() {
    goToSection(currentIndex - 1)
  }

  function saveDraft() {
    if (!storageAvailable) {
      window.alert("Save file locally for full auto-save")
      return
    }

    const data = collectFormData(formRef.current)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    window.alert("DRAFT SAVED")
  }

  function exportToJSON() {
    const data = collectFormData(formRef.current)
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = `chicago-amp-intake-${new Date().toISOString().slice(0, 10)}.json`
    link.click()

    URL.revokeObjectURL(url)
  }

  function submitForm() {
    if (!window.confirm("Submit to Chicago AMP?")) return
    saveDraft()
    exportToJSON()
    window.alert("SUBMISSION RECEIVED — THANK YOU")
  }

  useEffect(() => {
    try {
      localStorage.setItem("_test", "1")
      localStorage.removeItem("_test")
    } catch {
      setStorageAvailable(false)
    }
  }, [])

  useEffect(() => {
    if (!storageAvailable) return

    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored || !formRef.current) {
      updateProgress()
      return
    }

    try {
      const parsed = JSON.parse(stored) as Record<string, string>
      for (const [name, value] of Object.entries(parsed)) {
        const field = formRef.current.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
          `[name="${name}"]`,
        )
        if (field) field.value = value
      }
    } catch {
      // Ignore malformed saved drafts.
    }

    updateProgress()
  }, [storageAvailable])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {!storageAvailable ? (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#ff6b35] to-[#ffd700] text-black py-3 px-6 text-sm font-medium text-center z-50 flex items-center justify-center gap-3">
          <AlertTriangle className="h-4 w-4" />
          <span>Auto-save disabled in sandbox. Save file locally for full features.</span>
        </div>
      ) : null}

      <div className="flex h-screen">
        <aside className="hidden lg:flex w-80 bg-sidebar border-r border-sidebar-border flex-col">
          <div className="p-8 border-b border-sidebar-border flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center text-4xl font-black text-primary-foreground neon-border">
              CA
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tighter glow-cyan font-display">CHICAGO AMP</h1>
              <p className="text-accent text-xs tracking-[4px] font-medium -mt-1">MASTER INTAKE</p>
            </div>
          </div>

          <nav className="flex-1 overflow-auto py-8 px-4">
            {sectionsList.map((section, index) => {
              const Icon = section.icon
              const active = index === currentIndex
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goToSection(index)}
                  className={`nav-link flex w-full items-center gap-4 px-8 py-5 rounded-2xl mx-3 mb-1 text-left transition-colors ${
                    active
                      ? "active bg-primary/10 text-primary border-l-[3px] border-l-primary"
                      : "text-muted-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="font-medium">{section.title}</span>
                </button>
              )
            })}
          </nav>

          <div className="p-6 border-t border-sidebar-border">
            <div className="flex justify-between text-xs text-muted-foreground mb-3">
              <span>PROGRESS</span>
              <span className="font-mono text-primary">{progress}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-700 bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_12px_var(--primary)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </aside>

        <aside
          className={`fixed lg:hidden inset-y-0 left-0 z-50 w-80 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-8 border-b border-sidebar-border flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center text-4xl font-black text-primary-foreground neon-border">
                CA
              </div>
              <h1 className="text-4xl font-bold tracking-tighter glow-cyan font-display">CHICAGO AMP</h1>
            </div>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="text-foreground">
              <X className="h-8 w-8" />
            </button>
          </div>

          <nav className="flex-1 overflow-auto py-8 px-4">
            {sectionsList.map((section, index) => {
              const Icon = section.icon
              const active = index === currentIndex
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goToSection(index)}
                  className={`nav-link flex w-full items-center gap-4 px-8 py-5 rounded-2xl mx-3 mb-1 text-left transition-colors ${
                    active
                      ? "active bg-primary/10 text-primary border-l-[3px] border-l-primary"
                      : "text-muted-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="font-medium">{section.title}</span>
                </button>
              )
            })}
          </nav>
        </aside>

        {mobileMenuOpen ? (
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 z-40 lg:hidden"
            aria-label="Close section menu"
          />
        ) : null}

        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 border-b border-border bg-card/90 backdrop-blur-xl px-6 flex items-center justify-between sticky top-0 z-30">
            <div className="flex items-center gap-4">
              <button type="button" onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-primary">
                <Menu className="h-8 w-8" />
              </button>
              <h2 className="text-xl font-semibold font-display tracking-tight">{currentSection.title}</h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={saveDraft}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <CloudUpload className="h-4 w-4" />
                <span className="hidden sm:inline">SAVE DRAFT</span>
              </button>
              <button
                type="button"
                onClick={submitForm}
                className="bg-primary hover:bg-[#00b8e0] text-primary-foreground font-semibold px-8 py-2.5 rounded-2xl flex items-center gap-3 transition-all active:scale-95 neon-border"
              >
                <Send className="h-4 w-4" />
                <span className="hidden sm:inline">SUBMIT TO AMP</span>
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-6 lg:p-12 pb-28" id="form-container">
            <form ref={formRef} id="intakeForm" className="max-w-4xl mx-auto space-y-16" onInput={updateProgress}>
              {sectionsList.map((section, index) => (
                <section key={section.id} id={section.id} className={`section ${index === currentIndex ? "" : "hidden"}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1" />
                    <span className="text-primary text-sm tracking-[3px] font-medium">
                      SECTION {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1" />
                  </div>

                  <h2 className="text-5xl font-display font-bold tracking-tighter mb-10 glow-cyan">{section.heading}</h2>

                  {section.id === "s1-1" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label htmlFor="legal-name" className="text-xs text-muted-foreground tracking-widest">
                          LEGAL BUSINESS NAME
                        </label>
                        <input
                          id="legal-name"
                          name="legal_name"
                          type="text"
                          className="w-full px-6 py-5 text-lg bg-input border border-border rounded-[var(--radius)] transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
                          placeholder="Chicago AMP LLC"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="primary-contact" className="text-xs text-muted-foreground tracking-widest">
                          PRIMARY CONTACT NAME
                        </label>
                        <input
                          id="primary-contact"
                          name="primary_contact"
                          type="text"
                          className="w-full px-6 py-5 text-lg bg-input border border-border rounded-[var(--radius)] transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
                          placeholder="Full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs text-muted-foreground tracking-widest">
                          EMAIL ADDRESS
                        </label>
                        <input
                          id="email"
                          name="email_address"
                          type="email"
                          className="w-full px-6 py-5 text-lg bg-input border border-border rounded-[var(--radius)] transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
                          placeholder="name@company.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-xs text-muted-foreground tracking-widest">
                          PHONE NUMBER
                        </label>
                        <input
                          id="phone"
                          name="phone_number"
                          type="tel"
                          className="w-full px-6 py-5 text-lg bg-input border border-border rounded-[var(--radius)] transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
                          placeholder="(312) 555-0147"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="website" className="text-xs text-muted-foreground tracking-widest">
                          CURRENT WEBSITE
                        </label>
                        <input
                          id="website"
                          name="current_website"
                          type="url"
                          className="w-full px-6 py-5 text-lg bg-input border border-border rounded-[var(--radius)] transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
                          placeholder="https://www.yoursite.com"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="glass-effect rounded-2xl p-8 border border-border space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Capture details for <span className="text-foreground">{section.title}</span>.
                      </p>
                      <label htmlFor={`${section.id}-notes`} className="text-xs text-muted-foreground tracking-widest">
                        SECTION NOTES
                      </label>
                      <textarea
                        id={`${section.id}-notes`}
                        name={`${section.id}_notes`}
                        rows={8}
                        className="w-full px-6 py-5 text-base bg-input border border-border rounded-[var(--radius)] transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
                        placeholder={`Add notes for ${section.heading.toLowerCase()}...`}
                      />
                    </div>
                  )}
                </section>
              ))}
            </form>
          </div>

          <div className="h-16 border-t border-border bg-card/90 backdrop-blur-xl px-6 flex items-center justify-between fixed bottom-0 left-0 right-0 z-30">
            <button
              type="button"
              onClick={prevSection}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">PREV</span>
            </button>
            <div className="font-mono text-accent text-lg">{sectionCounter}</div>
            <button
              type="button"
              onClick={nextSection}
              className="flex items-center gap-3 text-primary hover:text-foreground font-medium"
            >
              <span className="hidden sm:inline">NEXT</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
