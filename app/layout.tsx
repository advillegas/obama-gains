import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://obamagains.com"),
  title: {
    default: "ObamaGains — Algorithmic Trading For The Rest Of Us",
    template: "%s · ObamaGains",
  },
  description:
    "Wall Street built robots to take your money. We built one to give it back. Hope-and-change algorithmic trading, starting at $5. Yes we can. Thanks Obama.",
  keywords: [
    "algorithmic trading",
    "trading bot",
    "low income investing",
    "micro investing",
    "ObamaGains",
    "Thanks Obama",
  ],
  openGraph: {
    title: "ObamaGains — Yes We Can Make Money",
    description:
      "Algorithmic trading for the working class. Start with $5. Thanks Obama.",
    type: "website",
    locale: "en_US",
    url: "https://obamagains.com",
    siteName: "ObamaGains",
  },
  twitter: {
    card: "summary_large_image",
    title: "ObamaGains — Yes We Can Make Money",
    description: "Algo trading for the rest of us. Start with $5. Thanks Obama.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster theme="dark" position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
