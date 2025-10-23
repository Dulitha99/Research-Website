'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import { BookOpen, Target, Lightbulb, Settings, Code, Database } from 'lucide-react';

export default function Domain() {
  const domainSections = [
    {
      title: 'Literature Survey',
      description: 'Comprehensive review of existing memory forensics techniques, LSTM applications in cybersecurity, and temporal analysis methods. Our survey covers over 100 research papers from leading cybersecurity and machine learning conferences.',
      icon: BookOpen,
      details: [
        'Memory forensics state-of-the-art techniques',
        'LSTM networks in cybersecurity applications',
        'Temporal pattern recognition in digital forensics',
        'Execution phase detection methodologies'
      ]
    },
    {
      title: 'Research Gap',
      description: 'Identified limitations in current memory forensics approaches, particularly in temporal analysis and execution phase detection. Current methods lack sophisticated temporal pattern recognition capabilities.',
      icon: Target,
      details: [
        'Limited temporal analysis in memory forensics',
        'Insufficient execution phase detection accuracy',
        'Lack of automated temporal pattern recognition',
        'Limited integration of deep learning in forensics'
      ]
    },
    {
      title: 'Problem Statement',
      description: 'Traditional memory forensics techniques struggle with accurate execution phase detection due to limited temporal analysis capabilities. This research addresses the need for advanced temporal pattern recognition in memory forensics.',
      icon: Lightbulb,
      details: [
        'Inaccurate execution phase detection',
        'Manual temporal analysis requirements',
        'Limited scalability of current methods',
        'Need for automated temporal pattern recognition'
      ]
    },
    {
      title: 'Research Objectives',
      description: 'Develop an innovative approach combining memory forensics with LSTM networks for accurate execution phase detection through temporal analysis.',
      icon: Settings,
      details: [
        'Design LSTM-based temporal analysis framework',
        'Develop memory forensics execution phase detector',
        'Implement automated temporal pattern recognition',
        'Evaluate performance against existing methods'
      ]
    },
    {
      title: 'Methodology',
      description: 'Our research methodology combines experimental design, data collection, model development, and evaluation phases to ensure comprehensive validation of our approach.',
      icon: Code,
      details: [
        'Experimental design and data collection',
        'LSTM model architecture development',
        'Temporal analysis algorithm implementation',
        'Performance evaluation and validation'
      ]
    },
    {
      title: 'Technologies Used',
      description: 'Cutting-edge technologies and frameworks including Python, TensorFlow, memory forensics tools, and advanced machine learning libraries.',
      icon: Database,
      details: [
        'Python for development and analysis',
        'TensorFlow/Keras for LSTM implementation',
        'Volatility for memory forensics',
        'Scikit-learn for data preprocessing'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Research Domain"
        subtitle="Memory Forensics & Machine Learning Integration"
        description="Our research focuses on bridging the gap between traditional memory forensics and modern machine learning techniques, specifically LSTM networks, to enhance execution phase detection capabilities."
        showButtons={false}
      />

      {/* Domain Sections */}
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
              Research Domain Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our research encompasses multiple domains including memory forensics, machine learning, cybersecurity, and temporal analysis. Each aspect contributes to our comprehensive approach to execution phase detection.
            </p>
          </motion.div>

          <div className="space-y-12">
            {domainSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                  <Card
                    title={section.title}
                    description={section.description}
                    icon={section.icon}
                    className="h-full"
                  >
                    <div className="mt-4">
                      <h4 className="font-semibold text-[#002B5B] mb-3">Key Points:</h4>
                      <ul className="space-y-2">
                        {section.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <span className="w-2 h-2 bg-[#00B8D9] rounded-full mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className={`${index % 2 === 0 ? 'order-2' : 'order-1'} flex justify-center`}
                >
                  <div className="w-64 h-64 bg-gradient-to-br from-[#00B8D9]/20 to-[#002B5B]/20 rounded-full flex items-center justify-center">
                    <section.icon className="w-32 h-32 text-[#00B8D9]" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact Section */}
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
              Research Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research aims to make significant contributions to the fields of memory forensics and cybersecurity through innovative machine learning applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#00B8D9] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#002B5B] mb-4">Enhanced Detection</h3>
              <p className="text-gray-600">
                Improved accuracy in execution phase detection through advanced temporal analysis techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#00B8D9] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#002B5B] mb-4">Automation</h3>
              <p className="text-gray-600">
                Automated temporal pattern recognition reducing manual analysis requirements in memory forensics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#00B8D9] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#002B5B] mb-4">Innovation</h3>
              <p className="text-gray-600">
                Novel integration of LSTM networks with memory forensics for enhanced cybersecurity capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
