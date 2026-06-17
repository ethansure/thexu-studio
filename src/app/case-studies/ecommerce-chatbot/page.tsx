import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'E-commerce AI Chatbot Case Study | Xu Studio',
  description:
    'Case study: GPT-4 powered customer support chatbot for an e-commerce brand. 99% faster response times, 73% ticket deflection, and 63% lower support costs.',
  alternates: {
    canonical: 'https://thexustudio.com/case-studies/ecommerce-chatbot',
  },
  openGraph: {
    title: 'E-commerce AI Chatbot Case Study | Xu Studio',
    description:
      'GPT-4 customer support chatbot for e-commerce: response time cut from hours to seconds, 73% ticket deflection, 63% cost reduction.',
    url: 'https://thexustudio.com/case-studies/ecommerce-chatbot',
    type: 'article',
  },
};

export default function EcommerceChatbotCaseStudyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Xu Studio
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/ai-chatbot" className="text-slate-300 hover:text-white transition">
              AI Chatbot Development
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
          <p className="text-sm text-slate-400">AI Chatbot • E-commerce • Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            E-commerce Customer Support Automation with a GPT-4 AI Chatbot
          </h1>
          <p className="text-lg text-slate-300 mt-5">
            A growing online retailer was overwhelmed by 500+ daily inquiries. We built a custom AI
            chatbot that integrated with Shopify + CRM to deliver 24/7 support, reduce ticket volume,
            and cut support costs.
          </p>
        </div>

        <section className="grid md:grid-cols-3 gap-4 mt-10">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5">
            <div className="text-slate-400 text-sm">Response Time</div>
            <div className="text-2xl font-bold mt-1">4 hours → 30 seconds</div>
            <div className="text-green-400 text-sm mt-1">99% faster</div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5">
            <div className="text-slate-400 text-sm">AI Deflection</div>
            <div className="text-2xl font-bold mt-1">0% → 73%</div>
            <div className="text-green-400 text-sm mt-1">+73% tickets resolved by AI</div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5">
            <div className="text-slate-400 text-sm">Support Cost</div>
            <div className="text-2xl font-bold mt-1">$32K/mo → $12K/mo</div>
            <div className="text-green-400 text-sm mt-1">63% reduction</div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-10 mt-12">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-7">
            <h2 className="text-xl font-semibold">The Challenge</h2>
            <p className="text-slate-300 mt-3">
              The support team (8 agents) couldn&apos;t keep up with volume. Average first response time
              climbed to ~4 hours, CSAT dropped, and agents spent most of their day answering the same
              repeat questions: order status, returns, shipping, and product availability.
            </p>
          </section>
          <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-7">
            <h2 className="text-xl font-semibold">The Solution</h2>
            <p className="text-slate-300 mt-3">
              We built a production-ready AI customer support chatbot using GPT-4 with retrieval over
              the product catalog, shipping policy, and FAQ. The bot integrated with Shopify and the
              CRM to answer account-specific questions and hand off to a human when needed.
            </p>
            <p className="text-slate-300 mt-4">
              If you&apos;re exploring a similar build, see our{' '}
              <Link href="/ai-chatbot" className="text-blue-300 hover:text-blue-200 underline">
                AI chatbot development
              </Link>{' '}
              and{' '}
              <Link
                href="/chatgpt-integration"
                className="text-blue-300 hover:text-blue-200 underline"
              >
                ChatGPT integration services
              </Link>{' '}
              pages.
            </p>
          </section>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-7 mt-10">
          <h2 className="text-xl font-semibold">Implementation (8 weeks)</h2>
          <ol className="list-decimal ml-5 mt-4 space-y-2 text-slate-300">
            <li>Requirements + conversation flow design</li>
            <li>Knowledge preparation (catalog, policy, FAQ) + RAG evaluation</li>
            <li>Shopify + shipping API + CRM integration</li>
            <li>Human handoff + escalation rules</li>
            <li>Testing, safety guardrails, and on-call launch support</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-7 mt-10">
          <h2 className="text-xl font-semibold">Results</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>
              <strong className="text-white">99% faster first response:</strong> 4 hours → 30 seconds
            </li>
            <li>
              <strong className="text-white">73% ticket deflection:</strong> most repetitive
              inquiries resolved end-to-end by the bot
            </li>
            <li>
              <strong className="text-white">CSAT improvement:</strong> 3.2/5 → 4.6/5
            </li>
            <li>
              <strong className="text-white">63% lower support cost:</strong> $32K/mo → $12K/mo
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-7 mt-10">
          <h2 className="text-xl font-semibold">Related AI Chatbot Guides</h2>
          <p className="text-slate-300 mt-3">
            Planning a similar customer support automation project? These guides explain the cost,
            architecture, and rollout decisions behind a production AI chatbot for business.
          </p>
          <div className="grid md:grid-cols-3 gap-3 mt-5">
            <Link
              href="/insights/ai-chatbot-development-cost"
              className="rounded-xl border border-slate-800 p-4 text-slate-200 hover:border-blue-500/60 hover:bg-slate-900 transition"
            >
              AI Chatbot Development Cost
            </Link>
            <Link
              href="/insights/ai-chatbot-development"
              className="rounded-xl border border-slate-800 p-4 text-slate-200 hover:border-blue-500/60 hover:bg-slate-900 transition"
            >
              AI Chatbot Development Guide
            </Link>
            <Link
              href="/insights/ai-chatbot-for-business"
              className="rounded-xl border border-slate-800 p-4 text-slate-200 hover:border-blue-500/60 hover:bg-slate-900 transition"
            >
              AI Chatbot for Business
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-600/15 p-7 mt-10">
          <h2 className="text-2xl font-bold">Want to replicate these results?</h2>
          <p className="text-slate-300 mt-3">
            We&apos;ll recommend the fastest path to production (RAG vs fine-tuning), scope integrations,
            and estimate ROI.
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
