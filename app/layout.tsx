import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Zilla_Slab } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  variable: "--font-zilla-slab",
  display: "swap",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Chicago AMP | Modern Video Marketing Platform",
  description:
    "Chicago AMP is a modern video marketing platform with Vimeo-powered media management, cinematic storytelling, and revenue intelligence.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Chicago AMP | Modern Video Marketing Platform",
    description:
      "A cutting-edge creative media agency with Vimeo-powered video management, image intelligence, and marketing automation.",
    url: "https://www.chicagoamp.com",
    siteName: "Chicago AMP",
    images: [
      {
        url: "/chicago-amp-logo.png",
        width: 1200,
        height: 630,
        alt: "Chicago AMP",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago AMP | Modern Video Marketing Platform",
    description:
      "Vimeo-powered video management, smart image handling, and revenue dashboards built for modern campaigns.",
    images: ["/chicago-amp-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <body
        className={`${spaceGrotesk.variable} ${zillaSlab.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
