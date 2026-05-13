import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { CookieBanner } from "@/components/ui/CookieBanner";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onyxautomationhub.com"),
  icons: {
    icon: "/onyx.svg",
    shortcut: "/onyx.svg",
    apple: "/onyx.svg",
  },
  title: "Onyx Automation Agency | Your Business. Running Itself.",
  description: "We build the AI systems that handle your inbox, bookings, and admin.",
  openGraph: {
    title: "Onyx Automation Agency",
    description: "AI systems for service businesses that want to scale without the overhead.",
    url: "https://www.onyxautomationhub.com",
    siteName: "Onyx Automation",
    images: [
      {
        url: "/og-image.jpg", // Add a nice og-image placeholder for now
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onyx Automation Agency",
    description: "Scale your business without scaling headcount. We build done-for-you AI workflows.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} font-inter antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
