import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check } from 'lucide-react';
import { packages } from '../data/packages';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { PriceDisplay } from './PriceDisplay';
import { FadeIn } from './animations/FadeIn';

export function PackageGrid() {
  const { handleWhatsApp } = useWhatsApp();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {packages.map((pkg, index) => (
        <FadeIn delay={index * 0.1} key={pkg.duration}>
          <motion.div
            className={`relative bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 border-2 ${
              pkg.popular ? 'border-blue-500' : 'border-transparent'
            }`}
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            {pkg.popular && (
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </span>
              </div>
            )}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {pkg.duration}
              </h3>
              <PriceDisplay egp={pkg.price.egp} usd={pkg.price.usd} />
              <ul className="mb-8 space-y-4">
                {pkg.features.map((feature) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-start text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="mr-3 text-blue-500">
                      <Check className="w-5 h-5" />
                    </span>
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                onClick={() => handleWhatsApp(pkg.duration)}
                className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1fb959] hover:to-[#0d6d63] text-white py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 font-medium text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-6 h-6" />
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </FadeIn>
      ))}
    </div>
  );
}