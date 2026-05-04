import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Services | Xu Studio',
  description:
    'We build AI workflow automation that connects your tools, processes documents, and executes actions safely. n8n / Zapier / Make, MCP integrations, RAG, and production-grade agent workflows.',
  keywords: [
    'AI automation',
    'workflow automation',
    'AI agents',
    'agentic workflows',
    'MCP integrations',
    'Model Context Protocol',
    'n8n',
    'Zapier',
    'Make.com',
    'RAG',
    'document processing',
    'PDF automation',
    'CRM automation',
    'Slack automation',
  ],
  openGraph: {
    title: 'AI Automation Services | Xu Studio',
    description:
      'AI workflow automation that connects your tools, processes documents, and executes actions safely. n8n / Zapier / Make, MCP integrations, RAG, and production-grade agent workflows.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

