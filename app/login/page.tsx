"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    await signIn("credentials", { email, password, callbackUrl: "/admin" })
    setLoading(false)
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <Card className="glass-effect border-border w-full max-w-md">
        <CardContent className="px-6 pt-8 pb-10 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-display font-semibold">Chicago AMP Access</h1>
            <p className="text-sm text-muted-foreground">Sign in to manage Vimeo content.</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground" htmlFor="password">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
