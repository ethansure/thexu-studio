import Link from 'next/link'

const posts = [
  {
    title: 'AI Automation Services: What to Automate + ROI Playbook (2026)',
    description:
      'A practical guide to AI automation services: what to automate first, architecture patterns (RAG + tools + agents), timelines, pricing, and an ROI-focused delivery checklist.',
    href: '/insights/ai-automation-services',
    date: '2026-06-01',
  },
  {
    title: 'AI Chatbot Development: A Practical Guide (2026)',
    description:
      'A practical guide to AI chatbot development: architecture options (RAG + tools), implementation steps, costs, and a checklist for shipping a production chatbot.',
    href: '/insights/ai-chatbot-development',
    date: '2026-05-16',
  },
  {
    title: 'AI Chatbot Development Services: Roadmap, Cost, and Examples (2026)',
    description:
      'A practical guide to AI chatbot development services: architecture options (RAG, tools), project phases, realistic pricing, and a scope checklist.',
    href: '/insights/ai-chatbot-development-services',
    date: '2026-05-14',
  },
  {
    title: 'ChatGPT Integration Services: What to Build + Implementation Checklist (2026)',
    description:
      'A practical guide to ChatGPT integration services: architecture, RAG, tool/function calling, security, evaluation, and a go-live checklist.',
    href: '/insights/chatgpt-integration-services',
    date: '2026-05-12',
  },
  {
    title: 'Custom AI Solutions: What to Build, Cost, and Examples (2026 Guide)',
    description:
      'A practical guide to choosing the right custom AI solution: where AI actually delivers ROI, typical costs, timelines, and real implementation patterns.',
    href: '/insights/custom-ai-solutions',
    date: '2026-05-11',
  },
  {
    title: 'AI Agent Development Company: How to Choose (2026 Checklist)',
    description:
      'A practical checklist for choosing an AI agent development company: evaluation, integrations, security, and realistic delivery timelines.',
    href: '/insights/ai-agent-development-company',
    date: '2026-05-10',
  },
  {
    title: 'AI Chatbot Development Cost & Timeline (2026 Guide)',
    description:
      'A practical breakdown of what drives cost, typical timelines, and how to scope an AI chatbot that actually ships to production.',
    href: '/insights/ai-chatbot-development-cost',
    date: '2026-05-09',
  },
]

export const metadata = {
  title: 'Insights | Xu Studio',
  description:
    'Practical AI product insights, implementation notes, and case studies from Xu Studio.',
  alternates: {
    canonical: 'https://thexustudio.com/insights',
  },
}

export default function InsightsIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            Xu Studio
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/ai-chatbot" className="text-slate-300 hover:text-white transition">
              AI Chatbot
            </Link>
            <Link href="/ai-automation" className="text-slate-300 hover:text-white transition">
              AI Automation
            </Link>
            <Link href="/ai-agents" className="text-slate-300 hover:text-white transition">
              AI Agents
            </Link>
            <Link href="/chatgpt-integration" className="text-slate-300 hover:text-white transition">
              ChatGPT Integration
            </Link>
            <Link href="/#contact" className="text-slate-300 hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">Insights</h1>
          <p className="mt-4 text-slate-400 text-lg">
            Short, practical guides on building production-grade AI chatbots, AI agents, and AI automation.
          </p>
        </header>

        <section className="mt-12 grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:bg-slate-900/60 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold group-hover:text-white">{post.title}</h2>
                <span className="text-xs text-slate-500">{post.date}</span>
              </div>
              <p className="mt-2 text-slate-400">{post.description}</p>
              <div className="mt-4 text-sm text-slate-300 group-hover:text-white">Read →</div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
