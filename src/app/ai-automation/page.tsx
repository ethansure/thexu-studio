import type { Metadata } from 'next'
import AIAutomationClient from './AIAutomationClient'

export const metadata: Metadata = {
  title: 'AI Workflow Automation Services | Agents + Integrations + Guardrails | Xu Studio',
  description:
    'AI workflow automation services: tool/API orchestration, document workflows, lead routing, support triage, and back-office automations. Production-grade guardrails: least-privilege access, audit logs, MCP security, and human-in-the-loop approvals.',
  alternates: {
    canonical: 'https://thexustudio.com/ai-automation',
  },
}

export default function AIAutomationPage() {
  const pageUrl = 'https://thexustudio.com/ai-automation'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: 'AI Workflow Automation Services',
        description:
          'AI workflow automation services: tool/API orchestration, document workflows, lead routing, support triage, and back-office automations. Production-grade guardrails: least-privilege access, audit logs, MCP security, and human-in-the-loop approvals.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://thexustudio.com/#website',
          url: 'https://thexustudio.com/',
          name: 'Xu Studio',
        },
      },
      {
        '@type': 'Service',
        name: 'AI Workflow Automation Services',
        provider: {
          '@type': 'Organization',
          name: 'Xu Studio',
          url: 'https://thexustudio.com/',
        },
        areaServed: 'Worldwide',
        serviceType: 'AI workflow automation',
        url: pageUrl,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AIAutomationClient />
    </>
  )
}
