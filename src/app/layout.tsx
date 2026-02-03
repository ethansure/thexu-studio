import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TheXu Studio | AI Integration & Software Development",
  description: "Transform your business with AI. We specialize in AI integration, custom LLM solutions, and intelligent software development. Get a free consultation today.",
  keywords: ["AI integration", "LLM development", "AI consulting", "ChatGPT solutions", "AI software development", "machine learning", "artificial intelligence", "San Francisco"],
  authors: [{ name: "Ethan Pan" }],
  creator: "TheXu Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thexustudio.com",
    siteName: "TheXu Studio",
    title: "TheXu Studio | AI Integration & Software Development",
    description: "Transform your business with AI. Custom AI integration, LLM solutions, and intelligent software development.",
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
    title: "TheXu Studio | AI Integration & Software Development",
    description: "Transform your business with AI. Custom AI integration, LLM solutions, and intelligent software development.",
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
  verification: {
    google: "your-google-verification-code",
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
              name: "TheXu Studio",
              url: "https://thexustudio.com",
              logo: "https://thexustudio.com/logo.png",
              description: "AI Integration & Software Development Company",
              founder: {
                "@type": "Person",
                name: "Ethan Pan",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "ethan.jianxu@gmail.com",
                contactType: "customer service",
              },
              sameAs: [
                "https://github.com/ethansure",
                "https://linkedin.com/in/jianxupan",
              ],
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
                name: "TheXu Studio",
              },
              areaServed: "Worldwide",
              description: "Custom AI integration, LLM solutions, and intelligent software development services.",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
