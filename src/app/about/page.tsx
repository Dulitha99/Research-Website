'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Award, 
  BookOpen, 
  Users, 
  Shield, 
  Brain, 
  Target, 
  Zap,
  TrendingUp,
  CheckCircle,
  GraduationCap,
  Building
} from 'lucide-react';
import teamData from '../../../data/team.json';

export default function About() {
  const { team } = teamData;

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkedInClick = (name: string) => {
    console.log(`Opening LinkedIn profile for ${name}...`);
    alert(`Opening LinkedIn profile for ${name}...`);
  };

  const handleGithubClick = (name: string) => {
    console.log(`Opening GitHub profile for ${name}...`);
    alert(`Opening GitHub profile for ${name}...`);
  };

  const supervisors = team.filter(member => member.role === 'Supervisor' || member.role === 'Co-Supervisor');
  const developmentTeam = team.filter(member => member.role === 'Research & Development Team');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="About Us: The SilentWatch Development Team"
        subtitle="Advanced Persistent Threat (APT) Detection and Mitigation Framework"
        description="The SilentWatch research initiative (Project ID: R25-037) represents a pioneering effort in developing an Advanced Persistent Threat (APT) Detection and Mitigation Framework through the integration of modern machine learning and digital forensics. The project was conceptualized and developed by a dedicated team of undergraduate researchers under expert academic supervision at the Sri Lanka Institute of Information Technology (SLIIT)."
        showButtons={false}
      />

      {/* Project Supervisors Section */}
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
              Project Supervisors
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The SilentWatch project was conducted under the expert guidance of faculty members specializing in cybersecurity, machine learning, and applied artificial intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supervisors.map((supervisor, index) => (
              <motion.div
                key={supervisor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  title={supervisor.name}
                  description={supervisor.description}
                  className="h-full group"
                >
                  <div className="space-y-4">
                    {/* Supervisor Photo Placeholder */}
                    <div className="w-24 h-24 bg-gradient-to-br from-[#00B8D9] to-[#002B5B] rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                      {supervisor.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    {/* Role */}
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-[#00B8D9] mb-2">
                        {supervisor.role}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {supervisor.specialization}
                      </p>
                      <p className="text-sm text-[#002B5B] font-medium">
                        {supervisor.institution}
                      </p>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleEmailClick(supervisor.email)}
                        className="w-full flex items-center justify-center space-x-2 text-[#00B8D9] hover:text-[#002B5B] transition-colors duration-300"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm font-medium">Email</span>
                      </motion.button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development Team Section */}
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
              Research & Development Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Each member of the development team contributed to a core module of the SilentWatch framework, addressing a specific stage in the APT lifecycle — Reconnaissance, Delivery, and Execution. Together, the team's work resulted in a fully integrated, adaptive, and intelligent defense system capable of real-time detection and response.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {developmentTeam.map((member, index) => (
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
                    {/* Member Photo */}
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-[#00B8D9]">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#00B8D9] to-[#002B5B] rounded-full flex items-center justify-center text-white text-2xl font-bold">${member.name.split(' ').map(n => n[0]).join('')}</div>`;
                          }
                        }}
                      />
                    </div>

                    {/* Student ID and Role */}
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-[#00B8D9] mb-2">
                        {member.studentId}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {member.specialization}
                      </p>
                      {member.achievement && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                          <p className="text-sm text-green-800 font-medium">
                            Achievement: {member.achievement}
                          </p>
                        </div>
                      )}
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

      {/* Individual Specializations Section */}
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
              Individual Specializations and Contributions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Each team member focused on a specific aspect of the SilentWatch framework, contributing their expertise to create a comprehensive APT detection and mitigation system.
            </p>
          </motion.div>

          <div className="space-y-12">
            {developmentTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] rounded-xl p-8 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 rounded-full mx-auto lg:mx-0 overflow-hidden border-4 border-[#00B8D9] mb-4">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#00B8D9] to-[#002B5B] rounded-full flex items-center justify-center text-white text-3xl font-bold">${member.name.split(' ').map(n => n[0]).join('')}</div>`;
                          }
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#002B5B] mb-2">{member.name}</h3>
                    <p className="text-lg text-[#00B8D9] font-semibold mb-2">{member.studentId}</p>
                    <p className="text-gray-600">{member.specialization}</p>
                  </div>

                  <div className="lg:col-span-2">
                    <h4 className="text-xl font-bold text-[#002B5B] mb-4">Contribution & Achievement</h4>
                    <p className="text-gray-700 mb-4">{member.description}</p>
                    {member.achievement && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="font-semibold text-green-800">Key Result:</span>
                        </div>
                        <p className="text-green-700 font-medium">{member.achievement}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Achievements Section */}
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
              Project Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The SilentWatch project has achieved significant milestones in APT detection and mitigation, demonstrating the effectiveness of our integrated approach to cybersecurity defense.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#00B8D9] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#002B5B] mb-4">End-to-End APT Defense</h3>
              <p className="text-gray-600">
                Designed and implemented a unified, modular defense architecture that effectively covers multiple stages of the APT lifecycle — Reconnaissance, Delivery, and Execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#002B5B] mb-4">High-Accuracy ML Models</h3>
              <p className="text-gray-600">
                Each module was independently trained and validated using benchmark datasets such as CIC-MalMem-2022 and NSL-KDD, demonstrating consistently high performance across classification and anomaly detection tasks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#002B5B] mb-4">Real-Time Detection</h3>
              <p className="text-gray-600">
                The system achieves sub-second latency from detection to alert generation through a Flask-based backend integrated with Firebase Firestore for centralized intelligence management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#002B5B] mb-4">Scalable Framework</h3>
              <p className="text-gray-600">
                The architecture supports seamless integration of new modules and learning models, ensuring long-term extensibility and adaptability against evolving threat landscapes.
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
              SilentWatch Team Statistics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team brings together diverse expertise and experience to drive innovation in APT detection and mitigation research.
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
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#002B5B] mb-2">3</h3>
              <p className="text-gray-600 font-medium">Undergraduate Researchers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#002B5B] mb-2">2</h3>
              <p className="text-gray-600 font-medium">Academic Supervisors</p>
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
              <h3 className="text-3xl font-bold text-[#002B5B] mb-2">R25-037</h3>
              <p className="text-gray-600 font-medium">Project ID</p>
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
              SilentWatch Research Philosophy
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We believe in the power of interdisciplinary research to solve complex cybersecurity challenges. Our approach combines theoretical rigor with practical applications to create meaningful impact in the field of APT detection and mitigation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00B8D9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-[#00B8D9]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-gray-300 text-sm">
                  Pushing the boundaries of APT detection through advanced machine learning
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00B8D9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#00B8D9]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-300 text-sm">
                  Working together to achieve breakthrough results in cybersecurity
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00B8D9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#00B8D9]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="text-gray-300 text-sm">
                  Maintaining the highest standards in research quality and results
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}