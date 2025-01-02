import React from 'react';
import { motion } from 'framer-motion';
import { premiumChannels } from '../data/premiumChannels';
import { FadeIn } from './animations/FadeIn';

export function PremiumChannelGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {premiumChannels.map((channel, index) => (
        <FadeIn key={channel.name} delay={index * 0.1}>
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.03,
              y: -5
            }}
          >
            <motion.div 
              className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={channel.image} 
                alt={channel.name}
                className="w-full h-full object-cover transform transition-transform hover:scale-110"
              />
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">{channel.name}</h3>
            <p className="text-sm text-gray-600">{channel.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {channel.features.map((feature) => (
                <motion.span 
                  key={feature}
                  className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </FadeIn>
      ))}
    </div>
  );
}