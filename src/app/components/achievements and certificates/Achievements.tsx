'use client';

import { motion } from 'framer-motion';
import MilestoneTimeline from './MilestoneTimeline';
import CertificateCard from './CertificateCard';
import useIsMobile from '@/app/components/useIsMobile';
import {
  FaTrophy,
  FaMedal,
  FaCertificate,
} from 'react-icons/fa';

const milestones = [
  {
    year: '2022',
    title: 'R&D Weather Prediction System',
    desc: 'Developed a machine learning model…',
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
    desc: 'Built an ML-based NIDS…',
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
    desc: 'Designed and deployed a portfolio…',
    icon: (
      <FaCertificate
        size={22}
        className="text-cyan-400 "
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
  // …
];

const AchievementsSection = () => {
  const ismobile = useIsMobile();
  return (
    <section
      id="achievements"
      className="min-h-screen w-full p-10 relative
      flex flex-col items-center bg-black"
    >
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-24 uppercase tracking-[20px] text-cyan-800"
      >
        achievements
      </motion.h3>

      <MilestoneTimeline
        milestones={milestones}
      />

      <div
        className={
          ismobile
            ? 'w-full flex space-x-5 mt-5  mb-20 overflow-x-scroll p-10 snap-x snap-mandatory'
            : 'w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
        }
      >
        {certificates.map((cert, i) => (
          <CertificateCard cert={cert} key={i} />
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
