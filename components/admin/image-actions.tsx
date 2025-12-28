"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080"

export function ImageActions() {
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const handleUpload = async () => {
    if (!file) {
      setStatus("Select a file first.")
      return
    }

    setBusy(true)
    setStatus(null)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("source", "UPLOAD")

      const response = await fetch(`${apiBase}/api/images/dedupe`, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      const result = await response.json()
      setStatus(result.duplicate ? "Duplicate detected. Asset skipped." : "Upload stored successfully.")
    } catch (error) {
      setStatus("Unable to reach image service.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Input
        type="file"
        onChange={(event) => setFile(event.target.files?.[0] ?? null)}
        className="w-64 bg-card/60"
      />
      <Button
        onClick={handleUpload}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
        disabled={busy}
      >
        {busy ? "Uploading..." : "Upload + Dedupe"}
      </Button>
      {status ? <span className="text-sm text-muted-foreground">{status}</span> : null}
    </div>
  )
}
