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
  title: "Chicago AMP | Explore Our Creative World",
  description:
    "Discover Chicago AMP's innovative storytelling through film, art, and events. Experience our world-building expertise in lighting, sound, and design.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Chicago AMP | Explore Our Creative World",
    description:
      "Discover Chicago AMP's innovative storytelling through film, art, and events. Experience our world-building expertise in lighting, sound, and design.",
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
    title: "Chicago AMP | Explore Our Creative World",
    description:
      "Discover Chicago AMP's innovative storytelling through film, art, and events. Experience our world-building expertise in lighting, sound, and design.",
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
