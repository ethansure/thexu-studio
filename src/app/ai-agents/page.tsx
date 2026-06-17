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
        description:
          'Custom AI agent development for tool-using workflows, multi-agent orchestration, evaluation, security, integrations, and production rollout.',
        provider: {
          '@type': 'Organization',
          name: 'Xu Studio',
          url: 'https://thexustudio.com/',
        },
        areaServed: 'Worldwide',
        serviceType: 'AI agent development',
        url: pageUrl,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'AI agent development services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom AI agent development',
                description: 'Design and build AI agents that use tools, APIs, retrieval, approvals, and business systems.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI agent evaluation and guardrails',
                description: 'Add test sets, audit logs, approval flows, least-privilege tools, and regression checks.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Multi-agent workflow automation',
                description: 'Coordinate multiple agents for lead routing, reporting, support, operations, and internal workflows.',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What does an AI agent development company build?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An AI agent development company builds systems that can reason through a task, call tools or APIs, retrieve business data, ask for human approval when needed, and complete workflows with logs and evaluation.',
            },
          },
          {
            '@type': 'Question',
            name: 'How is an AI agent different from an AI chatbot?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An AI chatbot mainly answers questions or guides a conversation. An AI agent can also take controlled actions across tools, such as updating CRM records, creating tickets, qualifying leads, scheduling meetings, or generating reports.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should a production AI agent include?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A production AI agent should include tool permissions, audit logs, evaluation tests, monitoring, human approval for risky actions, prompt-injection defenses, and clear success metrics.',
            },
          },
        ],
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
