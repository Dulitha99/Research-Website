'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import { Mail, Linkedin, Github, Award, BookOpen, Users, Shield } from 'lucide-react';
import teamData from '../../../data/team.json';

export default function About() {
  const { team } = teamData;

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkedInClick = (name: string) => {
    // In a real application, this would open LinkedIn profiles
    console.log(`Opening LinkedIn profile for ${name}`);
    alert(`Opening LinkedIn profile for ${name}...`);
  };

  const handleGithubClick = (name: string) => {
    // In a real application, this would open GitHub profiles
    console.log(`Opening GitHub profile for ${name}`);
    alert(`Opening GitHub profile for ${name}...`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="About Our Research Team"
        subtitle="Meet the SilentWatch Research Team"
        description="Our diverse team of researchers, supervisors, and experts brings together decades of experience in cybersecurity, machine learning, and digital forensics to advance the field of memory forensics through innovative LSTM-based approaches."
        showButtons={false}
      />

      {/* Team Section */}
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
              Our Research Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated researchers and supervisors who are driving innovation in memory forensics and machine learning applications in cybersecurity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  title={member.name}
                  description={member.description}
                  className="h-full group"
                >
                  <div className="space-y-4">
                    {/* Member Photo Placeholder */}
                    <div className="w-24 h-24 bg-gradient-to-br from-[#00B8D9] to-[#002B5B] rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    {/* Role */}
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-[#00B8D9] mb-2">
                        {member.role}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {member.specialization}
                      </p>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleEmailClick(member.email)}
                        className="w-full flex items-center justify-center space-x-2 text-[#00B8D9] hover:text-[#002B5B] transition-colors duration-300"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm font-medium">Email</span>
                      </motion.button>

                      <div className="flex space-x-4 justify-center">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleLinkedInClick(member.name)}
                          className="p-2 text-[#00B8D9] hover:text-[#002B5B] transition-colors duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleGithubClick(member.name)}
                          className="p-2 text-[#00B8D9] hover:text-[#002B5B] transition-colors duration-300"
                        >
                          <Github className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
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
              Research Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team specializes in multiple domains that converge to create innovative solutions in memory forensics and cybersecurity.
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
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#002B5B] mb-4">Cybersecurity</h3>
              <p className="text-gray-600">
                Advanced threat detection, incident response, and security analysis techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#002B5B] mb-4">Digital Forensics</h3>
              <p className="text-gray-600">
                Memory analysis, evidence collection, and forensic investigation methodologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#002B5B] mb-4">Machine Learning</h3>
              <p className="text-gray-600">
                LSTM networks, deep learning, and AI applications in cybersecurity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Statistics */}
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
              Team Statistics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings together diverse expertise and experience to drive innovation in memory forensics research.
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
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#002B5B] mb-2">{team.length}</h3>
              <p className="text-gray-600 font-medium">Team Members</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#002B5B] mb-2">10+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#002B5B] mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Publications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#002B5B] mb-2">100%</h3>
              <p className="text-gray-600 font-medium">Dedication</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-20 bg-gradient-to-br from-[#002B5B] to-[#001A3D] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our Research Philosophy
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We believe in the power of interdisciplinary research to solve complex cybersecurity challenges. Our approach combines theoretical rigor with practical applications to create meaningful impact in the field of memory forensics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00B8D9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-gray-300 text-sm">
                  Pushing the boundaries of what's possible in memory forensics
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00B8D9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-300 text-sm">
                  Working together to achieve breakthrough results
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00B8D9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="text-gray-300 text-sm">
                  Maintaining the highest standards in research quality
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
