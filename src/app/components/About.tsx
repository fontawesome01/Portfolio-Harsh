'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function About() {
  return (
    <section
      className="flex flex-col relative h-screen bg-black text-center md:text-left
                 md:flex-row  mx-auto justify-evenly items-center"
    >
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-24 uppercase tracking-[20px] text-cyan-800"
      >
        About
      </motion.h3>

      <div
        className="flex flex-col md:flex-row items-center 
      justify-center gap-10 mt-20 md:mt-0"
      >
        {/* Image */}
        <Image
          priority
          src="/harsh.png"
          width={300}
          height={300}
          alt="Harsh Rajput"
          className="rounded-full md:rounded-2xl object-cover 
                     transition-all duration-500 shadow-lg
                     w-40 h-40 md:w-72 md:h-72 lg:w-80 lg:h-96 border-4 border-cyan-900"
        />

        {/* Text content */}
        <div className="max-w-md md:max-w-lg lg:max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed px-4">
          <p>
            Hi, I’m{' '}
            <span className="text-cyan-900  font-bold">
              Harsh Rajput
            </span>{' '}
            — a passionate Software and Web
            Developer who loves solving problems
            and turning ideas into real, working
            systems. I build everything from
            modern web apps using
            <span className="text-cyan-900 ">
              {' '}
              React
            </span>
            ,{' '}
            <span className="text-cyan-900 ">
              Next.js
            </span>
            , and{' '}
            <span className="text-cyan-900 ">
              Tailwind CSS
            </span>
            , to efficient software solutions in{' '}
            <span className="text-cyan-900 ">
              C++
            </span>{' '}
            and{' '}
            <span className="text-cyan-900 ">
              Python
            </span>
            . I’m always exploring new
            technologies — from system design and
            backend logic to UI/UX that feels
            smooth and intuitive. My goal is
            simple: write clean, scalable code and
            build products that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
