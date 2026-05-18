'use client';

import { motion } from 'framer-motion';
import { Brain, ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign, Bot, Zap, MessageSquare, Code, Shield } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 'ecommerce-chatbot',
    href: '/case-studies/ecommerce-chatbot',
    icon: Bot,
    category: 'AI Chatbot',
    title: 'E-commerce Customer Support Automation',
    client: 'Online Retail Company',
    industry: 'E-commerce',
    challenge: 'A growing online retailer was struggling with 500+ daily customer inquiries. Their support team of 8 agents couldn\'t keep up, leading to 4-hour average response times and declining customer satisfaction scores.',
    solution: 'We built a custom AI chatbot powered by GPT-4 that handles product inquiries, order tracking, returns processing, and FAQ responses. The bot integrates with their Shopify store and CRM system.',
    implementation: [
      'Week 1-2: Requirements gathering and conversation flow design',
      'Week 3-4: GPT-4 fine-tuning on product catalog and company policies',
      'Week 5-6: Integration with Shopify, shipping APIs, and CRM',
      'Week 7-8: Testing, optimization, and team training'
    ],
    results: [
      { metric: 'Response Time', before: '4 hours', after: '30 seconds', improvement: '99%' },
      { metric: 'Tickets Resolved by AI', before: '0%', after: '73%', improvement: '+73%' },
      { metric: 'Customer Satisfaction', before: '3.2/5', after: '4.6/5', improvement: '+44%' },
      { metric: 'Support Cost', before: '$32K/mo', after: '$12K/mo', improvement: '-63%' }
    ],
    investment: '$25,000 - $40,000',
    timeline: '8 weeks',
    roi: '6-month payback period'
  },
  {
    id: 'lead-qualification-ai-agent',
    href: '/case-studies/lead-qualification-ai-agent',
    icon: Brain,
    category: 'AI Agents',
    title: 'AI Lead Qualification + Meeting Booking Agent',
    client: 'B2B Services Company',
    industry: 'Professional Services',
    challenge:
      'Inbound leads arrived from web forms, email, and LinkedIn. Follow-up was inconsistent, qualification criteria varied by rep, and the CRM was missing key fields needed for reporting.',
    solution:
      'We built an AI agent that enriches lead data, scores fit based on ICP rules, routes to the right owner, and books meetings automatically for high-intent leads—while escalating low-confidence cases to a human.',
    implementation: [
      'Week 1: ICP definition + scoring rubric + routing rules',
      'Week 2-3: Integrations (CRM, Slack, email, calendar, web forms)',
      'Week 4: Enrichment + validation + human-in-the-loop review flow',
      'Week 5-6: QA, safety guardrails, analytics, and launch'
    ],
    results: [
      { metric: 'Speed to Lead', before: '2 hours', after: '30 minutes', improvement: '4x faster' },
      { metric: 'SQL Conversion', before: '18%', after: '23.6%', improvement: '+31%' },
      { metric: 'Ops Time Saved', before: '0', after: '18 hrs/week', improvement: 'Freed for selling' },
      { metric: 'CRM Completeness', before: 'Low', after: 'High', improvement: 'Cleaner pipeline' }
    ],
    investment: '$18,000 - $35,000',
    timeline: '6 weeks',
    roi: 'Improved conversion + faster sales cycle'
  },
  {
    id: 'workflow-automation',
    href: '/case-studies',
    icon: Zap,
    category: 'Workflow Automation',
    title: 'Invoice Processing Automation for Accounting Firm',
    client: 'Regional Accounting Firm',
    industry: 'Professional Services',
    challenge: 'An accounting firm processed 2,000+ invoices monthly. Manual data entry took 3 staff members 40 hours/week, with 5% error rate causing reconciliation issues.',
    solution: 'We deployed an AI-powered document processing system using OCR and LLM technology. The system extracts data from invoices (any format), validates against vendor database, and auto-posts to QuickBooks.',
    implementation: [
      'Week 1: Invoice format analysis and data mapping',
      'Week 2-3: OCR pipeline + GPT-4 extraction model training',
      'Week 4: QuickBooks API integration and validation rules',
      'Week 5-6: Testing with historical invoices and refinement'
    ],
    results: [
      { metric: 'Processing Time', before: '8 min/invoice', after: '45 seconds', improvement: '-91%' },
      { metric: 'Error Rate', before: '5%', after: '0.3%', improvement: '-94%' },
      { metric: 'Staff Hours/Week', before: '120 hours', after: '15 hours', improvement: '-88%' },
      { metric: 'Monthly Capacity', before: '2,000', after: '10,000+', improvement: '+400%' }
    ],
    investment: '$15,000 - $25,000',
    timeline: '6 weeks',
    roi: '3-month payback period'
  },
  {
    id: 'ai-integration',
    href: '/case-studies',
    icon: Brain,
    category: 'AI Integration',
    title: 'Claude AI Integration for Legal Document Review',
    client: 'Mid-size Law Firm',
    industry: 'Legal Services',
    challenge: 'Associates spent 60% of billable hours on document review. Contract analysis for due diligence took 2-3 days per deal, limiting case capacity.',
    solution: 'We integrated Claude AI into their document management system for automated contract analysis. The system flags risks, extracts key terms, and generates summary reports.',
    implementation: [
      'Week 1-2: Legal document taxonomy and risk framework design',
      'Week 3-4: Claude API integration with secure document handling',
      'Week 5-6: Custom prompts for different contract types',
      'Week 7-8: Validation against senior attorney reviews'
    ],
    results: [
      { metric: 'Review Time', before: '2-3 days', after: '4 hours', improvement: '-85%' },
      { metric: 'Billable Hours Saved', before: '0', after: '200 hrs/mo', improvement: '+$60K/mo' },
      { metric: 'Risk Detection', before: '82%', after: '96%', improvement: '+17%' },
      { metric: 'Case Capacity', before: '15/month', after: '35/month', improvement: '+133%' }
    ],
    investment: '$30,000 - $50,000',
    timeline: '8 weeks',
    roi: '2-month payback period'
  },
  {
    id: 'custom-ai-saas',
    href: '/case-studies',
    icon: Code,
    category: 'Custom AI Development',
    title: 'AI-Powered Recruitment Screening Platform',
    client: 'Tech Staffing Agency',
    industry: 'Recruitment',
    challenge: 'Recruiters manually screened 500+ resumes per role. Initial screening took 2 weeks, causing top candidates to accept other offers.',
    solution: 'We built a custom AI SaaS platform that automatically screens resumes, scores candidates against job requirements, conducts initial video interviews with AI, and generates hiring recommendations.',
    implementation: [
      'Month 1: Product design and ML model architecture',
      'Month 2: Resume parsing and scoring algorithm development',
      'Month 3: AI video interview system with sentiment analysis',
      'Month 4: Dashboard, reporting, and ATS integrations',
      'Month 5: Beta testing and iteration'
    ],
    results: [
      { metric: 'Time to Shortlist', before: '2 weeks', after: '2 hours', improvement: '-99%' },
      { metric: 'Recruiter Productivity', before: '10 roles', after: '40 roles', improvement: '+300%' },
      { metric: 'Candidate Quality', before: '60% fit', after: '85% fit', improvement: '+42%' },
      { metric: 'Cost per Hire', before: '$4,500', after: '$1,800', improvement: '-60%' }
    ],
    investment: '$80,000 - $150,000',
    timeline: '5 months',
    roi: '12-month payback period'
  },
  {
    id: 'ai-customer-service',
    href: '/case-studies',
    icon: MessageSquare,
    category: 'AI Customer Service',
    title: '24/7 AI Support for SaaS Company',
    client: 'B2B SaaS Platform',
    industry: 'Technology',
    challenge: 'A SaaS company with global customers couldn\'t provide 24/7 support. Night/weekend tickets piled up, and complex technical issues required escalation 40% of the time.',
    solution: 'We deployed an intelligent AI support system that handles technical troubleshooting, account management, and billing inquiries. It integrates with their knowledge base and can execute actions like password resets and plan changes.',
    implementation: [
      'Week 1-2: Knowledge base ingestion and FAQ mapping',
      'Week 3-4: Technical troubleshooting decision trees',
      'Week 5-6: Action execution APIs (account, billing, settings)',
      'Week 7-8: Escalation logic and human handoff optimization'
    ],
    results: [
      { metric: 'Support Coverage', before: '10 hrs/day', after: '24/7', improvement: '+140%' },
      { metric: 'First Response', before: '6 hours', after: '< 1 min', improvement: '-99%' },
      { metric: 'Resolution Rate', before: '60%', after: '82%', improvement: '+37%' },
      { metric: 'CSAT Score', before: '72%', after: '91%', improvement: '+26%' }
    ],
    investment: '$20,000 - $35,000',
    timeline: '8 weeks',
    roi: '4-month payback period'
  },
  {
    id: 'ai-consulting',
    href: '/case-studies',
    icon: Shield,
    category: 'AI Strategy',
    title: 'AI Transformation Roadmap for Healthcare Provider',
    client: 'Regional Healthcare Network',
    industry: 'Healthcare',
    challenge: 'A healthcare network wanted to adopt AI but lacked clarity on where to start. Concerns about HIPAA compliance, staff resistance, and ROI uncertainty stalled initiatives.',
    solution: 'We conducted a comprehensive AI readiness assessment, identified 12 high-impact use cases, prioritized by ROI and feasibility, and created a 2-year implementation roadmap with compliance framework.',
    implementation: [
      'Week 1-2: Stakeholder interviews and workflow analysis',
      'Week 3-4: Data infrastructure and compliance assessment',
      'Week 5-6: Use case identification and ROI modeling',
      'Week 7-8: Roadmap development and vendor evaluation'
    ],
    results: [
      { metric: 'Use Cases Identified', before: '0', after: '12', improvement: 'Prioritized' },
      { metric: 'Projected 3-Year ROI', before: 'Unknown', after: '$4.2M', improvement: 'Quantified' },
      { metric: 'Compliance Framework', before: 'None', after: 'HIPAA-ready', improvement: 'Established' },
      { metric: 'Implementation Risk', before: 'High', after: 'Managed', improvement: 'Mitigated' }
    ],
    investment: '$15,000 - $30,000',
    timeline: '8 weeks',
    roi: 'Foundation for $4.2M savings'
  }
];

export default function CaseStudiesPage() {
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
            <Link href="/#services" className="text-slate-300 hover:text-white transition">Services</Link>
            <Link href="/ai-agents" className="text-slate-300 hover:text-white transition">AI Agents</Link>
            <Link href="/case-studies" className="text-white font-medium">Case Studies</Link>
            <Link href="/#contact" className="text-slate-300 hover:text-white transition">Contact</Link>
          </div>
          <Link href="/#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-full font-medium hover:opacity-90 transition">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Results from{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              See how businesses across industries have transformed their operations with our AI solutions. 
              Concrete results, measurable ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="bg-slate-800/30 border border-slate-700 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 p-8 border-b border-slate-700">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                    <study.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                  <span className="text-slate-400 text-sm">{study.industry}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{study.title}</h2>
                <p className="text-slate-400">{study.client}</p>
              </div>

              <div className="p-8 grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      The Challenge
                    </h3>
                    <p className="text-slate-300">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Our Solution
                    </h3>
                    <p className="text-slate-300">{study.solution}</p>
                  </div>

                  {/* Implementation */}
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Implementation
                    </h3>
                    <ul className="space-y-2">
                      {study.implementation.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Results */}
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Results & ROI
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-xl p-4">
                        <p className="text-slate-400 text-sm mb-1">{result.metric}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-slate-500 text-sm line-through">{result.before}</span>
                          <ArrowRight className="w-3 h-3 text-slate-500" />
                          <span className="text-white font-bold">{result.after}</span>
                        </div>
                        <p className="text-green-400 text-sm font-medium mt-1">{result.improvement}</p>
                      </div>
                    ))}
                  </div>

                  {/* Investment Summary */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
                    <h4 className="font-semibold mb-4">Project Summary</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 flex items-center gap-2">
                          <DollarSign className="w-4 h-4" /> Investment
                        </span>
                        <span className="font-medium">{study.investment}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 flex items-center gap-2">
                          <Clock className="w-4 h-4" /> Timeline
                        </span>
                        <span className="font-medium">{study.timeline}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" /> ROI
                        </span>
                        <span className="font-medium text-green-400">{study.roi}</span>
                      </div>
                    </div>
                  </div>

                  {/* Detail link */}
                  {study.href !== '/case-studies' && (
                    <div className="mt-6">
                      <Link
                        href={study.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200 transition"
                      >
                        Read the full case study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Similar Results?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Every business is unique. Let&apos;s discuss your challenges and design a custom AI solution 
              that delivers measurable ROI for your specific situation.
            </p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition"
            >
              Get Your Free Assessment
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
            <p className="text-slate-500">
              © {new Date().getFullYear()} Xu Studio LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
