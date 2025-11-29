import { motion } from 'framer-motion';

const TimelineCard = ({ item, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 200,
      }}
      viewport={{ once: true }}
      className={`flex items-center justify-between 
      mb-10 flex-row-reverse md:flex-row ${
        index % 2 === 0
          ? 'md:flex-row-reverse'
          : ''
      }`}
    >
      <div
        className="bg-[#0d1117] border border-cyan-500/30 rounded-2xl p-6 w-full
       md:w-[45%]  hover:shadow-[0_0_25px_#00ffff55] cursor-pointer
       hover:opacity-100  opacity-40  transition-opacity-100"
      >
        <h3 className="text-cyan-400 text-lg font-semibold mb-2">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm">
          {item.desc}
        </p>
        <p className="text-xs text-cyan-600 mt-2">
          {item.year}
        </p>
      </div>

      <div className="w-8 h-8 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center z-10 my-4 md:my-0">
        {item.icon}
      </div>

      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
};

export default TimelineCard;
