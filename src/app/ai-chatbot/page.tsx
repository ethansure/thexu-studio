'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  MessageSquare,
  Settings,
  Database,
  Headphones,
  Bot,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AIChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Xu Studio</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/ai-automation" className="text-slate-300 hover:text-white transition">AI Automation</Link>
            <Link href="/ai-agents" className="text-slate-300 hover:text-white transition">AI Agents</Link>
            <Link href="/chatgpt-integration" className="text-slate-300 hover:text-white transition">ChatGPT Integration</Link>
            <Link href="/case-studies" className="text-slate-300 hover:text-white transition">Case Studies</Link>
            <Link href="/#contact" className="text-slate-300 hover:text-white transition">Contact</Link>
          </div>
          <Link
            href="/#contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-full font-medium hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full mb-8">
              <Bot className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-slate-300">AI Chatbot Development Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build a High-ROI{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Chatbot
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
              We design and ship production-grade AI chatbots for customer support, lead qualification, and internal knowledge.
              Secure RAG knowledge bases, tool calling, analytics, and seamless human handoff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition"
              >
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-700 transition"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Chatbots that actually work in production—not demos. Designed around your data, systems, and safety requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Database,
                title: 'RAG Knowledge Base',
                desc: 'Answer from your docs, help center, tickets, and product data with citations and freshness controls.',
              },
              {
                icon: Settings,
                title: 'Tool / API Calling',
                desc: 'Let the chatbot take actions: create tickets, update CRM, check order status, schedule calls.',
              },
              {
                icon: Shield,
                title: 'Guardrails & Compliance',
                desc: 'PII controls, prompt injection defense, role-based access, and audit logging.',
              },
              {
                icon: Headphones,
                title: 'Human Handoff',
                desc: 'Escalate to a human with full context (Intercom/Zendesk/Slack) when confidence is low.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Common Chatbot Use Cases</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Focused, measurable deployments that improve customer experience and reduce operational load.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Customer Support',
                desc: 'Deflect repetitive tickets, summarize conversations, propose resolutions, and route to the right team.',
              },
              {
                title: 'Lead Qualification',
                desc: 'Qualify inbound leads, answer pricing FAQs, capture requirements, and book meetings automatically.',
              },
              {
                title: 'Internal Knowledge Assistant',
                desc: 'Help employees find policies, runbooks, and product info fast—grounded in your docs.',
              },
              {
                title: 'E-commerce & Order Support',
                desc: 'Order status, returns, product recommendations, and post-purchase support with integrated systems.',
              },
            ].map((useCase, i) => (
              <motion.div
                key={useCase.title}
                className="flex gap-4 p-6 bg-slate-800/30 border border-slate-700 rounded-xl"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">{useCase.title}</h3>
                  <p className="text-slate-400">{useCase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Deliver</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              A pragmatic build process optimized for accuracy, safety, latency, and cost.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: '1) Design & Scope',
                points: ['User journeys & intents', 'Success metrics', 'Data sources & permissions', 'Risk assessment'],
              },
              {
                icon: Zap,
                title: '2) Build & Integrate',
                points: ['RAG + evaluation', 'Tool calling workflows', 'Channel integration', 'Analytics + logging'],
              },
              {
                icon: Shield,
                title: '3) Launch & Improve',
                points: ['Guardrails + monitoring', 'Continuous quality tuning', 'Cost/latency optimization', 'New intents rollout'],
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <ul className="space-y-2">
                  {step.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h2>
            <p className="text-slate-400 text-lg">
              A few common questions about AI chatbot development.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'What is the difference between an AI chatbot and an AI agent?',
                a: 'A chatbot primarily focuses on conversation (answering questions and guiding users). An AI agent can also plan and execute multi-step actions using tools/APIs (e.g., creating tickets, updating CRM, pulling reports).',
              },
              {
                q: 'Can the chatbot use our internal documents safely?',
                a: 'Yes. We typically use a Retrieval-Augmented Generation (RAG) setup with permissioning, redaction where needed, and audit logs—so answers are grounded in approved sources.',
              },
              {
                q: 'How do you prevent hallucinations?',
                a: 'We combine strong retrieval, answer constraints (cite sources), evaluation tests, and guardrails that trigger fallback to a human when confidence is low.',
              },
              {
                q: 'How long does an AI chatbot project take?',
                a: 'Most MVP deployments take 2–6 weeks depending on data readiness, integrations, and the number of intents/workflows.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Insights */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Related Insights</h2>
            <p className="text-slate-400 text-lg">
              Practical notes on cost, implementation, and what &ldquo;production-ready&rdquo; actually means.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {
              [
                {
                  title: 'AI Chatbot Development Cost (2026): What to Budget',
                  desc: 'A realistic breakdown of cost drivers: data, integrations, evaluation, and ongoing ops.',
                  href: '/insights/ai-chatbot-development-cost',
                },
                {
                  title: 'AI Chatbot Development Services: What You Actually Get',
                  desc: 'A checklist of deliverables that matter (and what to avoid when vendors oversell).',
                  href: '/insights/ai-chatbot-development-services',
                },
                {
                  title: 'ChatGPT Integration Services: Common Patterns That Work',
                  desc: 'When to use RAG, function calling, safety guardrails, and human-in-the-loop approvals.',
                  href: '/insights/chatgpt-integration-services',
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block rounded-2xl border border-slate-700 bg-slate-800/30 p-6 hover:bg-slate-800/50 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-slate-200 transition" />
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Chatbot?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Tell us what you want to automate, what data you have, and where you want the chatbot to live.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition"
            >
              Start Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Xu Studio</span>
            </Link>
            <p className="text-slate-500">© {new Date().getFullYear()} Xu Studio LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
