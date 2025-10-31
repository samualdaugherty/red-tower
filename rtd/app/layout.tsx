import type { Metadata } from "next";
import { Anton, Allison, Montserrat } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { ScrollRestoration } from "@/components/ui/scroll-restoration";
import "../styles/globals.css";

// Load Google Fonts
const anton = Anton({
  variable: "--rtd-font-header",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const allison = Allison({
  variable: "--rtd-font-subhead",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--rtd-font-body",
  weight: ["300", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Tower Digital",
  description: "Building your own website is a mountain of work. But it doesn't have to be that way. Let Red Tower take on the task for you, streamline your web presence, so you can focus on what really matters — your customers.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Red Tower Digital",
    description: "Building your own website is a mountain of work. But it doesn't have to be that way. Let Red Tower take on the task for you, streamline your web presence, so you can focus on what really matters — your customers.",
    url: "https://redtowerdigital.com",
    siteName: "Red Tower Digital",
    images: [
      {
        url: "/images/social-share.png",
        width: 1200,
        height: 630,
        alt: "Red Tower Digital",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Tower Digital",
    description: "Building your own website is a mountain of work. But it doesn't have to be that way. Let Red Tower take on the task for you, streamline your web presence, so you can focus on what really matters — your customers.",
    images: ["/images/social-share.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${allison.variable} ${montserrat.variable}`}>
      <body>
        <ScrollRestoration />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
