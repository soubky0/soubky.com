import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { baseUrl } from "./sitemap";
import { Navbar } from "@/components/nav";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Omar Soubky | Software Engineer",
    template: "%s | Omar Soubky",
  },
  description: "Omar Soubky's website.",
  openGraph: {
    title: "Omar Soubky",
    description: "Omar Soubky's website.",
    url: baseUrl,
    siteName: "Omar Soubky",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-2LE5CS8E4H" />
    </html>
  );
}
