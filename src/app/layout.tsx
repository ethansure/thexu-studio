import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI Chatbot & Agent Development | Custom AI Solutions | Xu Studio",
  description: "Build AI chatbots, agents, and automation solutions for your business. Custom GPT-4 & Claude integration, 24/7 AI customer service, workflow automation. Free consultation.",
  keywords: ["AI chatbot development", "AI agent development", "custom AI chatbot", "AI automation services", "ChatGPT integration", "Claude AI integration", "AI customer service", "business AI solutions", "AI workflow automation", "LLM development", "AI consulting", "build AI agent", "AI chatbot for business", "enterprise AI", "AI integration services", "custom AI solutions"],
  authors: [{ name: "Xu Studio LLC" }],
  creator: "Xu Studio LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thexustudio.com",
    siteName: "Xu Studio",
    title: "AI Chatbot & Agent Development | Custom AI Solutions | Xu Studio",
    description: "Build AI chatbots, agents, and automation for your business. Custom GPT-4 & Claude integration. Free consultation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TheXu Studio - AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot & Agent Development | Xu Studio",
    description: "Build AI chatbots, agents, and automation for your business. Custom GPT-4 & Claude integration. Free consultation.",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: 'https://thexustudio.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Xu Studio LLC",
              url: "https://thexustudio.com",
              logo: "https://thexustudio.com/logo.png",
              description: "AI Integration & Software Development Company",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@thexustudio.com",
                contactType: "customer service",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "AI Integration & Development",
              provider: {
                "@type": "Organization",
                name: "Xu Studio LLC",
              },
              areaServed: "Worldwide",
              description: "Custom AI integration, LLM solutions, and intelligent software development services.",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
