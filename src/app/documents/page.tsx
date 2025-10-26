'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import { Download, FileText, FileCheck, BookOpen, CheckSquare, HardDrive } from 'lucide-react';
import documentsData from '../../../data/documents.json';

export default function Documents() {
  const { documents } = documentsData;

  const getIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const icons: { [key: string]: any } = {
      FileText,
      FileCheck,
      BookOpen,
      CheckSquare
    };
    return icons[iconName] || FileText;
  };

  const handleDownload = (url: string, title: string) => {
    console.log(`Opening ${title} from ${url}`);
    
    // Handle Google Drive links
    if (url.includes('drive.google.com')) {
      // Convert Google Drive view links to direct download links
      let downloadUrl = url;
      
      if (url.includes('/file/d/')) {
        // Extract file ID from Google Drive URL
        const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
        if (fileIdMatch) {
          const fileId = fileIdMatch[1];
          downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        }
      } else if (url.includes('/document/d/')) {
        // Handle Google Docs links - convert to PDF export
        const docIdMatch = url.match(/\/document\/d\/([a-zA-Z0-9-_]+)/);
        if (docIdMatch) {
          const docId = docIdMatch[1];
          downloadUrl = `https://docs.google.com/document/d/${docId}/export?format=pdf`;
        }
      }
      
      // Open the download link in a new tab
      window.open(downloadUrl, '_blank', 'noopener,noreferrer');
    } else {
      // For other URLs, open directly
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Research Documents"
        subtitle="Project Documentation & Resources"
        description="Access all project documents, reports, and resources related to our SilentWatch research project. Download our latest findings, methodologies, and comprehensive documentation."
        showButtons={false}
      />

      {/* Documents Grid */}
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
              Available Documents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download our research documents, reports, and resources. All documents are available in PDF format for easy access and reference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((document, index) => (
              <motion.div
                key={document.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  title={document.title}
                  description={document.description}
                  icon={getIcon(document.icon)}
                  className="h-full"
                >
                  <div className="space-y-4">
                    {/* Document Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <HardDrive className="w-4 h-4" />
                        <span>{document.size}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{document.type}</span>
                      </div>
                    </div>

                    {/* Download Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDownload(document.downloadUrl, document.title)}
                      className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-all duration-300"
                    >
                      <Download className="w-5 h-5" />
                      <span>Open Document</span>
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Categories */}
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
              Document Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our documents are organized into different categories to help you find exactly what you&apos;re looking for.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Proposals</h3>
              <p className="text-gray-300 text-sm">
                Initial project proposals and research plans
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Reports</h3>
              <p className="text-gray-300 text-sm">
                Progress reports and research findings
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              <div className="w-12 h-12 bg-orange-900/50 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Documentation</h3>
              <p className="text-gray-300 text-sm">
                Technical documentation and guides
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                <CheckSquare className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Checklists</h3>
              <p className="text-gray-300 text-sm">
                Research methodology checklists
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Statistics */}
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
              Document Statistics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Overview of our research documentation and resources.
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
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{documents.length}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Total Documents</h3>
              <p className="text-gray-300">
                Comprehensive documentation covering all aspects of our research
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
                <span className="text-2xl font-bold text-white">PDF</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Format</h3>
              <p className="text-gray-300">
                All documents available in PDF format for easy access
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">MB Total</h3>
              <p className="text-gray-300">
                Comprehensive documentation with detailed research findings
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
              Need More Information?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can&apos;t find what you&apos;re looking for? Contact our research team for additional documentation or specific information.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300"
            >
              Contact Research Team
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
