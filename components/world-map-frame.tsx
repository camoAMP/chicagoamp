"use client"

import dynamic from "next/dynamic"

const WorldMap = dynamic(() => import("./world-map").then((mod) => mod.WorldMap), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-muted/20 animate-pulse" />,
})

type WorldMapFrameProps = {
  className?: string
}

export function WorldMapFrame({ className }: WorldMapFrameProps) {
  return <WorldMap className={className} />
}
