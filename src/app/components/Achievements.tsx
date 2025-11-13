'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaTrophy,
  FaCertificate,
  FaMedal,
  FaLink,
} from 'react-icons/fa';

const AchievementsSection = () => {
  const milestones = [
    {
      year: '2022',
      title: 'R&D Weather Prediction System',
      desc: 'Developed a machine learning model under university R&D to forecast weather using real-time data.',
      icon: (
        <FaMedal
          size={22}
          className="text-cyan-400"
        />
      ),
    },
    {
      year: '2023',
      title: 'Network Intrusion Detection System',
      desc: 'Built an ML-based NIDS project using Python and Scikit-learn to detect network anomalies.',
      icon: (
        <FaTrophy
          size={22}
          className="text-cyan-400"
        />
      ),
    },
    {
      year: '2024',
      title: 'Portfolio Website Launch',
      desc: 'Designed and deployed a personal portfolio using Next.js, TailwindCSS, and Framer Motion.',
      icon: (
        <FaCertificate
          size={22}
          className="text-cyan-400"
        />
      ),
    },
  ];

  const certificates = [
    {
      title: 'AWS Certified Cloud Practitioner',
      from: 'Amazon Web Services',
      date: 'June 2024',
      link: 'https://www.credly.com/badges/aws-cert',
    },
    {
      title: 'Machine Learning with Python',
      from: 'Coursera (IBM)',
      date: 'May 2023',
      link: 'https://www.coursera.org/cert/ml-python',
    },
    {
      title: 'Smart India Hackathon Finalist',
      from: 'Govt. of India',
      date: 'Dec 2023',
      link: 'https://sih.gov.in/',
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen bg-[#0d1117] flex flex-col items-center justify-center py-20 px-6 overflow-hidden"
    >
      {/* ✨ Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-cyan-400 mb-16 uppercase tracking-[10px]"
      >
        Achievements & Certifications
      </motion.h2>

      {/* 🧭 Timeline */}
      <div className="relative w-full max-w-5xl mb-20">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-500/30" />

        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.2,
            }}
            viewport={{ once: true }}
            className={`flex items-center justify-between mb-10 ${
              i % 2 === 0
                ? 'flex-row-reverse'
                : ''
            }`}
          >
            {/* Card */}
            <div className="bg-gray-900 border border-cyan-500/40 rounded-2xl p-6 w-[45%] shadow-[0_0_20px_#00ffff22] hover:shadow-[0_0_30px_#00ffff55] transition-all">
              <h3 className="text-cyan-400 text-lg font-semibold mb-2">
                {m.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {m.desc}
              </p>
              <p className="text-xs text-cyan-600 mt-2">
                {m.year}
              </p>
            </div>

            {/* Dot */}
            <div className="w-8 h-8 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center z-10">
              {m.icon}
            </div>

            {/* Spacer for alignment */}
            <div className="w-[45%]" />
          </motion.div>
        ))}
      </div>

      {/* 🏆 Certifications Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: 'spring',
              stiffness: 200,
            }}
            className="bg-gray-900 border border-cyan-500/30 rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_20px_#00ffff22] hover:shadow-[0_0_30px_#00ffff55] transition-all"
          >
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-1">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm mb-1">
                {cert.from}
              </p>
              <p className="text-xs text-cyan-600 mb-3">
                {cert.date}
              </p>
            </div>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
            >
              <FaLink />
              View Credential
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
