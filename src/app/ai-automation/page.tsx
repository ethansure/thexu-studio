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
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What should we automate first with AI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Start with repetitive workflows that have clear inputs, clear success metrics, and a human approval path. Good first projects include lead routing, support triage, document intake, CRM cleanup, and internal SOP assistants.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does an AI automation project take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A narrow AI automation MVP usually takes two to three weeks. Production rollout with integrations, permissions, audit logs, monitoring, and human-in-the-loop review usually takes four to eight weeks.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you keep AI automations safe?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Production AI automations need least-privilege tool access, input validation, audit logs, rollback paths, PII controls, prompt-injection defenses, and explicit human approval for sensitive actions.',
            },
          },
        ],
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
