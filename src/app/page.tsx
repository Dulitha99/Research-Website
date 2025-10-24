'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import { Shield, Brain, Clock, ArrowRight, FileText, Users, Presentation } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: 'Phase 1: Reconnaissance',
      description: 'Anomaly-Based Clustering (DBSCAN/K-Means) with Incremental Learning to detect subtle reconnaissance activities such as port scans, DNS enumeration, or probing behaviors before intrusion begins.',
      icon: Shield,
    },
    {
      title: 'Phase 2: Delivery',
      description: 'Hybrid Deep Learning (Bi-directional LSTM/BERT) with Attention Mechanisms to identify and classify sophisticated phishing attempts and malicious payloads that serve as initial infection vectors.',
      icon: Brain,
    },
    {
      title: 'Phase 3: Execution',
      description: 'Memory Forensics (Volatility) combined with Temporal Modeling (LSTM) to detect sequential anomalies and malicious in-memory process executions, focusing on memory-resident malware.',
      icon: Clock,
    },
  ];

  const quickLinks = [
    {
      title: 'Research Domain',
      description: 'Explore our research methodology and domain expertise',
      icon: FileText,
      href: '/domain',
    },
    {
      title: 'Project Milestones',
      description: 'Track our research progress and key achievements',
      icon: Clock,
      href: '/milestones',
    },
    {
      title: 'Team Members',
      description: 'Meet our research team and supervisors',
      icon: Users,
      href: '/about',
    },
    {
      title: 'Presentations',
      description: 'View our research presentations and findings',
      icon: Presentation,
      href: '/presentations',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="SilentWatch"
        subtitle="Advanced Persistent Threat Detection and Mitigation Framework (R25-037)"
        description="SilentWatch is a state-of-the-art, modular cybersecurity framework engineered to address the growing challenges posed by Advanced Persistent Threats (APTs) — stealthy, targeted attacks that often evade traditional, signature-based security systems by operating in memory or using novel social engineering tactics."
        showButtons={true}
      />

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Multi-Stage, Intelligent Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SilentWatch operates as an integrated, intelligent ecosystem — a collection of specialized machine learning models coordinated through a Centralized Threat Intelligence Repository, enabling granular, real-time threat detection across multiple attack phases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SilentWatch Framework Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              SilentWatch Framework Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              SilentWatch transforms cybersecurity from passive detection to proactive mitigation, offering a powerful, adaptive defense layer built for modern enterprise environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700"
            >
              <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-Time Adaptability</h3>
              <p className="text-gray-300 leading-relaxed">
                Continuously learns from new attack patterns and adapts to evolving adversarial tactics, maintaining high detection accuracy (target &gt; 90%).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700"
            >
              <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Unified Dashboard</h3>
              <p className="text-gray-300 leading-relaxed">
                Provides centralized visibility for detections, analytics, and live system status through an intuitive interface.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700"
            >
              <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automated Response</h3>
              <p className="text-gray-300 leading-relaxed">
                Integrates with an Automated Blocking and Mitigation System capable of terminating malicious processes, isolating hosts, and generating real-time firewall rules.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              SilentWatch: Detect the Undetected
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              SilentWatch redefines advanced threat defense through its intelligent, self-learning, and fully automated framework — delivering real-time detection and immediate response against even the most sophisticated cyber adversaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Explore SilentWatch Research
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the comprehensive SilentWatch framework, research methodology, and stay updated with our advanced threat detection progress.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={link.href}>
                  <Card
                    title={link.title}
                    description={link.description}
                    icon={link.icon}
                    className="h-full group cursor-pointer"
                  >
                    <div className="flex items-center text-indigo-400 font-semibold group-hover:text-white transition-colors duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Join the SilentWatch Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the next generation of cybersecurity defense. SilentWatch is redefining how we detect and mitigate Advanced Persistent Threats in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/documents">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-indigo-600 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
                  View Documents
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}