'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
// Removed unused imports

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="SilentWatch Project (R25-037) - Advanced Persistent Threat Detection and Mitigation Framework"
        description="We welcome inquiries regarding the SilentWatch project (R25-037), its technical documentation, research methodologies, or potential integration opportunities. Get in touch with our research team for any questions, collaboration opportunities, or technical discussions."
        showButtons={false}
      />

      {/* General Contacts & Inquiries */}
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
              General Contacts & Inquiries
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              For general questions, technical support, or project feedback, please use the following contact information.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#002B5B] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Category</th>
                      <th className="px-6 py-4 text-left font-semibold">Detail</th>
                      <th className="px-6 py-4 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-[#002B5B]">Project E-mail (General)</td>
                      <td className="px-6 py-4">
                        <a 
                          href="mailto:silentwatch.apt.r25037@sliit.lk" 
                          className="text-[#00B8D9] hover:text-[#002B5B] font-medium"
                        >
                          silentwatch.apt.r25037@sliit.lk
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-600">Please use this address for all formal project inquiries.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-[#002B5B]">Academic Supervisor</td>
                      <td className="px-6 py-4">Dr. Harinda Fernando</td>
                      <td className="px-6 py-4 text-gray-600">Contact details available upon formal request.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-[#002B5B]">Co-supervisor</td>
                      <td className="px-6 py-4">Mr. Amila Senarathne</td>
                      <td className="px-6 py-4 text-gray-600">Contact details available upon formal request.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Team Member Contacts */}
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
              Development Team Member Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              For specific module questions, you can reach the respective development team members directly via their official emails.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#00B8D9] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Member Name</th>
                      <th className="px-6 py-4 text-left font-semibold">Student ID</th>
                      <th className="px-6 py-4 text-left font-semibold">E-mail Address</th>
                      <th className="px-6 py-4 text-left font-semibold">Module Specialization</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-[#002B5B]">H.P.D.D.M. Wickramasinghe</td>
                      <td className="px-6 py-4 text-gray-600">IT21825682</td>
                      <td className="px-6 py-4">
                        <a 
                          href="mailto:IT21825682@sliit.lk" 
                          className="text-[#00B8D9] hover:text-[#002B5B] font-medium"
                        >
                          IT21825682@sliit.lk
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-600">Execution Phase (Memory Forensics)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-[#002B5B]">D.L.K.L. Gangaboda</td>
                      <td className="px-6 py-4 text-gray-600">IT21812330</td>
                      <td className="px-6 py-4">
                        <a 
                          href="mailto:IT21812330@sliit.lk" 
                          className="text-[#00B8D9] hover:text-[#002B5B] font-medium"
                        >
                          IT21812330@sliit.lk
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-600">Delivery Vector (Phishing Detection)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-[#002B5B]">N.H.S. Chandrasekara</td>
                      <td className="px-6 py-4 text-gray-600">IT21812880</td>
                      <td className="px-6 py-4">
                        <a 
                          href="mailto:IT21812880@sliit.lk" 
                          className="text-[#00B8D9] hover:text-[#002B5B] font-medium"
                        >
                          IT21812880@sliit.lk
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-600">Reconnaissance (Clustering)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-[#002B5B]">I.D. Sellahewa</td>
                      <td className="px-6 py-4 text-gray-600">IT21825996</td>
                      <td className="px-6 py-4">
                        <a 
                          href="mailto:IT21825996@sliit.lk" 
                          className="text-[#00B8D9] hover:text-[#002B5B] font-medium"
                        >
                          IT21825996@sliit.lk
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-600">Exploitation (Reinforcement Learning)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6"
            >
              <p className="text-gray-700 text-center">
                <strong>Note:</strong> Direct contact emails for individual team members are available on the About Us page and listed above for convenience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* General E-mail Template */}
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
              General E-mail Template
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              If you would like to reach the development team directly, please use the following structure in your message to ensure a prompt and relevant response.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#002B5B] mb-2">Subject Line:</h3>
                  <p className="text-gray-700 font-mono bg-white p-3 rounded border">
                    SilentWatch Inquiry - [Brief Topic: e.g., Integration/Bug Report/Academic Question]
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#002B5B] mb-2">Email Template:</h3>
                  <div className="bg-white p-6 rounded border font-mono text-sm text-gray-700 whitespace-pre-line">
{`Dear SilentWatch Development Team,

My name is [Your Name], and I am reaching out regarding [Your Organization/Affiliation].

I am interested in [Briefly state your purpose, e.g., learning more about the LSTM module, discussing potential collaboration, or reporting an issue].

Specifically, I would appreciate information on:
[List specific questions or areas of interest here, if applicable.]

Thank you for your time and consideration. I look forward to your response.

Sincerely,
[Your Name]
[Your Contact Phone Number (Optional)]`}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our research project and how to get involved.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is the SilentWatch research project about?",
                answer: "SilentWatch (R25-037) is an Advanced Persistent Threat Detection and Mitigation Framework that combines memory forensics with LSTM networks to detect execution phases in cybersecurity scenarios. Our goal is to improve the accuracy and automation of memory analysis techniques across multiple attack phases."
              },
              {
                question: "How can I contact the research team?",
                answer: "You can reach us through our general project email (silentwatch.apt.r25037@sliit.lk) or contact individual team members directly for specific module questions. Use the email template provided above for best results."
              },
              {
                question: "Who should I contact for specific technical questions?",
                answer: "For module-specific questions, contact the respective team member: H.P.D.D.M. Wickramasinghe (Execution Phase), D.L.K.L. Gangaboda (Delivery Vector), N.H.S. Chandrasekara (Reconnaissance), or I.D. Sellahewa (Exploitation)."
              },
              {
                question: "Are your research findings publicly available?",
                answer: "Yes, we publish our findings in academic papers and presentations. You can access our documents and presentations through the respective sections of this website."
              },
              {
                question: "Can I collaborate with your research team?",
                answer: "We welcome collaboration from researchers, students, and professionals in cybersecurity and machine learning. Please use the general project email or contact individual team members based on your area of interest."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-[#002B5B] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
