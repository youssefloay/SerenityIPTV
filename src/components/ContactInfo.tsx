import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactInfo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <motion.a
        href="tel:+201557946464"
        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone className="w-4 h-4" />
        <span>+20 155 794 6464</span>
      </motion.a>
      <motion.a
        href="https://wa.me/+201557946464"
        className="flex items-center gap-1 text-[#25D366] hover:text-[#1fb959] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </motion.a>
    </div>
  );
}