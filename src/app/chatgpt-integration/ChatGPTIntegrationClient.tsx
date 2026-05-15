'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Brain, CheckCircle, Gauge, Lock, MessageSquare, Settings, Shield, Zap } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ChatGPTIntegrationClient() {
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
            <Link href="/#services" className="text-slate-300 hover:text-white transition">
              Services
            </Link>
            <Link href="/ai-automation" className="text-slate-300 hover:text-white transition">
              AI Automation
            </Link>
            <Link href="/ai-chatbot" className="text-slate-300 hover:text-white transition">
              AI Chatbots
            </Link>
            <Link href="/ai-agents" className="text-slate-300 hover:text-white transition">
              AI Agents
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
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-slate-300">ChatGPT Integration Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Integrate{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ChatGPT
              </span>{' '}
              Into Your Product
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
              We design and ship production-grade ChatGPT integrations: secure APIs, RAG knowledge bases, tool/function
              calling, CRM/helpdesk workflows, and analytics—built for reliability and ROI.
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

      {/* What you get */}
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
              A complete integration—designed for your data, your users, and your security requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Settings,
                title: 'API & App Integration',
                desc: 'Embed ChatGPT into your web/app product with clean UX and robust backend orchestration.',
              },
              {
                icon: Zap,
                title: 'Workflow Automation',
                desc: 'Automate support, sales ops, and internal processes with tool calling and guardrails.',
              },
              {
                icon: Shield,
                title: 'RAG Knowledge Base',
                desc: 'Accurate answers grounded in your docs, tickets, and databases—reducing hallucinations.',
              },
              {
                icon: Gauge,
                title: 'Observability & QA',
                desc: 'Logging, evaluation, prompt/version control, and cost/latency dashboards.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Integration Process</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Fast, pragmatic delivery—without cutting corners on security and reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Discovery & ROI',
                bullets: ['Use cases + success metrics', 'Data & system inventory', 'Architecture proposal'],
              },
              {
                title: 'Prototype',
                bullets: ['UX flows', 'Prompts + tools', 'Initial RAG + evaluation'],
              },
              {
                title: 'Production Build',
                bullets: ['Security + rate limits', 'Monitoring + logging', 'Load/perf testing'],
              },
              {
                title: 'Launch',
                bullets: ['Deploy + rollback plan', 'Team handoff', 'Training + docs'],
              },
              {
                title: 'Iteration',
                bullets: ['Quality improvements', 'Cost optimization', 'New workflows + features'],
              },
              {
                title: 'Compliance (Optional)',
                bullets: ['PII handling', 'SOC2 readiness', 'Audit trails'],
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
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <ul className="space-y-2">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Security First</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Production LLM systems fail in predictable ways. We bake in guardrails from day one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: 'Data Protection',
                desc: 'PII redaction, encryption, access controls, and clear data retention policies.',
              },
              {
                icon: Shield,
                title: 'Guardrails',
                desc: 'Input validation, output filtering, policy checks, and safe tool execution.',
              },
              {
                icon: Gauge,
                title: 'Reliability',
                desc: 'Retries, fallbacks, timeouts, and eval-driven iteration to maintain quality.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                  <card.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-slate-400">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center flex flex-col items-center gap-4">
            <Link
              href="/insights/chatgpt-integration-services"
              className="text-slate-300 hover:text-white transition text-sm"
            >
              Read: ChatGPT Integration Services Implementation Checklist (2026)
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition"
            >
              Talk to an Expert
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

