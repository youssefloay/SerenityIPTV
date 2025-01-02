import React from 'react';
import { Tv, PlayCircle, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: Tv,
    label: '20000+ Channels',
    description: 'Live & On-Demand',
  },
  {
    icon: PlayCircle,
    label: 'HD & 4K Quality',
    description: 'Crystal Clear Streaming',
  },
  {
    icon: Wifi,
    label: '99.9% Uptime',
    description: '24/7 Support',
  },
];

export function HeroStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <stat.icon className="h-12 w-12 mb-4" />
          </motion.div>
          <h3 className="font-semibold text-lg text-center">{stat.label}</h3>
          <p className="text-blue-100 text-center">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  );
}