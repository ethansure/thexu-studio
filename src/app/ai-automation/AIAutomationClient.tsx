'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Brain,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Workflow,
  FileText,
  Database,
  Plug,
  Bot,
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function AIAutomationClient() {
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
            <Link href="/ai-chatbot" className="text-slate-300 hover:text-white transition">
              AI Chatbots
            </Link>
            <Link href="/ai-agents" className="text-slate-300 hover:text-white transition">
              AI Agents
            </Link>
            <Link href="/chatgpt-integration" className="text-slate-300 hover:text-white transition">
              ChatGPT Integration
            </Link>
            <Link href="/case-studies" className="text-slate-300 hover:text-white transition">
              Case Studies
            </Link>
            <Link href="/#contact" className="text-slate-300 hover:text-white transition">
              Contact
            </Link>
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
          <motion.div className="text-center max-w-4xl mx-auto" initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full mb-8">
              <Workflow className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-slate-300">AI Workflow Automation Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Automate Work with{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Agents
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
              We build AI-powered automations that connect your tools, read documents, make decisions, and execute actions.
              Reduce manual ops, speed up response times, and create a repeatable system for growth — with production-grade
              safety, logs, and human-in-the-loop controls.
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

      {/* What we automate */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Automate</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Practical automations that ship fast, handle edge cases, and are measurable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: 'Document Workflows',
                desc: 'Extract, classify, summarize, and route PDFs, emails, tickets, and spreadsheets with approvals.',
              },
              {
                icon: Plug,
                title: 'Tool / API Orchestration',
                desc: 'Connect CRM, support, payments, Slack, and internal tools via APIs, n8n/Zapier/Make, and MCP connectors.',
              },
              {
                icon: Database,
                title: 'Data Cleanup & Enrichment',
                desc: 'Normalize records, deduplicate leads, enrich accounts, and keep your CRM trustworthy.',
              },
              {
                icon: Shield,
                title: 'Safety & Governance',
                desc: 'Least-privilege access, audit logs, PII controls, and hardened MCP/server auth so automations stay safe and reviewable.',
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">High-ROI Automation Use Cases</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              The fastest wins usually come from sales ops, support ops, and finance ops.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Inbound Lead Routing',
                desc: 'Qualify inbound leads, enrich accounts, assign owners, and book meetings automatically.',
              },
              {
                title: 'PDF Intake & Form Filling',
                desc: 'Extract fields from PDFs, validate data, fill forms, and push results to your systems with an audit trail.',
              },
              {
                title: 'Support Triage',
                desc: 'Categorize tickets, propose replies, pull context from docs, and escalate with a summary.',
              },
              {
                title: 'Back Office Ops',
                desc: 'Invoice matching, reconciliation, vendor intake, and exception handling with approvals.',
              },
              {
                title: 'Internal Enablement',
                desc: 'Turn SOPs into agent workflows: onboarding, checklists, and self-serve answers in Slack—with approvals and audit trails.',
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

      {/* Stacks */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Popular Automation Stacks</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              We implement workflows using the right mix of LLMs + orchestration + integrations, then ship monitoring and
              handoff docs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Workflow,
                title: 'n8n / Zapier / Make',
                desc: 'Fast time-to-value for cross-tool workflows, triggers, approvals, and retries.',
              },
              {
                icon: Bot,
                title: 'Agent Runtimes',
                desc: 'Tool calling, planners, and human-in-the-loop steps that stay reliable in production.',
              },
              {
                icon: Plug,
                title: 'MCP Integrations',
                desc: 'Secure connectors and credential handling so agents can take real actions across your stack.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-purple-300" />
                  </div>
                  <h3 className="font-bold">{item.title}</h3>
                </div>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Ship Automation</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              We start with a narrow workflow, measure outcomes, then expand safely.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: '1) Map & Prioritize',
                desc: 'Identify bottlenecks, define success metrics, and pick the highest-leverage workflow first.',
              },
              {
                icon: Bot,
                title: '2) Build & Integrate',
                desc: 'Implement agent logic, tool calls, and guardrails. Integrate with your systems and data.',
              },
              {
                icon: Shield,
                title: '3) Monitor & Improve',
                desc: 'Add logging, evals, and rollback plans. Iterate based on real outcomes and feedback.',
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Related Services</h3>
              <p className="text-slate-400">Explore chatbots and integrations to complete the loop.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/ai-chatbot"
                className="bg-slate-900 border border-slate-700 px-5 py-3 rounded-xl hover:bg-slate-800 transition"
              >
                AI Chatbots
              </Link>
              <Link
                href="/chatgpt-integration"
                className="bg-slate-900 border border-slate-700 px-5 py-3 rounded-xl hover:bg-slate-800 transition"
              >
                ChatGPT Integration
              </Link>
              <Link
                href="/ai-agents"
                className="bg-slate-900 border border-slate-700 px-5 py-3 rounded-xl hover:bg-slate-800 transition"
              >
                AI Agents
              </Link>
            </div>
          </div>

          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Related Insights</h3>
            <p className="text-slate-400 mb-5">Practical guides on building production AI workflows.</p>
            <div className="flex flex-col gap-3">
              <Link href="/case-studies/lead-qualification-ai-agent" className="text-slate-200 hover:text-white transition">
                Case study: Lead qualification + meeting booking AI agent
              </Link>
              <Link href="/insights/ai-agent-development-company" className="text-slate-200 hover:text-white transition">
                How to choose an AI agent development company (2026 checklist)
              </Link>
              <Link href="/insights/ai-chatbot-for-business" className="text-slate-200 hover:text-white transition">
                AI chatbot for business: use cases, ROI, and build plan
              </Link>
              <Link href="/insights/chatgpt-integration-services" className="text-slate-200 hover:text-white transition">
                ChatGPT integration services implementation checklist (2026)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-slate-500">© {new Date().getFullYear()} Xu Studio LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
