'use client';
import { motion } from 'framer-motion';
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
  return (
    <section
      id="contact"
      className=" relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20"
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
        className="text-4xl font-bold mb-10 text-cyan-900 max-w-xl wrap-break-word"
      >
        {text}
        <Cursor cursorColor="#00ffff" />
      </motion.h2>

      <div className="space-y-4 text-lg">
        <motion.a
          href="tel:+911234567890"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 
        rounded-2xl
          transition-all duration-300"
        >
          <FaPhoneAlt
            size={20}
            className="text-cyan-400"
          />
          <span>+91 12345 67890</span>
        </motion.a>

        {/* Email */}
        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=harshrajput20030101@gmail.com&su=Let's%20Connect!&body=Hi%20Harsh,%0A%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect."
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 rounded-2xl transition-all duration-300"
        >
          <FaEnvelope
            size={20}
            className="text-cyan-400"
          />
          <span>
            harshrajput20030101@gmail.com
          </span>
        </motion.a>

        <motion.a
          href="https://www.google.com/maps?q=bijnor,+uttarpradesh"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 rounded-2xl transition-all duration-300"
        >
          <FaMapMarkerAlt
            size={20}
            className="text-cyan-400"
          />
          <span>
            Bijnor, Uttar Pradesh, India
          </span>
        </motion.a>
      </div>
      <form action=""></form>
    </section>
  );
}
