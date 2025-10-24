'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Timeline from '@/components/Timeline';
import { 
  Calendar, 
  Award, 
  CheckCircle,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import milestonesData from '../../../data/milestones.json';
import { Milestone } from '@/types/milestone';

export default function Milestones() {
  const { milestones } = milestonesData as { milestones: Milestone[] };
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  const stats = [
    {
      title: 'Total Assessments',
      value: milestones.length,
      icon: Calendar,
      color: 'text-indigo-400'
    },
    {
      title: 'Total Weightage',
      value: '100%',
      icon: Award,
      color: 'text-green-500'
    },
    {
      title: 'Completed',
      value: milestones.filter(m => m.status === 'completed').length,
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Remaining',
      value: milestones.filter(m => m.status === 'upcoming' || m.status === 'ongoing').length,
      icon: Clock,
      color: 'text-orange-500'
    }
  ];

  const assessmentBreakdown = [
    {
      assessment: 'Project Proposal Report (Final)',
      dueDate: '31st January',
      weightage: '12%',
      learningOutcomes: 'LO1 - LO5',
      deliverableFocus: 'Full scope, research problem, initial literature survey, methodology.'
    },
    {
      assessment: 'Progress Presentation I (PP1)',
      dueDate: '7th – 9th April',
      weightage: '15%',
      learningOutcomes: 'LO1 - LO5',
      deliverableFocus: 'Detailed literature review, finalized datasets, and initial model planning (Module 1/4).'
    },
    {
      assessment: 'Progress Presentation II (PP2)',
      dueDate: '15th – 16th September',
      weightage: '18%',
      learningOutcomes: 'LO1 - LO5',
      deliverableFocus: 'Proof of Concept, model building progress, implementation status, and integration planning.'
    },
    {
      assessment: 'Final Report',
      dueDate: 'October (Final Document)',
      weightage: '19%',
      learningOutcomes: 'LO1 - LO5',
      deliverableFocus: 'Comprehensive documentation of design, development, results, analysis, and conclusions.'
    },
    {
      assessment: 'Final Presentation & VIVA',
      dueDate: '27th – 28th October',
      weightage: '20%',
      learningOutcomes: 'LO1 - LO5',
      deliverableFocus: 'Oral defense of the complete project, system demonstration, and technical Q&A.'
    },
    {
      assessment: 'Research Paper (Published)',
      dueDate: '29th August (Submission)',
      weightage: '10%',
      learningOutcomes: 'LO1 - LO4',
      deliverableFocus: 'Concise academic summary of novel methodology and final results.'
    },
    {
      assessment: 'Project Website',
      dueDate: '27th – 28th October',
      weightage: '2%',
      learningOutcomes: 'LO4',
      deliverableFocus: 'Communication and presentation of the project to a wider audience.'
    },
    {
      assessment: 'Research Logbook/Status Docs',
      dueDate: 'Ongoing',
      weightage: '4%',
      learningOutcomes: 'LO4',
      deliverableFocus: 'Continuous tracking of individual and group progress, decision-making, and weekly status updates.'
    }
  ];

  const phases = [
    {
      title: 'Phase 1: Initiation and Foundation',
      description: 'Project setup, topic approval, and initial research planning',
      milestones: milestones.filter(m => m.phase === 'Phase 1: Initiation and Foundation'),
      color: 'bg-blue-900/50 border-blue-600'
    },
    {
      title: 'Phase 2: Progress and Proof of Concept',
      description: 'Literature review completion, model development, and progress presentations',
      milestones: milestones.filter(m => m.phase === 'Phase 2: Progress and Proof of Concept'),
      color: 'bg-green-900/50 border-green-600'
    },
    {
      title: 'Phase 3: Finalization and Submission',
      description: 'Final documentation, presentations, and project completion',
      milestones: milestones.filter(m => m.phase === 'Phase 3: Finalization and Submission'),
      color: 'bg-purple-900/50 border-purple-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Milestones: Project Timeline and Assessments"
        subtitle="Advanced Persistent Threat (APT) Detection and Mitigation Framework (R25-037)"
        description="This section details the formal assessment structure for the Advanced Persistent Threat (APT) Detection and Mitigation Framework, including due dates and marks allocated, aligning with the IT4010 Research Project module requirements."
        showButtons={false}
      />

      {/* Assessment Breakdown Section */}
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
              Assessment Breakdown
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive overview of all assessment items, due dates, weightage, and learning outcomes for the SilentWatch project.
            </p>
          </motion.div>

          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Assessment Item</th>
                    <th className="px-6 py-4 text-left font-semibold">Due Date (Tentative)</th>
                    <th className="px-6 py-4 text-left font-semibold">Weightage (Marks)</th>
                    <th className="px-6 py-4 text-left font-semibold">Learning Outcomes (LO) Covered</th>
                    <th className="px-6 py-4 text-left font-semibold">Deliverable Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {assessmentBreakdown.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}
                    >
                      <td className="px-6 py-4 font-semibold text-white">{item.assessment}</td>
                      <td className="px-6 py-4 text-gray-300">{item.dueDate}</td>
                      <td className="px-6 py-4 text-gray-300">{item.weightage}</td>
                      <td className="px-6 py-4 text-gray-300">{item.learningOutcomes}</td>
                      <td className="px-6 py-4 text-gray-300">{item.deliverableFocus}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Project Statistics
            </h2>
            <p className="text-lg text-gray-300">
              Overview of our research progress and assessment structure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-700"
              >
                <div className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-300 font-medium">
                  {stat.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Milestone List Section */}
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
              Detailed Milestone List
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              This list provides the formal documents and presentations required throughout the project lifecycle. Click on any milestone to view detailed information.
            </p>
          </motion.div>

          <div className="space-y-12">
            {phases.map((phase, phaseIndex) => (
              <motion.div
                key={phaseIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: phaseIndex * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-xl border-2 ${phase.color} p-8`}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300 mb-6">{phase.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {phase.milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-gray-600"
                      onClick={() => setSelectedMilestone(milestone)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-white text-sm">{milestone.title}</h4>
                        <span className="text-xs text-indigo-400 font-medium">{milestone.weightage}</span>
                      </div>
                      <p className="text-gray-300 text-xs mb-3">{milestone.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {new Date(milestone.date).toLocaleDateString()}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                          milestone.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {milestone.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Research Timeline
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visual timeline of our SilentWatch research journey through key milestones, presentations, and achievements.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Timeline milestones={milestones} />
          </div>
        </div>
      </section>

      {/* Milestone Detail Modal */}
      {selectedMilestone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMilestone(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedMilestone.title}</h3>
              <button
                onClick={() => setSelectedMilestone(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Description</h4>
                <p className="text-gray-300">{selectedMilestone.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Due Date</h4>
                  <p className="text-gray-300">{new Date(selectedMilestone.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Weightage</h4>
                  <p className="text-gray-300">{selectedMilestone.weightage}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Learning Outcomes</h4>
                <p className="text-gray-300">{selectedMilestone.learningOutcomes}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Deliverable Focus</h4>
                <p className="text-gray-300">{selectedMilestone.deliverableFocus}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Status</h4>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  selectedMilestone.status === 'completed' ? 'bg-green-900/50 text-green-300' :
                  selectedMilestone.status === 'upcoming' ? 'bg-blue-900/50 text-blue-300' :
                  'bg-orange-900/50 text-orange-300'
                }`}>
                  {selectedMilestone.status}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Follow Our Research Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay updated with our SilentWatch project progress and be the first to know about our latest findings and achievements in APT detection and mitigation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300"
            >
              View Presentations
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}