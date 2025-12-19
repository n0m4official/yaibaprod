"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function TeamPanel({ member, onClose }) {
  return (
    <AnimatePresence>
      {member && (
        <>
          {/* Dark background behind the panel */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Side panel */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-black border-l border-white/10 p-6 z-50 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="text-gray-300 hover:text-white text-xl mb-4"
            >
              ✕
            </button>

            {/* Image */}
            <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 border border-white/10">
              <img 
                src={member.img}
                alt={member.name}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Name & Role */}
            <h2 className="text-2xl font-bold">{member.name}</h2>
            <p className="text-gray-400 mb-6">{member.role}</p>

            {/* Bio */}
            <p className="leading-relaxed opacity-80 whitespace-pre-line">
              {member.bio}
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
