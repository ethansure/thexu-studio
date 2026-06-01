import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Services | Xu Studio',
  description:
    'We build AI workflow automation that connects your tools, processes documents, and executes actions safely—with least-privilege access, audit logs, and human-in-the-loop approvals. n8n / Zapier / Make, MCP integrations, RAG, and production-grade agent workflows.',
  keywords: [
    'AI automation',
    'workflow automation',
    'AI agents',
    'agentic workflows',
    'MCP integrations',
    'Model Context Protocol',
    'agent security',
    'AI governance',
    'least privilege',
    'audit logs',
    'human in the loop',
    'SOC 2',
    'n8n',
    'Zapier',
    'Make.com',
    'GoHighLevel',
    'HubSpot',
    'Salesforce',
    'Calendly',
    'RAG',
    'document processing',
    'PDF automation',
    'invoice processing automation',
    'CRM automation',
    'Slack automation',
    'lead routing automation',
    'email outreach automation',
  ],
  openGraph: {
    title: 'AI Automation Services | Xu Studio',
    description:
      'AI workflow automation that connects your tools, processes documents, and executes actions safely—with least-privilege access, audit logs, and human-in-the-loop approvals. n8n / Zapier / Make, MCP integrations, RAG, and production-grade agent workflows.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
