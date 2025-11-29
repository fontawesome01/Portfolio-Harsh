import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';

const CertificateCard = ({ cert }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{
        type: 'spring',
        stiffness: 200,
      }}
      className="mt-10 bg-[#0d1117] border border-cyan-500/30
      rounded-2xl shadow-lg overflow-hidden
       hover:shadow-[0_0_25px_#00ffff55] p-10  w-[275px]
       md:w-[500px] xl:[900px]
    flex flex-col items-center space-y-5
     shrink-0 snap-center cursor-pointer
    hover:opacity-100 opacity-40 transition-opacity duration-200 "
    >
      <div>
        <h3 className="text-lg font-semibold text-cyan-400 mb-1">
          {cert.title}
        </h3>
        <p className="text-gray-400 text-sm mb-1">
          {cert.from}
        </p>
        <p className="text-xs text-cyan-600 mb-3">
          {cert.date}
        </p>
      </div>

      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
      >
        <FaLink />
        View Credential
      </a>
    </motion.div>
  );
};

export default CertificateCard;
