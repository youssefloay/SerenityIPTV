import React from 'react';
import { MessageCircle, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWhatsApp } from '../hooks/useWhatsApp';

export function FloatingButtons() {
  const { handleWhatsApp } = useWhatsApp();

  const handleTrialRequest = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to request a free trial of your IPTV service. Please provide me with test credentials."
    );
    window.open(`https://wa.me/+201557946464?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.button
        onClick={handleTrialRequest}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 group transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <PlayCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          Free Trial
        </span>
      </motion.button>

      <motion.button
        onClick={() => handleWhatsApp('inquiry')}
        className="bg-[#25D366] hover:bg-[#1fb959] text-white p-4 rounded-full shadow-lg flex items-center gap-2 group transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          WhatsApp
        </span>
      </motion.button>
    </div>
  );
}