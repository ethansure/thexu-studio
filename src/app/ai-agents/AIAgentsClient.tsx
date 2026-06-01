'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle,
  Cpu,
  MessageSquare,
  Network,
  Settings,
  Shield,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AIAgentsClient() {
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
            <Link href="/#about" className="text-slate-300 hover:text-white transition">
              About
            </Link>
            <Link href="/insights" className="text-slate-300 hover:text-white transition">
              Insights
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

      {/* Hero Section */}
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
              <span className="text-sm text-slate-300">AI Agent Development & Optimization</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Intelligent{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Agents
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Custom AI agents that automate tasks, enhance productivity, and transform your business operations.
              From personal assistants to enterprise-grade autonomous systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition"
              >
                Build Your AI Agent
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Are AI Agents */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Are AI Agents?</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              AI agents are autonomous systems powered by large language models (LLMs) that can reason, plan,
              and execute complex tasks. Unlike simple chatbots, AI agents can use tools, access APIs, browse
              the web, and make decisions to accomplish goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MessageSquare,
                title: 'Conversational AI',
                desc: 'Natural language interfaces for customer support, sales, and internal help desks',
              },
              {
                icon: Cpu,
                title: 'Task Automation',
                desc: 'Autonomous agents that execute multi-step workflows without human intervention',
              },
              {
                icon: Network,
                title: 'Multi-Agent Systems',
                desc: 'Coordinated agent teams that collaborate to solve complex problems',
              },
              {
                icon: Settings,
                title: 'Tool Integration',
                desc: 'Agents that use APIs, databases, and external services to accomplish tasks',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our AI Agent Services</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              End-to-end AI agent development from concept to deployment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: 'Custom Agent Development',
                description: 'Build bespoke AI agents tailored to your specific use cases and business requirements.',
                features: ['Requirements Analysis', 'Agent Architecture Design', 'LLM Selection & Fine-tuning', 'Tool & API Integration'],
              },
              {
                icon: Zap,
                title: 'Agent Optimization',
                description: 'Improve the performance, accuracy, and efficiency of your existing AI agents.',
                features: ['Prompt Engineering', 'Response Quality Tuning', 'Latency Optimization', 'Cost Reduction'],
              },
              {
                icon: Network,
                title: 'Multi-Agent Orchestration',
                description: 'Design and deploy coordinated multi-agent systems for complex enterprise workflows.',
                features: ['Agent Communication Protocols', 'Task Distribution', 'Consensus Mechanisms', 'Scalable Architecture'],
              },
              {
                icon: Shield,
                title: 'Agent Security & Compliance',
                description: 'Ensure your AI agents are secure, reliable, and compliant with industry standards.',
                features: ['Input Validation', 'Output Filtering', 'Audit Logging', 'Access Control'],
              },
              {
                icon: Settings,
                title: 'Integration & Deployment',
                description: 'Seamlessly integrate AI agents into your existing systems and infrastructure.',
                features: ['API Development', 'Cloud Deployment', 'On-Premise Setup', 'Monitoring & Alerts'],
              },
              {
                icon: Brain,
                title: 'Agent Training & Support',
                description: 'Ongoing support and training to help your team manage and improve AI agents.',
                features: ['Team Training', 'Documentation', 'Performance Reviews', '24/7 Support'],
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Agent Use Cases</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Real-world applications of AI agents across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Customer Support Agents',
                desc: 'AI agents that handle customer inquiries 24/7, resolve issues, and escalate complex cases to humans.',
              },
              {
                title: 'Sales & Lead Qualification',
                desc: 'Intelligent agents that engage prospects, qualify leads, and schedule meetings automatically.',
              },
              {
                title: 'Personal Assistants',
                desc: 'AI agents that manage calendars, emails, tasks, and reminders for busy professionals.',
              },
              {
                title: 'Research & Analysis',
                desc: 'Agents that gather information, analyze data, and generate reports autonomously.',
              },
              {
                title: 'Code Development',
                desc: 'AI coding agents that write, review, and debug code to accelerate software development.',
              },
              {
                title: 'Content Creation',
                desc: 'Agents that generate, edit, and publish content across multiple platforms.',
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

      {/* Read next */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
            <h2 className="text-2xl md:text-3xl font-bold">Choosing an AI agent development partner</h2>
            <p className="mt-3 text-slate-400">
              If you&apos;re comparing vendors, this checklist covers what matters in production: evaluation,
              security, integrations, and realistic timelines.
            </p>
            <div className="mt-6">
              <Link
                href="/insights/ai-agent-development-company"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-800 transition"
              >
                Read the 2026 checklist
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Related Services</h3>
              <p className="text-slate-400">Pair agents with chatbots, integrations, and automation.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/ai-chatbot"
                className="bg-slate-900 border border-slate-700 px-5 py-3 rounded-xl hover:bg-slate-800 transition"
              >
                AI Chatbots
              </Link>
              <Link
                href="/ai-automation"
                className="bg-slate-900 border border-slate-700 px-5 py-3 rounded-xl hover:bg-slate-800 transition"
              >
                AI Automation
              </Link>
              <Link
                href="/chatgpt-integration"
                className="bg-slate-900 border border-slate-700 px-5 py-3 rounded-xl hover:bg-slate-800 transition"
              >
                ChatGPT Integration
              </Link>
            </div>
          </div>

          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Related Insights</h3>
            <p className="text-slate-400 mb-5">Guides and examples for production-grade agent systems.</p>
            <div className="flex flex-col gap-3">
              <Link href="/case-studies/lead-qualification-ai-agent" className="text-slate-200 hover:text-white transition">
                Case study: Lead qualification + meeting booking AI agent
              </Link>
              <Link href="/insights/ai-agent-development-company" className="text-slate-200 hover:text-white transition">
                How to choose an AI agent development company (2026 checklist)
              </Link>
              <Link href="/insights/ai-chatbot-development" className="text-slate-200 hover:text-white transition">
                AI chatbot development (2026 guide)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your AI Agent?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Let&apos;s discuss your use case and design the perfect AI agent for your business. Free consultation – no
              commitment required.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition"
            >
              Start Building
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

