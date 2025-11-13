'use client';
import React from 'react';
import ProjectCard from './projectcard';
import { motion } from 'framer-motion';
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Network Intrusion Detection System',
      description:
        'A machine learning-based NIDS that detects suspicious traffic in real-time using packet features and anomaly detection models.',
      image: '/nids.png',
      tech: [
        'Python',
        'Scikit-Learn',
        'Flask',
        'React',
      ],
      github:
        'https://github.com/yourusername/nids-project',
    },
    {
      title: 'Portfolio Website',
      description:
        'My personal portfolio built with Next.js, Tailwind, and Framer Motion — fully responsive with smooth animations.',
      image: '/portfolio.png',
      tech: [
        'Next.js',
        'Tailwind CSS',
        'Framer Motion',
      ],
      github:
        'https://github.com/yourusername/portfolio',
    },
    {
      title: 'Weather Prediction System',
      description:
        'An R&D project integrating data pipelines and ML models to forecast short-term weather patterns.',
      image: '/weather.png',
      tech: [
        'Python',
        'TensorFlow',
        'FastAPI',
        'MongoDB',
      ],
      github:
        'https://github.com/yourusername/weather-predictor',
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen flex relative overflow-hidden flex-col text-left
    md:flex-row max-w-full px-10 justify-evenly mx auto items-center"
    >
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-24 uppercase 
              tracking-[20px] text-cyan-800"
      >
        projects
      </motion.h3>

      <div
        className="w-full flex space-x-5 
      overflow-x-scroll p-10 snap-x snap-mandatory"
      >
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
