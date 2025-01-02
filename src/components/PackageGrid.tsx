import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
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
            className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 border ${
              pkg.popular ? 'border-blue-500' : 'border-gray-100'
            }`}
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            {pkg.popular && (
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-2 font-medium">
                Most Popular
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{pkg.duration}</h3>
              <PriceDisplay egp={pkg.price.egp} usd={pkg.price.usd} />
              <ul className="mb-6 space-y-3">
                {pkg.features.map((feature) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-start text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                onClick={() => handleWhatsApp(pkg.duration)}
                className="w-full bg-[#25D366] hover:bg-[#1fb959] text-white py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </FadeIn>
      ))}
    </div>
  );
}