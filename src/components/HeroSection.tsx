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
  showButtons = true
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-indigo-900/90" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            // Pre-calculated positions to ensure exact server/client consistency
            const positions = [
              { initial: { x: 100, y: 200 }, animate: { x: 800, y: 400 }, duration: 15 },
              { initial: { x: 300, y: 150 }, animate: { x: 900, y: 600 }, duration: 18 },
              { initial: { x: 500, y: 300 }, animate: { x: 200, y: 700 }, duration: 12 },
              { initial: { x: 700, y: 100 }, animate: { x: 1100, y: 500 }, duration: 20 },
              { initial: { x: 200, y: 400 }, animate: { x: 600, y: 200 }, duration: 16 },
              { initial: { x: 900, y: 250 }, animate: { x: 400, y: 800 }, duration: 14 },
              { initial: { x: 150, y: 500 }, animate: { x: 750, y: 150 }, duration: 17 },
              { initial: { x: 650, y: 350 }, animate: { x: 950, y: 650 }, duration: 19 },
              { initial: { x: 400, y: 100 }, animate: { x: 1000, y: 300 }, duration: 13 },
              { initial: { x: 800, y: 450 }, animate: { x: 300, y: 750 }, duration: 21 },
              { initial: { x: 250, y: 300 }, animate: { x: 850, y: 550 }, duration: 15 },
              { initial: { x: 550, y: 200 }, animate: { x: 150, y: 600 }, duration: 18 },
              { initial: { x: 750, y: 400 }, animate: { x: 1050, y: 100 }, duration: 16 },
              { initial: { x: 350, y: 600 }, animate: { x: 700, y: 250 }, duration: 14 },
              { initial: { x: 950, y: 150 }, animate: { x: 500, y: 700 }, duration: 20 },
              { initial: { x: 100, y: 350 }, animate: { x: 600, y: 500 }, duration: 17 },
              { initial: { x: 600, y: 500 }, animate: { x: 1000, y: 200 }, duration: 19 },
              { initial: { x: 450, y: 250 }, animate: { x: 800, y: 650 }, duration: 13 },
              { initial: { x: 850, y: 300 }, animate: { x: 200, y: 550 }, duration: 21 },
              { initial: { x: 300, y: 450 }, animate: { x: 900, y: 100 }, duration: 15 }
            ];
            
            const pos = positions[i] || { initial: { x: 100, y: 200 }, animate: { x: 800, y: 400 }, duration: 15 };
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
                initial={pos.initial}
                animate={pos.animate}
                transition={{
                  duration: pos.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            );
          })}
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
            className="text-xl md:text-2xl text-indigo-400 mb-8 font-medium"
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
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300"
                >
                  <span>Explore Research</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link href="/milestones">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-indigo-600 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
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
              <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold">APT Detection</h3>
              <p className="text-sm text-gray-300 text-center">
                Advanced Persistent Threat detection and mitigation
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center space-y-3 text-white"
            >
              <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold">Machine Learning</h3>
              <p className="text-sm text-gray-300 text-center">
                Multi-stage intelligent threat detection algorithms
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center space-y-3 text-white"
            >
              <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold">Real-Time Response</h3>
              <p className="text-sm text-gray-300 text-center">
                Automated blocking and mitigation systems
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
          className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-indigo-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
