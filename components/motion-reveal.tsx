"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"

import { cn } from "@/lib/utils"

type MotionRevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function MotionReveal({ children, className, delay = 0 }: MotionRevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" })

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}
