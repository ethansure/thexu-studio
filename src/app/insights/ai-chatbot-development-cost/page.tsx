import type React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'AI Chatbot Development Cost & Timeline (2026 Guide) | Xu Studio',
  description:
    'A practical breakdown of AI chatbot development cost, timeline, and scoping. Learn what drives pricing, typical phases, and how to ship a production-grade chatbot.',
  alternates: {
    canonical: 'https://thexustudio.com/insights/ai-chatbot-development-cost',
  },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <div className="mt-4 text-slate-300 leading-relaxed">{children}</div>
    </section>
  )
}

export default function PostPage() {
  const postUrl = 'https://thexustudio.com/insights/ai-chatbot-development-cost'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: 'AI Chatbot Development Cost & Timeline (2026 Guide)',
        description:
          'A practical breakdown of AI chatbot development cost, timeline, and scoping. Learn what drives pricing, typical phases, and how to ship a production-grade chatbot.',
        datePublished: '2026-05-09',
        dateModified: '2026-06-29',
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': postUrl,
        },
        author: {
          '@type': 'Organization',
          name: 'Xu Studio',
          url: 'https://thexustudio.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Xu Studio',
          url: 'https://thexustudio.com',
        },
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
            name: 'Insights',
            item: 'https://thexustudio.com/insights',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'AI Chatbot Development Cost & Timeline (2026 Guide)',
            item: postUrl,
          },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            Xu Studio
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/insights" className="text-slate-300 hover:text-white transition">
              Insights
            </Link>
            <Link href="/#contact" className="text-slate-300 hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="max-w-3xl mx-auto px-6 py-14">
        <header>
          <p className="text-sm text-slate-500">Insights • 2026-05-09</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            AI Chatbot Development Cost & Timeline (2026 Guide)
          </h1>
          <p className="mt-5 text-lg text-slate-400">
            If you&apos;re evaluating an AI chatbot for customer support, lead qualification, or internal knowledge, the
            biggest cost driver isn&apos;t the model—it&apos;s product scope: data integration, reliability, and safety.
            Here&apos;s a practical way to estimate budget and timeline.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <div className="text-sm text-slate-400">Quick links</div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <Link className="rounded-full border border-slate-700 px-4 py-2 hover:bg-slate-800 transition" href="/ai-chatbot">
                AI Chatbot Development
              </Link>
              <Link className="rounded-full border border-slate-700 px-4 py-2 hover:bg-slate-800 transition" href="/chatgpt-integration">
                ChatGPT Integration
              </Link>
              <Link className="rounded-full border border-slate-700 px-4 py-2 hover:bg-slate-800 transition" href="/ai-automation">
                AI Automation
              </Link>
              <Link className="rounded-full border border-slate-700 px-4 py-2 hover:bg-slate-800 transition" href="/#contact">
                Get an estimate
              </Link>
            </div>
          </div>
        </header>

        <Section title="Typical price ranges (realistic, production)">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>MVP chatbot (2–4 weeks):</strong> One use case, one channel, minimal integrations, basic RAG +
              logging.
            </li>
            <li>
              <strong>Production chatbot (4–8+ weeks):</strong> Multiple intents, robust evaluation, citations,
              guardrails, analytics, and at least one business-system integration (CRM/tickets).
            </li>
            <li>
              <strong>Enterprise rollout (8–16+ weeks):</strong> Multi-team workflows, permissions/SSO, compliance,
              human-in-the-loop, incident response, and ongoing tuning.
            </li>
          </ul>
          <p className="mt-4">
            If you want a concrete number, we typically scope a build by the number of <em>data sources</em>, <em>actions</em>{' '}
            (API tool calls), and <em>risk level</em> (PII/compliance). Those three factors predict the engineering effort.
          </p>
        </Section>

        <Section title="What drives cost (and what doesn’t)">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Data quality & retrieval:</strong> clean docs + stable chunking/metadata + freshness strategy.
            </li>
            <li>
              <strong>Integrations:</strong> Zendesk/Intercom/HubSpot/Salesforce/Shopify, plus auth + rate limits.
            </li>
            <li>
              <strong>Reliability:</strong> evaluation harness, regression tests, fallbacks, and monitoring.
            </li>
            <li>
              <strong>Safety:</strong> prompt-injection defense, PII handling, role-based access, audit logs.
            </li>
            <li>
              <strong>UX details:</strong> human handoff, conversation memory, source citations, feedback loops.
            </li>
          </ul>
          <p className="mt-4 text-slate-400">
            Model costs are usually a smaller portion than people expect (especially compared to the time spent on
            product/engineering to make the bot safe and useful).
          </p>
          <p className="mt-4">
            To connect the estimate to business impact, use the{' '}
            <Link className="underline hover:text-white" href="/insights/ai-chatbot-roi">
              AI chatbot ROI guide
            </Link>{' '}
            to compare build cost against support deflection, qualified leads, booked meetings, and cost per resolved
            conversation.
          </p>
        </Section>

        <Section title="A simple timeline that actually works">
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Week 1:</strong> goals + success metrics + data audit + baseline evaluation.
            </li>
            <li>
              <strong>Weeks 2–3:</strong> RAG + tool calling (if needed) + guardrails + logging.
            </li>
            <li>
              <strong>Weeks 3–4:</strong> hardening: prompt-injection tests, edge cases, and monitoring.
            </li>
            <li>
              <strong>Week 4+:</strong> rollout: A/B compare vs current workflow, iterate on failure modes.
            </li>
          </ol>
        </Section>

        <Section title="FAQ">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Should we fine-tune a model?</h3>
              <p className="mt-2 text-slate-300">
                Usually not at first. Most business chatbots get better ROI from better retrieval, tool access, and
                guardrails. Fine-tuning can help later for strict style/format consistency or domain language.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Can this replace support agents?</h3>
              <p className="mt-2 text-slate-300">
                The best outcome is partial automation: deflect repetitive questions, draft answers, and route complex
                issues. Human handoff is a feature, not a failure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">What do you need from us to scope it?</h3>
              <p className="mt-2 text-slate-300">
                A list of your top 25–50 customer questions, access to docs/knowledge sources, and where you want the
                bot to take actions (tickets/CRM/orders). From that, we can estimate scope quickly.
              </p>
            </div>
          </div>
        </Section>

        <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
          <h2 className="text-2xl font-bold">Want a scoped estimate this week?</h2>
          <p className="mt-2 text-slate-400">
            Tell us your use case + data sources and we&apos;ll propose an MVP scope, timeline, and a realistic path to
            production.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold hover:opacity-90 transition"
            >
              Contact Xu Studio
            </Link>
            <Link
              href="/ai-chatbot"
              className="rounded-full border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-800 transition"
            >
              AI Chatbot service page
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
