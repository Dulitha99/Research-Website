'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#002B5B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-[#00B8D9]">SilentWatch</h3>
            <p className="text-gray-300 leading-relaxed">
              Memory Forensics Based Execution Phase Detection through Temporal Analysis with LSTM
            </p>
            <p className="text-sm text-gray-400">
              A research project focused on advancing cybersecurity through innovative memory forensics techniques.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[#00B8D9]">Quick Links</h4>
            <div className="space-y-2">
              <a href="/domain" className="block text-gray-300 hover:text-[#00B8D9] transition-colors duration-200">
                Research Domain
              </a>
              <a href="/milestones" className="block text-gray-300 hover:text-[#00B8D9] transition-colors duration-200">
                Project Milestones
              </a>
              <a href="/documents" className="block text-gray-300 hover:text-[#00B8D9] transition-colors duration-200">
                Documents
              </a>
              <a href="/about" className="block text-gray-300 hover:text-[#00B8D9] transition-colors duration-200">
                About Us
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[#00B8D9]">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00B8D9]" />
                <a 
                  href="mailto:silentwatch@sliit.lk" 
                  className="text-gray-300 hover:text-[#00B8D9] transition-colors duration-200"
                >
                  silentwatch@sliit.lk
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#00B8D9]" />
                <span className="text-gray-300">
                  Faculty of Computing, SLIIT
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00B8D9]" />
                <span className="text-gray-300">
                  +94 11 754 4801
                </span>
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
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 SilentWatch – Faculty of Computing, SLIIT. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
