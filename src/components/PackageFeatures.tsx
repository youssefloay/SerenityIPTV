import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

const features = [
  'No Contract Required',
  'Instant Activation',
  'Full HD & 4K Channels',
  '24/7 Customer Support',
  'Anti-Freeze Technology',
  'Regular Updates',
];

export function PackageFeatures() {
  return (
    <div className="mt-16 text-center">
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-8">All Plans Include</h3>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FadeIn key={feature} delay={index * 0.1}>
            <motion.div 
              className="flex items-center justify-center bg-white p-4 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Check className="w-5 h-5 text-green-500 mr-2" />
              </motion.div>
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}