import type { Metadata } from 'next'

import AIAgentsClient from './AIAgentsClient'

export const metadata: Metadata = {
  title: 'AI Agent Development & Optimization | Custom AI Agents | Xu Studio',
  description:
    'Build production AI agents for your business—tool-using workflows with guardrails: least-privilege permissions, audit logs, approvals, and secure MCP integrations. Custom development and optimization. Free consultation.',
  alternates: {
    canonical: 'https://thexustudio.com/ai-agents',
  },
}

export default function AIAgentsPage() {
  const pageUrl = 'https://thexustudio.com/ai-agents'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: 'AI Agent Development & Optimization',
        description:
          'Build production AI agents for your business—tool-using workflows with guardrails: least-privilege permissions, audit logs, approvals, and secure MCP integrations. Custom development and optimization. Free consultation.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://thexustudio.com/#website',
          url: 'https://thexustudio.com/',
          name: 'Xu Studio',
        },
      },
      {
        '@type': 'Service',
        name: 'AI Agent Development & Optimization',
        provider: {
          '@type': 'Organization',
          name: 'Xu Studio',
          url: 'https://thexustudio.com/',
        },
        areaServed: 'Worldwide',
        serviceType: 'AI agent development',
        url: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://thexustudio.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'AI Agents',
            item: pageUrl,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AIAgentsClient />
    </>
  )
}

