'use client';
import { motion } from 'framer-motion';
import { Env } from '@/utils/env';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import {
  useTypewriter,
  Cursor,
} from 'react-simple-typewriter';

export default function Contact() {
  const [text] = useTypewriter({
    words: [
      'Lets build something impactful together.',
      'Got an idea? Let’s turn it into code.',
      'Ping me — I’m always open to new projects and challenges.',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const icons = {
    FaPhoneAlt: FaPhoneAlt,
    FaEnvelope: FaEnvelope,
    FaMapMarkerAlt: FaMapMarkerAlt,
  } as const;
  type IconKey = keyof typeof icons;

  const contacts: {
    type: string;
    value: string;
    symbol: IconKey;
  }[] = [
    {
      type: `tel:${Env.phone}`,
      value: Env.phone,
      symbol: 'FaPhoneAlt',
    },
    {
      type: `mailto:harshrajput20030101@gmail.com`,
      value: 'harshrajput20030101@gmail.com',
      symbol: 'FaEnvelope',
    },
    {
      type: 'https://www.google.com/maps?q=bijnor,+uttarpradesh',
      value: 'Bijnor, Uttar Pradesh, India',
      symbol: 'FaMapMarkerAlt',
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col
      items-center justify-center bg-black text-white px-6 py-20"
    >
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-24 uppercase tracking-[20px] text-cyan-800"
      >
        contact me
      </motion.h3>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-cyan-900 max-w-xl"
      >
        {text}
        <Cursor cursorColor="#00ffff" />
      </motion.h2>

      <div className="space-y-4 text-lg">
        {contacts.map((contact) => {
          const Icon = icons[contact.symbol];
          return (
            <motion.a
              key={contact.type}
              href={contact.type}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 rounded-2xl transition-all duration-300"
            >
              <Icon
                size={20}
                className="text-cyan-400"
              />{' '}
              <span>{contact.value}</span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
