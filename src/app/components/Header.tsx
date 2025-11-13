'use client';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header
      className="sticky top-0 p-5 flex items-center
     justify-between max-w-7xl mx-auto z-20 xl:items-center
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
        {/* GitHub Icon */}
        <motion.div
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
            network="github"
            url="https://github.com/"
            fgColor="#fff"
            bgColor="transparent"
            style={{ height: 50, width: 50 }}
          />
        </motion.div>
        {/* YouTube Icon */}
        <motion.div
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
            network="x"
            url="https://github.com/"
            fgColor="#fff"
            bgColor="transparent"
            style={{ height: 50, width: 50 }}
          />
        </motion.div>

        <motion.div
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
            network="whatsapp"
            url="https://wa.me/918979724212?text=Hi%20Harsh,%20I%20saw%20your%20portfolio!
"
            fgColor="#fff"
            bgColor="transparent"
            style={{ height: 50, width: 50 }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 80, // entrance stiffness
          damping: 15, // entrance damping
          delay: 0.2,
        }}
        // 👇 Hover animation
        whileHover={{
          // rotate: 360, // rotate slightly
          scale: 1.3, // small scale up
          transition: {
            type: 'spring',
            stiffness: 300, // different stiffness for hover
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
