'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import { 
  BookOpen, 
  Target, 
  Lightbulb, 
  Settings, 
  Code, 
  Database, 
  Shield, 
  Brain, 
  Clock, 
  Zap,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Users,
  BarChart3
} from 'lucide-react';

export default function Domain() {
  const researchProblem = {
    title: 'Research Problem',
    description: 'Advanced Persistent Threats (APTs) are among the most formidable challenges in modern cybersecurity, characterized by stealth, persistence, and adaptability. Unlike traditional malware, APTs are multi-stage, goal-oriented intrusions that use sophisticated evasion techniques.',
    icon: AlertTriangle,
    sections: [
      {
        subtitle: 'Background and Significance',
        content: 'APTs use sophisticated evasion techniques to infiltrate, persist, and exfiltrate data without triggering conventional defenses. While contemporary systems employ signature-based detection, rule-based analytics, or heuristic scanning, these methods are inherently reactive, struggling to adapt to novel and evolving attacker tactics.'
      },
      {
        subtitle: 'Limitations of Existing Detection Systems',
        content: [
          'Stealth and Memory Residency: Many APTs operate fully in volatile memory, leveraging reflective DLL injection, process hollowing, and code obfuscation.',
          'Temporal Behavior and Delayed Execution: APTs frequently employ time-based evasion, executing commands after long idle periods or during specific system states.',
          'Adaptive and Polymorphic Attack Vectors: The use of AI-generated phishing emails, zero-day exploits, and context-aware payloads enables adversaries to bypass filters.'
        ]
      },
      {
        subtitle: 'Problem Definition',
        content: 'The key research challenge is to develop an intelligent, temporal, and modular defense framework that delivers real-time detection and mitigation of APT activities across the Reconnaissance, Delivery, and Execution phases of an attack, enabling proactive cybersecurity rather than reactive incident response.'
      }
    ]
  };

  const researchGap = {
    title: 'Research Gap',
    description: 'Existing cybersecurity solutions lack the capacity to dynamically adapt, learn continuously, and correlate temporal events across diverse data sources. SilentWatch addresses these limitations through a multi-phase architecture integrating machine learning, memory forensics, and live threat intelligence.',
    icon: Target,
    gaps: [
      {
        area: 'Real-Time Adaptability',
        limitation: 'Traditional anomaly detection systems require manual retraining when data patterns change.',
        novelty: 'Integrates Incremental Learning to automatically retrain models on-the-fly using feedback from real-world detections.'
      },
      {
        area: 'Temporal Awareness',
        limitation: 'Memory forensics tools perform static post-incident analysis without temporal context.',
        novelty: 'Employs LSTM-based Temporal Modeling over sequential forensic artifacts to detect evolving in-memory anomalies.'
      },
      {
        area: 'Delivery Vector Complexity',
        limitation: 'Existing phishing models rely on textual similarity and lack real-time performance.',
        novelty: 'Introduces Hybrid Deep Learning (Bi-LSTM + BERT) that fuses linguistic and structural email features for enhanced precision.'
      },
      {
        area: 'Holistic Correlation',
        limitation: 'Most tools analyze data in isolation (network, email, memory), lacking unified intelligence.',
        novelty: 'Centralized Threat Intelligence Repository aggregates module outputs for correlated, multi-vector analysis.'
      }
    ]
  };

  const researchObjectives = {
    title: 'Research Objectives',
    description: 'To design and implement a modular, machine-learning-based APT Detection and Mitigation Framework that provides real-time, temporal, and adaptive defense across the Reconnaissance, Delivery, and Execution stages of the APT lifecycle.',
    icon: Target,
    mainObjective: 'To design and implement a modular, machine-learning-based APT Detection and Mitigation Framework that provides real-time, temporal, and adaptive defense across the Reconnaissance, Delivery, and Execution stages of the APT lifecycle.',
    subObjectives: [
      {
        phase: 'Reconnaissance Detection',
        objectives: [
          'Develop an anomaly-based clustering system (DBSCAN/K-Means with incremental updates) to identify network scanning, probing, and enumeration behaviors.',
          'Optimize for early-stage threat identification while maintaining <2% false positives.'
        ]
      },
      {
        phase: 'Delivery Defense',
        objectives: [
          'Implement a Hybrid Deep Neural Model (Bi-directional LSTM + BERT) to detect spear-phishing, malicious attachments, and domain impersonation in real-time.',
          'Include a continuous learning pipeline that updates model parameters with new phishing samples.'
        ]
      },
      {
        phase: 'Execution Phase Defense',
        objectives: [
          'Develop a Memory Forensics + Temporal LSTM pipeline that monitors process timelines and execution patterns to detect memory-resident malware, process hollowing, and unusual parent-child relationships.',
          'Integrate results with automated alerting and mitigation modules for instant response.'
        ]
      }
    ]
  };

  const literatureSurvey = {
    title: 'Literature Survey',
    description: 'SilentWatch builds upon three key areas of cybersecurity research and introduces novel integrations across them.',
    icon: BookOpen,
    areas: [
      {
        area: 'Memory Forensics and Volatile Analysis',
        content: 'Research tools like Volatility, Redline, and Rekall are excellent for artifact extraction but are restricted to offline incident response. They lack mechanisms for real-time anomaly correlation or temporal modeling.'
      },
      {
        area: 'Machine Learning-Based Network Defense',
        content: 'Prior studies applied K-Means, SVM, and Random Forest to detect anomalies in network traffic; however, these treat events as independent and fail to learn from time-series correlations, leading to poor detection of slow, stealthy intrusions.'
      },
      {
        area: 'Deep Learning for Sequential Threat Analysis',
        content: 'Literature confirms the superiority of LSTM and GRU architectures for sequential event analysis in logs, DNS patterns, and network data. However, their application to real-time volatile memory analytics and correlated APT defense remains an underexplored research frontier — the gap SilentWatch directly addresses.'
      }
    ]
  };

  const methodology = {
    title: 'Methodology (Agile & Modular Framework)',
    description: 'An Agile Development Cycle ensures continuous improvement through short, iterative sprints. Each cycle includes model design, validation against benchmark datasets, and live testing using simulated attack scenarios.',
    icon: Settings,
    developmentApproach: 'An Agile Development Cycle ensures continuous improvement through short, iterative sprints. Each cycle includes model design, validation against benchmark datasets, and live testing using simulated attack scenarios.',
    architecture: {
      title: 'System Architecture Overview',
      description: 'The SilentWatch framework is designed as a three-layer modular architecture, ensuring scalability, data isolation, and real-time correlation.',
      layers: [
        {
          name: 'Input Layer',
          components: [
            'Data Sources: Network Traffic (Zeek, Tshark), Email Data (Phishing Samples, Headers, Attachments), Memory Artifacts (via Winpmem)',
            'Data Normalization: Converts heterogeneous data formats into structured, timestamped events suitable for temporal modeling.'
          ]
        },
        {
          name: 'Modules Layer',
          components: [
            'Reconnaissance Module: Detects scanning and probing using unsupervised clustering (DBSCAN/K-Means).',
            'Delivery Module: Identifies phishing attempts using a hybrid Bi-LSTM/BERT model trained on linguistic and structural features.',
            'Execution Module: Analyzes volatile memory dumps through Volatility and LSTM-based temporal correlation.',
            'Each module communicates via RESTful APIs to ensure independent scalability and fault isolation.'
          ]
        },
        {
          name: 'Centralized Threat Intelligence Repository (CTIR)',
          components: [
            'A Firebase Firestore-based repository aggregates detections, confidence scores, and correlated events.',
            'Serves as the decision engine, cross-verifying anomalies across modules before escalating alerts.'
          ]
        },
        {
          name: 'Output Layer',
          components: [
            'Unified Dashboard (React + Tailwind CSS): Displays live alerts, heatmaps, confusion matrices, and forensic timelines.',
            'Automated Blocking System: Triggers real-time responses — process termination, IP blocking, or dynamic firewall updates — based on CTIR threat confidence.'
          ]
        }
      ]
    },
    implementation: {
      preprocessing: [
        'Cleans, normalizes, and encodes datasets (network logs, email samples, memory dumps).',
        'Generates temporal embeddings for sequential models.',
        'Extracts high-level features (opcode sequences, packet inter-arrival times, entropy patterns, parent-child process hierarchies).'
      ],
      training: [
        'Each ML model is trained on CIC-MalMem-2022, NSL-KDD, and PhishTank datasets.',
        'Evaluation Metrics: Precision, Recall, F1-Score, ROC-AUC, and Detection Latency.',
        'The system is optimized for <1s response latency between detection and mitigation.'
      ],
      integration: [
        'Modules communicate through Flask-based APIs connected to Firestore.',
        'Integration tests validate full workflow — data ingestion → detection → alert generation → mitigation.',
        'Validation through simulated APT scenarios ensures robustness and low false-alarm rates.'
      ]
    }
  };

  const technologies = {
    title: 'Technologies Used',
    description: 'Cutting-edge technologies and frameworks for comprehensive APT detection and mitigation.',
    icon: Code,
    categories: [
      {
        category: 'Programming / Backend',
        tools: 'Python (Flask)',
        role: 'Core API integration, backend orchestration.'
      },
      {
        category: 'Deep Learning / ML',
        tools: 'TensorFlow, Keras, PyTorch',
        role: 'Model development and training (LSTM, Bi-LSTM, BERT).'
      },
      {
        category: 'Forensics / Security',
        tools: 'Volatility, Winpmem',
        role: 'Memory acquisition and forensic analysis.'
      },
      {
        category: 'Network Analysis',
        tools: 'Zeek, Tshark, Scapy, Scikit-learn',
        role: 'Traffic capture, anomaly-based clustering, and network event parsing.'
      },
      {
        category: 'Frontend / Visualization',
        tools: 'React.js, Tailwind CSS, Recharts, Framer Motion',
        role: 'Unified dashboard for visualization and analytics.'
      },
      {
        category: 'Data & Storage',
        tools: 'Firebase Firestore',
        role: 'Real-time central intelligence repository for correlated threat events.'
      }
    ]
  };

  const expectedOutcomes = {
    title: 'Expected Outcomes',
    description: 'The SilentWatch (R25-037) framework is expected to deliver quantifiable, technically measurable, and research-oriented outcomes across multiple cybersecurity dimensions.',
    icon: TrendingUp,
    outcomes: [
      {
        title: 'Real-Time Detection and Response',
        description: 'Achieve detection-to-action latency <1 second through optimized asynchronous communication between ML modules and the mitigation engine. Enable continuous streaming analysis of memory, email, and network data.',
        icon: Zap
      },
      {
        title: 'Enhanced Detection Accuracy',
        description: 'Target >90% precision and recall across all detection modules. Reduce false positives by >40% compared to static rule-based systems via incremental model adaptation.',
        icon: Target
      },
      {
        title: 'Temporal and Behavioral Insight',
        description: 'Provide time-aware threat visualization that traces events from reconnaissance to execution. Introduce temporal anomaly graphs correlating network behavior, phishing vectors, and in-memory anomalies.',
        icon: Clock
      },
      {
        title: 'Adaptive and Self-Learning Capability',
        description: 'Continuous model retraining based on real-time user feedback and threat evolution. Enable zero-downtime updates to maintain detection relevance against novel APT campaigns.',
        icon: Brain
      },
      {
        title: 'Unified Threat Intelligence Ecosystem',
        description: 'Correlate detections across heterogeneous sources (network, email, memory) to provide composite risk scoring. Maintain an intelligent knowledge base in Firestore for pattern reuse and future model training.',
        icon: Database
      },
      {
        title: 'Proactive Mitigation',
        description: 'Integrate an automated response engine capable of initiating immediate containment measures. Reduce mean-time-to-response (MTTR) significantly, moving from manual incident reaction to autonomous defense.',
        icon: Shield
      },
      {
        title: 'Research and Academic Contribution',
        description: 'Provide a novel framework integrating temporal LSTM analysis into memory forensics — an area previously unexplored in depth. Establish reproducible benchmarks and open datasets for future APT detection research.',
        icon: BookOpen
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Domain & Research Core"
        subtitle="Advanced Persistent Threat (APT) Defense"
        description="This section details the academic foundation, problem definition, objectives, and the modular machine-learning methodology underpinning the SilentWatch (R25-037) framework — an advanced, real-time detection and mitigation system for Advanced Persistent Threats (APTs)."
        showButtons={false}
      />

      {/* Research Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-[#00B8D9]/10 rounded-full flex items-center justify-center mr-6">
                <researchProblem.icon className="w-8 h-8 text-[#00B8D9]" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#002B5B] mb-4">{researchProblem.title}</h2>
                <p className="text-xl text-gray-600 max-w-4xl">{researchProblem.description}</p>
              </div>
            </div>

            <div className="space-y-8">
              {researchProblem.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-[#002B5B] mb-4">{section.subtitle}</h3>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-[#00B8D9] rounded-full mt-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">{section.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Gap Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-[#00B8D9]/10 rounded-full flex items-center justify-center mr-6">
                <researchGap.icon className="w-8 h-8 text-[#00B8D9]" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#002B5B] mb-4">{researchGap.title}</h2>
                <p className="text-xl text-gray-600 max-w-4xl">{researchGap.description}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#002B5B] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Gap Area</th>
                      <th className="px-6 py-4 text-left font-semibold">Existing Limitation</th>
                      <th className="px-6 py-4 text-left font-semibold">Novelty Introduced by SilentWatch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {researchGap.gaps.map((gap, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      >
                        <td className="px-6 py-4 font-semibold text-[#002B5B]">{gap.area}</td>
                        <td className="px-6 py-4 text-gray-700">{gap.limitation}</td>
                        <td className="px-6 py-4 text-gray-700">{gap.novelty}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Objectives Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-[#00B8D9]/10 rounded-full flex items-center justify-center mr-6">
                <researchObjectives.icon className="w-8 h-8 text-[#00B8D9]" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#002B5B] mb-4">{researchObjectives.title}</h2>
                <p className="text-xl text-gray-600 max-w-4xl">{researchObjectives.description}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00B8D9]/10 to-[#002B5B]/10 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-[#002B5B] mb-4">Main Objective</h3>
              <p className="text-lg text-gray-700">{researchObjectives.mainObjective}</p>
            </div>

            <div className="space-y-8">
              {researchObjectives.subObjectives.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-[#002B5B] mb-6">{phase.phase}</h3>
                  <ul className="space-y-4">
                    {phase.objectives.map((objective, objIndex) => (
                      <li key={objIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#00B8D9] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Literature Survey Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-[#00B8D9]/10 rounded-full flex items-center justify-center mr-6">
                <literatureSurvey.icon className="w-8 h-8 text-[#00B8D9]" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#002B5B] mb-4">{literatureSurvey.title}</h2>
                <p className="text-xl text-gray-600 max-w-4xl">{literatureSurvey.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {literatureSurvey.areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-[#002B5B] mb-4">{area.area}</h3>
                  <p className="text-gray-700">{area.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-[#00B8D9]/10 rounded-full flex items-center justify-center mr-6">
                <methodology.icon className="w-8 h-8 text-[#00B8D9]" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#002B5B] mb-4">{methodology.title}</h2>
                <p className="text-xl text-gray-600 max-w-4xl">{methodology.description}</p>
              </div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#00B8D9]/10 to-[#002B5B]/10 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#002B5B] mb-4">Development Approach</h3>
                <p className="text-lg text-gray-700">{methodology.developmentApproach}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#002B5B] mb-6">{methodology.architecture.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{methodology.architecture.description}</p>
                
                <div className="space-y-6">
                  {methodology.architecture.layers.map((layer, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="text-xl font-bold text-[#002B5B] mb-4">{layer.name}</h4>
                      <ul className="space-y-2">
                        {layer.components.map((component, compIndex) => (
                          <li key={compIndex} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-[#00B8D9] rounded-full mt-3 flex-shrink-0" />
                            <span className="text-gray-700">{component}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#002B5B] mb-6">Implementation Process</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-[#002B5B] mb-4">Preprocessing and Feature Engineering</h4>
                    <ul className="space-y-2">
                      {methodology.implementation.preprocessing.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-[#00B8D9] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-[#002B5B] mb-4">Model Training and Evaluation</h4>
                    <ul className="space-y-2">
                      {methodology.implementation.training.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-[#00B8D9] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-[#002B5B] mb-4">Integration and System Testing</h4>
                    <ul className="space-y-2">
                      {methodology.implementation.integration.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-[#00B8D9] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-[#00B8D9]/10 rounded-full flex items-center justify-center mr-6">
                <technologies.icon className="w-8 h-8 text-[#00B8D9]" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#002B5B] mb-4">{technologies.title}</h2>
                <p className="text-xl text-gray-600 max-w-4xl">{technologies.description}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#002B5B] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Category</th>
                      <th className="px-6 py-4 text-left font-semibold">Primary Tools/Libraries</th>
                      <th className="px-6 py-4 text-left font-semibold">Role in Project</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technologies.categories.map((tech, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      >
                        <td className="px-6 py-4 font-semibold text-[#002B5B]">{tech.category}</td>
                        <td className="px-6 py-4 text-gray-700">{tech.tools}</td>
                        <td className="px-6 py-4 text-gray-700">{tech.role}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expected Outcomes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-[#00B8D9]/10 rounded-full flex items-center justify-center mr-6">
                <expectedOutcomes.icon className="w-8 h-8 text-[#00B8D9]" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#002B5B] mb-4">{expectedOutcomes.title}</h2>
                <p className="text-xl text-gray-600 max-w-4xl">{expectedOutcomes.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {expectedOutcomes.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#00B8D9]/10 rounded-full flex items-center justify-center mr-4">
                      <outcome.icon className="w-6 h-6 text-[#00B8D9]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#002B5B]">{outcome.title}</h3>
                  </div>
                  <p className="text-gray-700">{outcome.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}