import type { Metadata } from "next";
import { Anton, Allison, Montserrat } from "next/font/google";
import { Footer } from "@/components/layout/footer";
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
  description: "Strategic design and development for modern brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${allison.variable} ${montserrat.variable}`}>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
