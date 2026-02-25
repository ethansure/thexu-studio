import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Case Studies | Real Business Results | Xu Studio",
  description: "See real AI implementation results: 70% cost reduction, 99% faster processing, 300% productivity gains. Case studies from e-commerce, legal, healthcare, SaaS industries.",
  keywords: [
    "AI case studies",
    "AI implementation examples",
    "AI chatbot ROI",
    "AI automation results",
    "business AI success stories",
    "AI transformation examples",
    "ChatGPT business case study",
    "AI customer service ROI"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thexustudio.com/case-studies",
    siteName: "Xu Studio",
    title: "AI Case Studies | Real Business Results | Xu Studio",
    description: "See real AI implementation results: 70% cost reduction, 99% faster processing. Case studies from e-commerce, legal, healthcare.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xu Studio - AI Case Studies",
      },
    ],
  },
  alternates: {
    canonical: 'https://thexustudio.com/case-studies',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
