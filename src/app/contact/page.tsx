'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'silentwatch@sliit.lk',
      description: 'Send us an email for any inquiries',
      action: () => window.location.href = 'mailto:silentwatch@sliit.lk'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Faculty of Computing, SLIIT',
      description: 'New Kandy Road, Malabe, Sri Lanka',
      action: () => window.open('https://maps.google.com/?q=SLIIT+Malabe', '_blank')
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 11 754 4801',
      description: 'Call us during business hours',
      action: () => window.location.href = 'tel:+94117544801'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in Touch with Our Research Team"
        description="Have questions about our SilentWatch research project? Want to collaborate or learn more about our findings? We'd love to hear from you. Reach out to our research team for any inquiries or discussions."
        showButtons={false}
      />

      {/* Contact Form & Info */}
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
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always interested in hearing from fellow researchers, students, and professionals in the cybersecurity and machine learning communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-[#002B5B] mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8D9] focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8D9] focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8D9] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your inquiry or how we can help..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#00B8D9] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#0099CC] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>There was an error sending your message. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#002B5B] mb-6">Contact Information</h3>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of the following channels. We typically respond within 24-48 hours.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={info.action}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#00B8D9]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00B8D9]/20 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-[#00B8D9]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#002B5B] mb-1">
                        {info.title}
                      </h4>
                      <p className="text-[#00B8D9] font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#F5F5F5] rounded-lg p-6"
              >
                <h4 className="text-lg font-semibold text-[#002B5B] mb-3">
                  Response Time
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  We typically respond to inquiries within 24-48 hours during business days.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
                  <p><strong>Time Zone:</strong> Sri Lanka Standard Time (UTC+5:30)</p>
                </div>
              </motion.div>
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
                answer: "SilentWatch is a research project that combines memory forensics with LSTM networks to detect execution phases in cybersecurity scenarios. Our goal is to improve the accuracy and automation of memory analysis techniques."
              },
              {
                question: "How can I collaborate with your research team?",
                answer: "We welcome collaboration from researchers, students, and professionals in cybersecurity and machine learning. Please contact us through the form above or email us directly at silentwatch@sliit.lk."
              },
              {
                question: "Are your research findings publicly available?",
                answer: "Yes, we publish our findings in academic papers and presentations. You can access our documents and presentations through the respective sections of this website."
              },
              {
                question: "Can I use your research for my own projects?",
                answer: "We encourage the use of our research findings for academic and research purposes. Please cite our work appropriately and contact us if you have specific questions about implementation."
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
