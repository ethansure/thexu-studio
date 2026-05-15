import type { Metadata } from 'next'
import ChatGPTIntegrationClient from './ChatGPTIntegrationClient'

export const metadata: Metadata = {
  title: 'ChatGPT Integration Services | RAG + Tool Calling + Secure Workflows | Xu Studio',
  description:
    'Production-grade ChatGPT integration services: secure API + app integration, RAG knowledge bases, tool/function calling, CRM/helpdesk workflows, evaluation, and monitoring.',
  alternates: {
    canonical: 'https://thexustudio.com/chatgpt-integration',
  },
}

export default function ChatGPTIntegrationPage() {
  const pageUrl = 'https://thexustudio.com/chatgpt-integration'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: 'ChatGPT Integration Services',
        description:
          'Production-grade ChatGPT integration services: secure API + app integration, RAG knowledge bases, tool/function calling, CRM/helpdesk workflows, evaluation, and monitoring.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://thexustudio.com/#website',
          url: 'https://thexustudio.com/',
          name: 'Xu Studio',
        },
      },
      {
        '@type': 'Service',
        name: 'ChatGPT Integration Services',
        provider: {
          '@type': 'Organization',
          name: 'Xu Studio',
          url: 'https://thexustudio.com/',
        },
        areaServed: 'Worldwide',
        serviceType: 'ChatGPT integration',
        url: pageUrl,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChatGPTIntegrationClient />
    </>
  )
}

