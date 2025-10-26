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
              General Contacts & Inquiries
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              For general questions, technical support, or project feedback, please use the following contact information.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Category</th>
                      <th className="px-6 py-4 text-left font-semibold">Detail</th>
                      <th className="px-6 py-4 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="hover:bg-gray-700">
                      <td className="px-6 py-4 font-medium text-white">Project E-mail (General)</td>
                      <td className="px-6 py-4">
                        <a 
                          href="mailto:info@silentwatch.me" 
                          className="text-indigo-400 hover:text-white font-medium"
                        >
                          info@silentwatch.me
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-300">Please use this address for all formal project inquiries.</td>
                    </tr>
                    <tr className="hover:bg-gray-700">
                      <td className="px-6 py-4 font-medium text-white">Academic Supervisor</td>
                      <td className="px-6 py-4">Dr. Harinda Fernando</td>
                      <td className="px-6 py-4 text-gray-300">Contact details available upon formal request.</td>
                    </tr>
                    <tr className="hover:bg-gray-700">
                      <td className="px-6 py-4 font-medium text-white">Co-supervisor</td>
                      <td className="px-6 py-4">Mr. Amila Senarathne</td>
                      <td className="px-6 py-4 text-gray-300">Contact details available upon formal request.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Team Member Contacts */}
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
              Development Team Member Contacts
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              For specific module questions, you can reach the respective development team members directly via their official emails.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Member Name</th>
                      <th className="px-6 py-4 text-left font-semibold">Student ID</th>
                      <th className="px-6 py-4 text-left font-semibold">E-mail Address</th>
                      <th className="px-6 py-4 text-left font-semibold">Module Specialization</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="hover:bg-gray-700">
                      <td className="px-6 py-4 font-medium text-white">H.P.D.D.M. Wickramasinghe</td>
                      <td className="px-6 py-4 text-gray-300">IT21825682</td>
                      <td className="px-6 py-4">
                        <a 
                          href="mailto:IT21825682@sliit.lk" 
                          className="text-indigo-400 hover:text-white font-medium"
                        >
                          IT21825682@sliit.lk
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-300">Execution Phase (Memory Forensics)</td>
                    </tr>
                    <tr className="hover:bg-gray-700">
                      <td className="px-6 py-4 font-medium text-white">D.L.K.L. Gangaboda</td>
                      <td className="px-6 py-4 text-gray-300">IT21812330</td>
                      <td className="px-6 py-4">
                        <a 
                          href="mailto:IT21812330@sliit.lk" 
                          className="text-indigo-400 hover:text-white font-medium"
                        >
                          IT21812330@sliit.lk
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-300">Delivery Vector (Phishing Detection)</td>
                    </tr>
                    <tr className="hover:bg-gray-700">
                      <td className="px-6 py-4 font-medium text-white">N.H.S. Chandrasekara</td>
                      <td className="px-6 py-4 text-gray-300">IT21812880</td>
                      <td className="px-6 py-4">
                        <a 
                          href="mailto:IT21812880@sliit.lk" 
                          className="text-indigo-400 hover:text-white font-medium"
                        >
                          IT21812880@sliit.lk
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-300">Reconnaissance (Clustering)</td>
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
              className="mt-8 bg-indigo-900/50 border border-indigo-600 rounded-lg p-6"
            >
              <p className="text-gray-300 text-center">
                <strong>Note:</strong> Direct contact emails for individual team members are available on the About Us page and listed above for convenience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* General E-mail Template */}
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
              General E-mail Template
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              If you would like to reach the development team directly, please use the following structure in your message to ensure a prompt and relevant response.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-700 rounded-xl p-8 shadow-lg border border-gray-600"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Subject Line:</h3>
                  <p className="text-gray-300 font-mono bg-gray-800 p-3 rounded border border-gray-600">
                    SilentWatch Inquiry - [Brief Topic: e.g., Integration/Bug Report/Academic Question]
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Template:</h3>
                  <div className="bg-gray-800 p-6 rounded border border-gray-600 font-mono text-sm text-gray-300 whitespace-pre-line">
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

    </div>
  );
}
