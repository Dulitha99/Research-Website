'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Timeline from '@/components/Timeline';
import { Calendar, Award, TrendingUp } from 'lucide-react';
import milestonesData from '../../../data/milestones.json';

export default function Milestones() {
  const { milestones } = milestonesData;

  const stats = [
    {
      title: 'Total Milestones',
      value: milestones.length,
      icon: Calendar,
      color: 'text-[#00B8D9]'
    },
    {
      title: 'Total Marks',
      value: milestones.reduce((sum, milestone) => sum + milestone.marks, 0),
      icon: Award,
      color: 'text-green-500'
    },
    {
      title: 'Completion Rate',
      value: `${Math.round((milestones.filter(m => m.status === 'completed').length / milestones.length) * 100)}%`,
      icon: TrendingUp,
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Project Milestones"
        subtitle="Research Progress & Key Achievements"
        description="Track our research journey through key milestones, presentations, and achievements. Each milestone represents significant progress in our SilentWatch research project."
        showButtons={false}
      />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">
              Project Statistics
            </h2>
            <p className="text-lg text-gray-600">
              Overview of our research progress and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-[#002B5B] mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">
                  {stat.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Research Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research journey through key milestones, presentations, and achievements. Each milestone represents significant progress in advancing memory forensics through machine learning.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Timeline milestones={milestones} />
          </div>
        </div>
      </section>

      {/* Progress Overview */}
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
              Research Progress Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research follows a structured approach with clear milestones and deliverables to ensure comprehensive development of our SilentWatch system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Completed Milestones */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3" />
                Completed Milestones
              </h3>
              <div className="space-y-4">
                {milestones.filter(m => m.status === 'completed').map((milestone) => (
                  <div key={milestone.id} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-[#002B5B]">{milestone.title}</h4>
                      <span className="text-sm text-green-600 font-medium">{milestone.marks} marks</span>
                    </div>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      Completed: {new Date(milestone.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Milestones */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#00B8D9]/10 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-[#002B5B] mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Upcoming Milestones
              </h3>
              <div className="space-y-4">
                {milestones.filter(m => m.status === 'upcoming').map((milestone) => (
                  <div key={milestone.id} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-[#002B5B]">{milestone.title}</h4>
                      <span className="text-sm text-[#00B8D9] font-medium">{milestone.marks} marks</span>
                    </div>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      Scheduled: {new Date(milestone.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#002B5B] to-[#001A3D] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated with Our Progress
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Follow our research journey and be the first to know about our latest findings and achievements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00B8D9] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Presentations
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
