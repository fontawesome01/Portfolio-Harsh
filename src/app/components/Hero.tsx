'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  useTypewriter,
  Cursor,
} from 'react-simple-typewriter';
import Backgroundcircles from './Backgroundcircles';
import Image from 'next/image';

export default function Hero() {
  const [imageLoaded, setImageLoaded] =
    useState(false);

  const [text] = useTypewriter({
    words: [
      'I design. I develop. I deliver.',
      'Love coffee almost as much as semicolons ;)',
      'I love to code.',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-30">
        <div className="stars" />
        <div className="meteors" />
      </div>

      <Backgroundcircles />

      <div className="relative z-20 flex items-center justify-center mb-3">
        <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-black"></div>

        <Image
          className={`relative rounded-full object-cover transition-opacity duration-500 
          h-24 w-24 md:h-32 md:w-32 mx-auto ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          src="/harsh.png"
          width={160}
          height={160}
          alt="Profile"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <p className="uppercase text-xs md:text-lg text-cyan-800 mt-2 tracking-[5px] md:tracking-[10px]">
        Software Engineer
      </p>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-xl md:text-5xl font-bold">
          <span className="text-gray-300">
            Hi, I&apos;m{' '}
          </span>
          <span className="text-[#00FFFF]">
            Harsh Rajput
          </span>
        </h1>

        <h2
          className="mt-2 text-center mx-auto max-w-[80%] md:max-w-[500px]
          text-gray-400 text-sm md:text-xl wrap-break-words whitespace-normal leading-tight"
        >
          {text}
          <Cursor cursorColor="#00FFFF" />
        </h2>
      </motion.div>

      <motion.div
        className="relative z-10 mt-6 flex flex-row justify-center gap-3 flex-wrap"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
      >
        {[
          { name: 'About', link: '#about' },
          { name: 'Skills', link: '#skills' },
          { name: 'Projects', link: '#projects' },
          {
            name: 'Achievements',
            link: '#achievements',
          },
        ].map((btn, i) => (
          <motion.a
            key={i}
            href={btn.link}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="HeroButton"
          >
            {btn.name}
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="absolute top-0 flex flex-col items-center"
        style={{ right: '5%' }}
        animate={{
          rotate: [0, 5, -5, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          className="w-0.5 bg-linear-to-b from-gray-300 to-gray-500"
          style={{ height: '210px' }}
        />
        <Image
          src="/astronaut.png"
          width={160}
          height={160}
          alt="Astronaut hanging"
          className="w-24 md:w-40 object-contain -mt-8"
        />
      </motion.div>
    </section>
  );
}
