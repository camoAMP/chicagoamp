import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="glass-effect border-border p-8 sm:p-10 space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Legal</p>
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground">Last updated: February 12, 2026</p>
            </div>

            <p className="text-muted-foreground">
              Chicago AMP respects your privacy. This page explains what basic information we collect, how it is used,
              and how to contact us with questions.
            </p>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Information We Collect</h2>
              <p className="text-muted-foreground">
                We may collect contact details submitted through forms, along with standard website analytics such as
                pages viewed and session activity.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">How We Use Information</h2>
              <p className="text-muted-foreground">
                We use submitted information to respond to inquiries, deliver requested services, and improve website
                performance and user experience.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Contact</h2>
              <p className="text-muted-foreground">
                For any privacy-related request, email us at{" "}
                <a href="mailto:info@chicagoamp.com" className="text-primary hover:underline">
                  info@chicagoamp.com
                </a>
                .
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
