import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Zilla_Slab } from "next/font/google"
import Script from "next/script"
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
  metadataBase: new URL("https://www.chicagoamp.com"),
  title: {
    default: "Chicago AMP | Digital Theatre for Serious Results",
    template: "%s | Chicago AMP",
  },
  description:
    "Chicago AMP builds cinematic, performance-driven narrative systems for brands that need market-dominating creative and measurable growth.",
  keywords: [
    "Chicago Video Marketing Agency",
    "High-End Brand Storytelling",
    "Performance-Driven Creative Studio",
    "Cinematic Campaign Strategy",
  ],
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Chicago AMP | Digital Theatre for Serious Results",
    description:
      "Chicago AMP builds cinematic, performance-driven narrative systems for brands that need market-dominating creative and measurable growth.",
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
    title: "Chicago AMP | Digital Theatre for Serious Results",
    description:
      "Chicago AMP builds cinematic, performance-driven narrative systems for brands that need market-dominating creative and measurable growth.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G6D4ES1BSD"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G6D4ES1BSD');
          `}
        </Script>
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
