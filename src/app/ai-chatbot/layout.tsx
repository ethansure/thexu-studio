import type { Metadata } from 'next';

const pageUrl = 'https://thexustudio.com/ai-chatbot';

export const metadata: Metadata = {
  title: 'AI Chatbot Development Services | Xu Studio',
  description:
    'AI chatbot development services for customer support, lead qualification, and internal knowledge assistants. We build secure RAG chatbots with tool calling, analytics, guardrails, and human handoff.',
  keywords: [
    'AI chatbot development',
    'AI chatbot development services',
    'custom AI chatbot',
    'AI chatbot for business',
    'enterprise AI chatbot',
    'RAG chatbot',
    'ChatGPT chatbot',
    'customer support chatbot',
    'lead qualification chatbot',
    'knowledge base chatbot',
    'AI agent chatbot',
    'human handoff chatbot',
    'chatbot analytics',
    'chatbot guardrails',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'AI Chatbot Development Services | Xu Studio',
    description:
      'Build a production-grade AI chatbot for support, lead capture, and internal knowledge with secure RAG, tool calling, analytics, guardrails, and human handoff.',
    url: pageUrl,
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'AI Chatbot Development Services',
      serviceType: 'AI chatbot development',
      provider: {
        '@type': 'Organization',
        name: 'Xu Studio',
        url: 'https://thexustudio.com',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      description:
        'Xu Studio designs and builds production-grade AI chatbots for customer support, lead qualification, internal knowledge search, and e-commerce workflows.',
      offers: {
        '@type': 'OfferCatalog',
        name: 'AI chatbot development capabilities',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'RAG knowledge base chatbot',
              description:
                'A chatbot that answers from approved documents, help centers, tickets, and product data with citations and freshness controls.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Tool-calling chatbot',
              description:
                'A chatbot that can create tickets, update CRM records, check order status, book meetings, and trigger approved workflows.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Chatbot guardrails and analytics',
              description:
                'Prompt injection defenses, PII controls, audit logs, evaluation tests, usage analytics, and human handoff flows.',
            },
          },
        ],
      },
      url: pageUrl,
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AI chatbot development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI chatbot development is the process of designing, building, integrating, and monitoring a conversational AI system that can answer questions, retrieve approved knowledge, take actions through APIs, and escalate to a human when needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does an AI chatbot development project take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most AI chatbot MVPs take 2 to 6 weeks depending on data readiness, channel requirements, integrations, guardrails, and the number of workflows the chatbot needs to support.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can an AI chatbot use internal company documents safely?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. A secure RAG architecture can ground answers in approved documents while applying permission checks, redaction, audit logs, evaluation tests, and human handoff for low-confidence or sensitive requests.',
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
          name: 'AI Chatbot Development Services',
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function AIChatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
