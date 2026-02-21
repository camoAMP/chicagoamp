"use client"

import { FormEvent, useMemo, useState } from "react"
import { Bot, Send, User } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type BotMessage = {
  role: "bot" | "user"
  text: string
}

const quickPrompts = [
  "How do you price a Discovery Lab engagement?",
  "What does the AI-Enhanced Suite include?",
  "Can you handle HLS/DASH delivery for 4K?",
  "How fast can we launch a paid distribution sprint?",
]

function responseForPrompt(input: string) {
  const normalized = input.toLowerCase()

  if (normalized.includes("price") || normalized.includes("pricing") || normalized.includes("cost")) {
    return "Discovery Lab pricing starts with Starter World-Builder packages for scoped campaigns, then scales to Growth Accelerator and Enterprise Immersion retainers based on channels, production volume, and distribution complexity."
  }

  if (normalized.includes("ai")) {
    return "The AI-Enhanced Suite includes concept variant generation, edit-angle testing, message adaptation by audience segment, and performance-driven creative iteration loops."
  }

  if (normalized.includes("hls") || normalized.includes("dash") || normalized.includes("4k") || normalized.includes("delivery")) {
    return "Yes. We deliver high-fidelity masters and adaptive multi-bitrate HLS/DASH output ladders to support stable, buffer-resistant 4K playback."
  }

  if (normalized.includes("launch") || normalized.includes("timeline") || normalized.includes("sprint") || normalized.includes("paid")) {
    return "Typical launch windows: 2-4 weeks for starter campaign systems, 4-8 weeks for multi-channel growth programs, depending on production and media requirements."
  }

  return "Great question. Our Discovery Lab team can map your narrative goal, channel strategy, and production stack into a custom scope. Choose \"Build Your World\" to start a tailored plan."
}

export function DiscoveryBot() {
  const [messages, setMessages] = useState<BotMessage[]>([
    {
      role: "bot",
      text: "I’m the Discovery Bot. Ask about scope, pricing, timeline, or technical delivery and I’ll guide your next step.",
    },
  ])
  const [input, setInput] = useState("")

  const suggestedCount = useMemo(() => quickPrompts.length, [])

  const submitMessage = (text: string) => {
    const prompt = text.trim()
    if (!prompt) return

    setMessages((prev) => [...prev, { role: "user", text: prompt }, { role: "bot", text: responseForPrompt(prompt) }])
    setInput("")
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    submitMessage(input)
  }

  return (
    <Card className="border-border/70 bg-card/70 p-5 backdrop-blur sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Interactive Discovery Bot</p>
          <h3 className="text-2xl font-bold">24/7 Scope Guidance</h3>
        </div>
        <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs text-primary">
          {suggestedCount} prompts
        </span>
      </div>

      <div className="mb-4 grid gap-2 sm:grid-cols-2">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => submitMessage(prompt)}
            className="rounded-lg border border-border bg-background/45 px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:border-primary/45 hover:text-foreground"
            data-cursor="explore"
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="mb-4 max-h-72 space-y-3 overflow-y-auto rounded-xl border border-border/70 bg-background/35 p-3">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`flex items-start gap-2 ${
              message.role === "user" ? "justify-end text-right" : "justify-start text-left"
            }`}
          >
            {message.role === "bot" ? (
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Bot className="h-3.5 w-3.5" />
              </span>
            ) : null}
            <p
              className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                message.role === "bot"
                  ? "border border-border bg-card/80 text-foreground"
                  : "bg-primary/20 text-primary border border-primary/35"
              }`}
            >
              {message.text}
            </p>
            {message.role === "user" ? (
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-accent">
                <User className="h-3.5 w-3.5" />
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about pricing, timeline, or technical delivery..."
          className="h-11 flex-1 rounded-lg border border-border bg-background/45 px-3 text-sm"
        />
        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Card>
  )
}
