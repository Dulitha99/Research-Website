'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, CheckCircle, Clock, Award } from 'lucide-react';
import { Milestone } from '@/types/milestone';

interface TimelineProps {
  milestones: Milestone[];
}

const Timeline = ({ milestones }: TimelineProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'upcoming':
        return <Clock className="w-6 h-6 text-indigo-400" />;
      case 'ongoing':
        return <Clock className="w-6 h-6 text-orange-500" />;
      default:
        return <Calendar className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-900/50';
      case 'upcoming':
        return 'border-indigo-400 bg-indigo-900/50';
      case 'ongoing':
        return 'border-orange-500 bg-orange-900/50';
      default:
        return 'border-gray-600 bg-gray-800';
    }
  };

  return (
    <div className="relative" ref={ref}>
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-indigo-600" />

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-start space-x-8"
          >
            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
              className="relative z-10 flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full border-4 border-indigo-400 flex items-center justify-center shadow-lg"
            >
              {getStatusIcon(milestone.status)}
            </motion.div>

            {/* Content Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className={`flex-1 p-6 rounded-lg border-2 ${getStatusColor(milestone.status)} shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(milestone.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{milestone.marks} marks</span>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                  className={`mt-4 md:mt-0 px-4 py-2 rounded-full text-sm font-semibold ${
                    milestone.status === 'completed'
                      ? 'bg-green-900/50 text-green-300'
                      : milestone.status === 'ongoing'
                      ? 'bg-orange-900/50 text-orange-300'
                      : 'bg-indigo-900/50 text-indigo-300'
                  }`}
                >
                  {milestone.status === 'completed' ? 'Completed' : 
                   milestone.status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
                </motion.div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {milestone.description}
              </p>

              {/* Progress Bar for Completed Items */}
              {milestone.status === 'completed' && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
                  className="mt-4 h-2 bg-green-900/50 rounded-full overflow-hidden"
                >
                  <div className="h-full bg-green-500 rounded-full" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
