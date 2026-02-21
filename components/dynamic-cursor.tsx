"use client"

import { useEffect, useState, type ReactNode } from "react"
import { motion, useSpring } from "framer-motion"
import { Compass, Play } from "lucide-react"

type CursorMode = "default" | "play" | "explore"

const modeStyles: Record<Exclude<CursorMode, "default">, { label: string; icon: ReactNode; className: string }> = {
  play: {
    label: "PLAY",
    icon: <Play className="h-3.5 w-3.5" />,
    className: "bg-primary text-primary-foreground border-primary/80",
  },
  explore: {
    label: "EXPLORE",
    icon: <Compass className="h-3.5 w-3.5" />,
    className: "bg-accent text-accent-foreground border-accent/80",
  },
}

export function DynamicCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [mode, setMode] = useState<CursorMode>("default")

  const x = useSpring(0, { stiffness: 900, damping: 55, mass: 0.25 })
  const y = useSpring(0, { stiffness: 900, damping: 55, mass: 0.25 })

  useEffect(() => {
    if (typeof window === "undefined") return

    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    if (!supportsFinePointer) return

    setEnabled(true)
    document.body.classList.add("amp-cursor-on")

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
      setVisible(true)

      const target = event.target instanceof HTMLElement ? event.target : null
      const cursorHint = target?.closest<HTMLElement>("[data-cursor]")?.dataset.cursor
      if (cursorHint === "play" || cursorHint === "explore") {
        setMode(cursorHint)
        return
      }
      setMode("default")
    }

    const handleLeave = () => setVisible(false)

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("blur", handleLeave)
    document.addEventListener("mouseleave", handleLeave)

    return () => {
      document.body.classList.remove("amp-cursor-on")
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("blur", handleLeave)
      document.removeEventListener("mouseleave", handleLeave)
    }
  }, [x, y])

  if (!enabled) return null

  const isDefault = mode === "default"
  const modeStyle = !isDefault ? modeStyles[mode] : null

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[120] hidden md:block transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        translateX: x,
        translateY: y,
      }}
    >
      <motion.div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border backdrop-blur ${
          isDefault ? "h-4 w-4 border-primary/70 bg-primary/40" : `h-12 min-w-12 px-4 ${modeStyle?.className ?? ""}`
        }`}
        animate={{
          scale: visible ? 1 : 0.8,
        }}
        transition={{ duration: 0.15 }}
      >
        {isDefault ? null : (
          <div className="flex h-full items-center justify-center gap-1.5 text-[10px] font-semibold tracking-[0.2em]">
            {modeStyle?.icon}
            <span>{modeStyle?.label}</span>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
