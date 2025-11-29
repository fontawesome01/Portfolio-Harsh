'use client';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
const Icons = [
  {
    name: 'github',
    href: 'https://github.com/fontawesome01',
  },
  {
    name: 'x',
    href: 'https://www.x.com/',
  },
  {
    name: 'whatsapp',
    href: 'https://wa.me/918979724212?text=Hi%20Harsh,%20I%20saw%20your%20portfolio!',
  },
];
function Header() {
  return (
    <header
      className="sticky top-0 p-5 flex items-center
     justify-between max-w-7xl mx-auto z-20 xl:items-center
     bg-black
     "
    >
      <motion.div
        initial={{ x: -200, opacity: 0 }} // start off-screen to the left
        animate={{ x: 0, opacity: 1 }} // slide into place
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          delay: 0.3, // small delay for smoother load
        }}
        className="flex space-x-4"
      >
        {Icons.map((icon) => (
          <motion.div
            key={icon.name}
            whileHover={{
              scale: 1.3,
              rotate: 360, // shake effect
            }}
            transition={{
              duration: 0.5, // how long the shake lasts
              ease: 'easeInOut',
            }}
          >
            <SocialIcon
              network={icon.name}
              url={icon.href}
              fgColor="#fff"
              bgColor="transparent"
              style={{ height: 50, width: 50 }}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 15,
          delay: 0.2,
        }}
        whileHover={{
          scale: 1.3,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 10,
          },
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          url="#contact"
          fgColor="gray"
          bgColor="transparent"
        />
        <a href="#contact">
          <span
            className="uppercase hidden
         md:inline-flex text-sm text-gray-500"
          >
            get in touch
          </span>
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
