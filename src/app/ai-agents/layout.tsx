import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Development & Optimization | Custom AI Agents | Xu Studio",
  description: "Build intelligent AI agents for your business. Custom AI agent development, agent optimization, multi-agent systems, and autonomous workflow automation. Free consultation.",
  keywords: [
    "AI agent development",
    "custom AI agents",
    "AI agent optimization",
    "build AI agent",
    "autonomous AI agents",
    "AI assistant development",
    "multi-agent systems",
    "AI agent consulting",
    "LLM agents",
    "GPT agents",
    "Claude agents",
    "AI workflow automation",
    "conversational AI agents",
    "enterprise AI agents",
    "AI agent integration",
    "intelligent automation"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thexustudio.com/ai-agents",
    siteName: "Xu Studio",
    title: "AI Agent Development & Optimization | Xu Studio",
    description: "Build intelligent AI agents for your business. Custom development, optimization, and multi-agent systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xu Studio - AI Agent Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Development & Optimization | Xu Studio",
    description: "Build intelligent AI agents for your business. Custom development, optimization, and multi-agent systems.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: 'https://thexustudio.com/ai-agents',
  },
};

export default function AIAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
