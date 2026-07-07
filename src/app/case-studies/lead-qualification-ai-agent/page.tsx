import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lead Qualification AI Agent Case Study | Xu Studio',
  description:
    'Case study: AI lead qualification agent that scores inbound leads, enriches data, routes to the right rep, and books meetings automatically. 4x faster response, +31% SQL rate, and 18 hours/week saved.',
  alternates: {
    canonical: 'https://thexustudio.com/case-studies/lead-qualification-ai-agent',
  },
  openGraph: {
    title: 'Lead Qualification AI Agent Case Study | Xu Studio',
    description:
      'AI lead qualification agent: 4x faster response, +31% SQL rate, and 18 hours/week saved via CRM + Slack + calendar automation.',
    url: 'https://thexustudio.com/case-studies/lead-qualification-ai-agent',
    type: 'article',
  },
};

export default function LeadQualificationAIAgentCaseStudyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Xu Studio
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/ai-agents" className="text-slate-300 hover:text-white transition">
              AI Agent Development
            </Link>
            <Link href="/ai-automation" className="text-slate-300 hover:text-white transition">
              AI Automation
            </Link>
            <Link href="/case-studies" className="text-slate-300 hover:text-white transition">
              Case Studies
            </Link>
            <Link href="/#contact" className="text-slate-300 hover:text-white transition">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <article className="max-w-5xl mx-auto px-6 py-14">
        <div className="max-w-3xl">
          <p className="text-sm text-slate-400">AI Agents • Sales Ops • Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Lead Qualification Automation with a Custom AI Agent
          </h1>
          <p className="text-lg text-slate-300 mt-5">
            A B2B services company was losing inbound leads due to slow follow-up and inconsistent
            qualification. We built an AI lead qualification agent that scores, enriches, routes, and
            books meetings automatically—while keeping humans in the loop for edge cases.
          </p>
        </div>

        <section className="grid md:grid-cols-3 gap-4 mt-10">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5">
            <div className="text-slate-400 text-sm">Speed to Lead</div>
            <div className="text-2xl font-bold mt-1">2 hours → 30 minutes</div>
            <div className="text-green-400 text-sm mt-1">4x faster</div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5">
            <div className="text-slate-400 text-sm">SQL Conversion</div>
            <div className="text-2xl font-bold mt-1">18% → 23.6%</div>
            <div className="text-green-400 text-sm mt-1">+31%</div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5">
            <div className="text-slate-400 text-sm">Ops Time Saved</div>
            <div className="text-2xl font-bold mt-1">0 → 18 hrs/week</div>
            <div className="text-green-400 text-sm mt-1">Freed for selling</div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-10 mt-12">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-7">
            <h2 className="text-xl font-semibold">The Challenge</h2>
            <p className="text-slate-300 mt-3">
              Leads arrived from the website, inbound email, and LinkedIn. Reps responded manually
              when they had time, and qualification criteria varied by person. As a result, response
              times were inconsistent, good leads went cold, and the CRM was often missing key fields
              needed for reporting.
            </p>
          </section>
          <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-7">
            <h2 className="text-xl font-semibold">The Solution</h2>
            <p className="text-slate-300 mt-3">
              We built a custom AI agent that triages inbound leads, enriches firmographic data,
              scores fit based on ICP rules, and routes the lead to the right owner. For high-intent
              leads, the agent offers meeting times and books directly on the calendar.
            </p>
            <p className="text-slate-300 mt-4">
              If you&apos;re exploring a similar build, see our{' '}
              <Link href="/ai-agents" className="text-blue-300 hover:text-blue-200 underline">
                AI agent development
              </Link>{' '}
              and{' '}
              <Link href="/ai-automation" className="text-blue-300 hover:text-blue-200 underline">
                AI automation services
              </Link>{' '}
              pages.
            </p>
          </section>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-7 mt-10">
          <h2 className="text-xl font-semibold">Implementation (6 weeks)</h2>
          <ol className="list-decimal ml-5 mt-4 space-y-2 text-slate-300">
            <li>ICP definition + scoring rubric (industry, size, intent, budget, urgency)</li>
            <li>Integrations: CRM (HubSpot/Salesforce), Slack, email, calendar, and web forms</li>
            <li>Enrichment + validation (company domain, role, employee count, tech stack signals)</li>
            <li>Human-in-the-loop review for low-confidence or high-value edge cases</li>
            <li>Analytics: speed-to-lead, routing accuracy, SQL rate, and meeting show rate</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-7 mt-10">
          <h2 className="text-xl font-semibold">Results</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>
              <strong className="text-white">4x faster speed-to-lead:</strong> 2 hours → 30 minutes
            </li>
            <li>
              <strong className="text-white">+31% SQL conversion:</strong> better consistency and
              stronger routing
            </li>
            <li>
              <strong className="text-white">18 hours/week saved:</strong> less manual triage + data
              entry
            </li>
            <li>
              <strong className="text-white">Cleaner CRM:</strong> higher completion rate for required
              fields, better reporting
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-7 mt-10">
          <h2 className="text-xl font-semibold">Related AI Agent Guides</h2>
          <p className="text-slate-300 mt-3">
            Use these implementation guides to compare AI agent development, AI automation services,
            and custom AI solutions before building a sales operations workflow.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 mt-5">
            <Link
              href="/insights/ai-lead-generation-chatbot"
              className="rounded-xl border border-slate-800 p-4 text-slate-200 hover:border-blue-500/60 hover:bg-slate-900 transition"
            >
              AI Lead Generation Chatbot
            </Link>
            <Link
              href="/insights/ai-agent-development-company"
              className="rounded-xl border border-slate-800 p-4 text-slate-200 hover:border-blue-500/60 hover:bg-slate-900 transition"
            >
              AI Agent Development Company
            </Link>
            <Link
              href="/insights/ai-agent-development-cost"
              className="rounded-xl border border-slate-800 p-4 text-slate-200 hover:border-blue-500/60 hover:bg-slate-900 transition"
            >
              AI Agent Development Cost
            </Link>
            <Link
              href="/insights/ai-automation-services"
              className="rounded-xl border border-slate-800 p-4 text-slate-200 hover:border-blue-500/60 hover:bg-slate-900 transition"
            >
              AI Automation Services
            </Link>
            <Link
              href="/insights/custom-ai-solutions"
              className="rounded-xl border border-slate-800 p-4 text-slate-200 hover:border-blue-500/60 hover:bg-slate-900 transition"
            >
              Custom AI Solutions
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-600/15 p-7 mt-10">
          <h2 className="text-2xl font-bold">Want an AI agent that drives revenue?</h2>
          <p className="text-slate-300 mt-3">
            We&apos;ll map your lead flow, identify the fastest automation wins, and estimate ROI.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-slate-100 transition"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-900 transition"
            >
              Browse More Case Studies
            </Link>
          </div>
        </section>
      </article>

      <footer className="border-t border-slate-800 py-10">
        <div className="max-w-5xl mx-auto px-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Xu Studio LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
