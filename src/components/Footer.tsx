'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Shield, Brain, Clock, Users, Award, FileText, Presentation, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-indigo-400 mb-2">SilentWatch</h3>
              <p className="text-lg text-gray-300 mb-2">
                Advanced Persistent Threat Detection and Mitigation Framework (R25-037)
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Memory Forensics Based Execution Phase Detection through Temporal Analysis with LSTM
              </p>
              <p className="text-sm text-gray-400">
                A state-of-the-art, modular cybersecurity framework engineered to address Advanced Persistent Threats (APTs) through innovative memory forensics techniques and machine learning.
              </p>
            </div>

            {/* Research Phases */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-indigo-400">Research Phases</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm text-gray-300">Reconnaissance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm text-gray-300">Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm text-gray-300">Execution</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-indigo-400">Research Navigation</h4>
            <div className="space-y-3">
              <Link href="/domain" className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-200 group">
                <FileText className="w-4 h-4 mr-2" />
                <span>Research Domain</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/milestones" className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-200 group">
                <Clock className="w-4 h-4 mr-2" />
                <span>Project Milestones</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/presentations" className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-200 group">
                <Presentation className="w-4 h-4 mr-2" />
                <span>Presentations</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/documents" className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-200 group">
                <FileText className="w-4 h-4 mr-2" />
                <span>Documents</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/about" className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-200 group">
                <Users className="w-4 h-4 mr-2" />
                <span>Research Team</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </motion.div>

          {/* Contact & Institution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-indigo-400">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-indigo-400 mt-0.5" />
                <div>
                  <a 
                    href="mailto:silentwatch@sliit.lk" 
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 block"
                  >
                    silentwatch@sliit.lk
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Project Contact</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400 mt-0.5" />
                <div>
                  <span className="text-gray-300 block">Faculty of Computing</span>
                  <span className="text-gray-300 block">Sri Lanka Institute of Information Technology</span>
                  <p className="text-xs text-gray-400 mt-1">Malabe, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-300">+94 11 754 4801</span>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="pt-4 border-t border-gray-700">
              <h5 className="text-sm font-semibold text-indigo-400 mb-3">Key Achievements</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Award className="w-3 h-3 text-indigo-400" />
                  <span className="text-xs text-gray-300">94.50% Detection Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-3 h-3 text-indigo-400" />
                  <span className="text-xs text-gray-300">98.98% Phishing Detection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-3 h-3 text-indigo-400" />
                  <span className="text-xs text-gray-300">Real-time APT Detection</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 SilentWatch Research Project – Faculty of Computing, SLIIT
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Advanced Persistent Threat Detection and Mitigation Framework (R25-037)
              </p>
            </div>
            <div className="flex items-center space-x-6 text-xs text-gray-400">
              <span>Memory Forensics</span>
              <span>•</span>
              <span>LSTM Analysis</span>
              <span>•</span>
              <span>Cybersecurity Research</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
