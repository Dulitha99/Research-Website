'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import { Presentation, Calendar, Clock, CheckCircle, Play, Download } from 'lucide-react';
import presentationsData from '../../../data/presentations.json';

export default function Presentations() {
  const { presentations } = presentationsData;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'upcoming':
        return <Clock className="w-5 h-5 text-[#00B8D9]" />;
      default:
        return <Calendar className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50';
      case 'upcoming':
        return 'border-[#00B8D9] bg-[#00B8D9]/5';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  const handleViewPresentation = (slidesUrl: string, title: string) => {
    console.log('Viewing presentation:', title, slidesUrl);
    alert(`Opening ${title}...`);
    // Open the Google Drive presentation in presentation mode
    const viewUrl = slidesUrl + '/present';
    window.open(viewUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadSlides = (slidesUrl: string, title: string) => {
    console.log('Downloading presentation:', title, slidesUrl);
    alert(`Downloading ${title}...`);
    // For Google Drive links, convert to download format
    const downloadUrl = slidesUrl + '/export/pptx';
    window.open(downloadUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Research Presentations"
        subtitle="Project Presentations & Findings"
        description="Explore our research presentations showcasing the progress and findings of the SilentWatch project. From initial proposals to final presentations, discover our journey through comprehensive slide decks."
        showButtons={false}
      />

      {/* Presentations Grid */}
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
              Research Presentations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research presentations document our journey from initial proposal to final findings. Each presentation showcases different aspects of our SilentWatch research project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {presentations.map((presentation, index) => (
              <div key={presentation.id}>
                <Card
                  title={presentation.title}
                  description={presentation.description}
                  icon={Presentation}
                  className={`h-full ${getStatusColor(presentation.status)}`}
                >
                  <div className="space-y-4">
                    {/* Presentation Info */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">
                          {new Date(presentation.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(presentation.status)}
                        <span className={`font-medium ${
                          presentation.status === 'completed' ? 'text-green-600' : 'text-[#00B8D9]'
                        }`}>
                          {presentation.status === 'completed' ? 'Completed' : 'Upcoming'}
                        </span>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-[#00B8D9]/10 text-[#00B8D9] rounded-full text-sm font-medium">
                        {presentation.type}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button
                        onClick={() => {
                          console.log('View button clicked!');
                          alert('View button clicked!');
                          handleViewPresentation(presentation.slidesUrl, presentation.title);
                        }}
                        className="flex-1 bg-[#00B8D9] text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#0099CC] transition-all duration-300 cursor-pointer"
                        type="button"
                        style={{ zIndex: 10, position: 'relative' }}
                      >
                        <Play className="w-4 h-4" />
                        <span>View</span>
                      </button>
                      
                      <button
                        onClick={() => {
                          console.log('Download button clicked!');
                          alert('Download button clicked!');
                          handleDownloadSlides(presentation.slidesUrl, presentation.title);
                        }}
                        className="flex-1 border-2 border-[#00B8D9] text-[#00B8D9] px-4 py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#00B8D9] hover:text-white transition-all duration-300 cursor-pointer"
                        type="button"
                        style={{ zIndex: 10, position: 'relative' }}
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentation Timeline */}
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
              Presentation Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our presentation schedule follows the research project timeline, with each presentation building upon previous findings.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {presentations.map((presentation, index) => (
                <motion.div
                  key={presentation.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center space-x-6 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00B8D9] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-[#002B5B]">
                        {presentation.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(presentation.status)}
                        <span className={`text-sm font-medium ${
                          presentation.status === 'completed' ? 'text-green-600' : 'text-[#00B8D9]'
                        }`}>
                          {presentation.status === 'completed' ? 'Completed' : 'Upcoming'}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{presentation.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(presentation.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Presentation className="w-4 h-4" />
                          <span>{presentation.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Stats */}
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
              Presentation Statistics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Overview of our research presentations and their impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#00B8D9] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{presentations.length}</span>
              </div>
              <h3 className="text-lg font-bold text-[#002B5B] mb-2">Total Presentations</h3>
              <p className="text-gray-600 text-sm">Comprehensive research coverage</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {presentations.filter(p => p.status === 'completed').length}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#002B5B] mb-2">Completed</h3>
              <p className="text-gray-600 text-sm">Presentations delivered</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {presentations.filter(p => p.status === 'upcoming').length}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#002B5B] mb-2">Upcoming</h3>
              <p className="text-gray-600 text-sm">Scheduled presentations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h3 className="text-lg font-bold text-[#002B5B] mb-2">Coverage</h3>
              <p className="text-gray-600 text-sm">Research milestones covered</p>
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
              Follow our research presentations and be the first to see our latest findings and developments in memory forensics and machine learning.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00B8D9] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Subscribe to Updates
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
