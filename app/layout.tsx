import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://egxo-v1.vercel.app"),
  title: "EGXO v1",
  description: "Version 1 of my personal portfolio/website/whatever.",
  referrer: "origin-when-cross-origin",
  applicationName: "EGXO v1",
  creator: "https://egxo.dev.",
  keywords: [
    "eg, ethan_g, ethang, ethan-g, egarrisxn, egxworld, website, portfolio, projects, about, nextjs, next, next14, shadcn-ui, shadcn/ui, radixui, tailwindcss, javascript, react, fullstack, full-stack, webdeveloper, web-developer",
  ],

  openGraph: {
    title: "EGXO v1",
    description: "Version 1 of my personal portfolio/website/whatever.",
    url: "https://egxo-v1.vercel.app",
    siteName: "EGO v1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EGXO v1",
    description: "Version 1 of my personal portfolio/website/whatever.",
    creator: "@eg__xo",
    site: "@eg__xo",
  },
  icons: {
    icon: {
      url: "/icon.png",
      sizes: "192x192",
      type: "image/png",
    },
    apple: {
      url: "/apple-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: {
      rel: "icon",
      url: "/icon.svg",
      type: "image/svg+xml",
    },
  },
  verification: {},
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eaeaea" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f10" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="EGO v1" />
      </head>
      <body className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto] scroll-smooth bg-background font-neogrote text-foreground antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="bottom-center" richColors />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
