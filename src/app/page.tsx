'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import { Shield, Brain, Clock, ArrowRight, FileText, Users, Presentation } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: 'Memory Forensics',
      description: 'Advanced techniques for analyzing memory dumps to detect malicious activities and execution phases.',
      icon: Shield,
    },
    {
      title: 'LSTM Networks',
      description: 'Deep learning models that excel at temporal pattern recognition in cybersecurity data.',
      icon: Brain,
    },
    {
      title: 'Temporal Analysis',
      description: 'Time-based analysis methods for detecting execution phases in memory forensics.',
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
        subtitle="Memory Forensics Based Execution Phase Detection through Temporal Analysis with LSTM"
        description="An innovative research project that combines advanced memory forensics techniques with deep learning to detect and analyze execution phases in cybersecurity scenarios. Our approach leverages LSTM networks for temporal pattern recognition in memory dumps."
        showButtons={true}
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#002B5B] mb-6">
              Research Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research combines cutting-edge memory forensics with machine learning to advance cybersecurity detection capabilities.
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

      {/* Quick Links Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#002B5B] mb-6">
              Explore Our Research
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the various aspects of our SilentWatch research project and stay updated with our progress.
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
                    <div className="flex items-center text-[#00B8D9] font-semibold group-hover:text-[#002B5B] transition-colors duration-300">
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
      <section className="py-20 bg-gradient-to-br from-[#002B5B] to-[#001A3D] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Join Our Research Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay connected with our research progress and be part of the cybersecurity innovation community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#00B8D9] text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/documents">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#00B8D9] text-[#00B8D9] px-8 py-4 rounded-lg font-semibold hover:bg-[#00B8D9] hover:text-white transition-all duration-300"
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