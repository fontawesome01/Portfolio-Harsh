'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () =>
      window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  github,
}: ProjectProps) => {
  const isMobile = useIsMobile();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{
        type: 'spring',
        stiffness: 200,
      }}
      className=" mt-10 bg-[#0d1117] border border-cyan-500/30 
      rounded-2xl shadow-lg overflow-hidden
       hover:shadow-[0_0_25px_#00ffff55] p-10  w-[275px]  
       md:w-[500px] xl:[900px]
    flex flex-col items-center space-y-5
     shrink-0 snap-center cursor-pointer
    hover:opacity-100 opacity-40 transition-opacity duration-200 "
    >
      <div className="relative w-full h-48">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full h-48 block group"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:opacity-90 transition-opacity duration-300"
          />
        </a>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3
          className="text-[15px] font-semibold text-cyan-400 
        md:text-xl"
        >
          {title}
        </h3>
        {!isMobile && (
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((item, i) => (
            <span
              key={i}
              className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* 🔗 GitHub Link */}
        <div className="mt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all"
          >
            <FaGithub size={20} />
            <span className="text-sm font-medium">
              View Code
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
