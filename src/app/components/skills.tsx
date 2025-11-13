'use client';
import React, {
  useState,
  useEffect,
} from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si';
import Masonry from 'react-masonry-css';

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

const skills = [
  {
    icon: <SiReact size={40} color="#61DBFB" />,
    name: 'React',
    level: 'Advanced',
    usage: 'Portfolio, Projects',
  },
  {
    icon: <SiNextdotjs size={40} color="#fff" />,
    name: 'Next.js',
    level: 'Intermediate',
    usage: 'Portfolio Frontend',
  },
  {
    icon: (
      <SiTailwindcss size={40} color="#38BDF8" />
    ),
    name: 'Tailwind CSS',
    level: 'Advanced',
    usage: 'Styling in all projects',
  },
  {
    icon: <SiPython size={40} color="#3776AB" />,
    name: 'Python',
    level: 'Intermediate',
    usage: 'ML, NIDS Project',
  },
  {
    icon: (
      <SiCplusplus size={40} color="#00599C" />
    ),
    name: 'C++',
    level: 'Advanced',
    usage: 'DSA, Competitive Programming',
  },
  {
    icon: <SiHtml5 size={40} color="#E34F26" />,
    name: 'HTML5',
    level: 'Advanced',
    usage: 'Frontend Design',
  },
  {
    icon: <SiCss3 size={40} color="#1572B6" />,
    name: 'CSS3',
    level: 'Advanced',
    usage: 'Styling and Animations',
  },
  {
    icon: (
      <SiJavascript size={40} color="#F7DF1E" />
    ),
    name: 'JavaScript',
    level: 'Intermediate',
    usage: 'Frontend Scripting',
  },
  {
    icon: (
      <SiTypescript size={40} color="#3178C6" />
    ),
    name: 'TypeScript',
    level: 'Beginner',
    usage: 'Portfolio Project',
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] =
    useState<any>(null);
  const isMobile = useIsMobile();

  const breakpoints = {
    default: 4,
    1200: 3,
    800: 2,
    500: 1,
  };

  useEffect(() => {
    const id = requestAnimationFrame(() =>
      setSelectedSkill(null)
    );
    window.scrollTo(0, 0);
    return () => cancelAnimationFrame(id);
  }, [isMobile]);

  return (
    <section
      id="skills"
      key={isMobile ? 'mobile' : 'desktop'}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-visible"
    >
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        // style={{
        //   textShadow:
        //     '0 0 40px #00FFFF, 0 0 40px #00FFFF, 0 0 40px #00FFFF',
        // }}
        className="absolute top-24 uppercase tracking-[20px] text-cyan-800"
      >
        My Skills
      </motion.h3>

      {!isMobile && (
        <div className="flex w-full max-w-6xl justify-center items-start gap-12 mt-32 overflow-visible">
          <Masonry
            breakpointCols={breakpoints}
            className="flex justify-center gap-6"
            columnClassName="flex flex-col gap-6"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() =>
                  setSelectedSkill(skill)
                }
                onMouseLeave={() =>
                  setSelectedSkill(null)
                }
                className="p-4 bg-gray-800 rounded-full 
                cursor-pointer hover:shadow-[0_0_15px_#00ffff99] 
                transition-all duration-300"
              >
                {skill.icon}
              </motion.div>
            ))}
          </Masonry>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: selectedSkill ? 1 : 0,
              x: selectedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.3 }}
            className="w-64 bg-black/60 border border-cyan-500/40 rounded-2xl p-6 text-gray-200 shadow-[0_0_30px_#00ffff33] h-fit"
          >
            {selectedSkill ? (
              <>
                <h4 className="text-2xl font-semibold text-cyan-400 mb-3">
                  {selectedSkill.name}
                </h4>
                <p>
                  <span className="text-cyan-400 font-semibold">
                    Level:
                  </span>{' '}
                  {selectedSkill.level}
                </p>
                <p>
                  <span className="text-cyan-400 font-semibold">
                    Used in:
                  </span>{' '}
                  {selectedSkill.usage}
                </p>
              </>
            ) : (
              <p className="text-gray-500 italic">
                Hover over a skill to see details
              </p>
            )}
          </motion.div>
        </div>
      )}

      {isMobile && (
        <div className="relative mt-32 w-full flex justify-center overflow-hidden h-[65vh]">
          <motion.div
            key="scroll-loop"
            className="flex flex-col items-center gap-8"
            animate={{ y: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              duration: 25, // slower speed
              ease: 'linear',
            }}
          >
            {[...skills, ...skills].map(
              (skill, i) => (
                <div
                  key={i}
                  onClick={() =>
                    setSelectedSkill(skill)
                  }
                  className="p-4 bg-gray-800 rounded-full shadow-[0_0_10px_#00ffff55] cursor-pointer hover:scale-110 transition-all"
                >
                  {skill.icon}
                </div>
              )
            )}
          </motion.div>

          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-56 bg-black/80 border border-cyan-500/40 text-gray-200 p-4 rounded-xl shadow-[0_0_20px_#00ffff55] z-10"
            >
              <h4 className="text-cyan-400 text-xl font-semibold mb-2">
                {selectedSkill.name}
              </h4>
              <p>
                <span className="text-cyan-400 font-semibold">
                  Level:
                </span>{' '}
                {selectedSkill.level}
              </p>
              <p>
                <span className="text-cyan-400 font-semibold">
                  Used in:
                </span>{' '}
                {selectedSkill.usage}
              </p>
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
}
