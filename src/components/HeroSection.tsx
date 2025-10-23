'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Brain, Clock } from 'lucide-react';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  showButtons?: boolean;
  backgroundImage?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  showButtons = true,
  backgroundImage 
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#002B5B] via-[#001A3D] to-[#002B5B]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002B5B]/90 to-[#001A3D]/90" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00B8D9]/30 rounded-full"
              initial={{
                x: Math.random() * window?.innerWidth || 1200,
                y: Math.random() * window?.innerHeight || 800,
              }}
              animate={{
                x: Math.random() * (window?.innerWidth || 1200),
                y: Math.random() * (window?.innerHeight || 800),
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-[#00B8D9] mb-8 font-medium"
          >
            {subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Action Buttons */}
          {showButtons && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/domain">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#00B8D9] text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Explore Research</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link href="/milestones">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#00B8D9] text-[#00B8D9] px-8 py-4 rounded-lg font-semibold hover:bg-[#00B8D9] hover:text-white transition-all duration-300"
                >
                  View Milestones
                </motion.button>
              </Link>
            </motion.div>
          )}

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center space-y-3 text-white"
            >
              <div className="w-16 h-16 bg-[#00B8D9]/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#00B8D9]" />
              </div>
              <h3 className="text-lg font-semibold">Memory Forensics</h3>
              <p className="text-sm text-gray-300 text-center">
                Advanced memory analysis techniques for cybersecurity
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center space-y-3 text-white"
            >
              <div className="w-16 h-16 bg-[#00B8D9]/20 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-[#00B8D9]" />
              </div>
              <h3 className="text-lg font-semibold">LSTM Networks</h3>
              <p className="text-sm text-gray-300 text-center">
                Deep learning models for temporal pattern recognition
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center space-y-3 text-white"
            >
              <div className="w-16 h-16 bg-[#00B8D9]/20 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#00B8D9]" />
              </div>
              <h3 className="text-lg font-semibold">Temporal Analysis</h3>
              <p className="text-sm text-gray-300 text-center">
                Time-based execution phase detection algorithms
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#00B8D9] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#00B8D9] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
