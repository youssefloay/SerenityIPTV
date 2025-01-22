import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { premiumChannels } from '../data/premiumChannels';

export function PremiumChannelCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {premiumChannels.map((channel, index) => (
            <motion.div
              key={channel.name}
              className="flex-[0_0_90%] min-w-0 sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_25%] pl-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 h-full border border-white/10"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              >
                <motion.div 
                  className="aspect-video bg-black/20 rounded-lg mb-6 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={channel.image} 
                    alt={channel.name}
                    className="w-full h-full object-cover transform transition-transform hover:scale-110"
                  />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {channel.name}
                </h3>
                <p className="text-blue-200 mb-4 text-sm">
                  {channel.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {channel.features.map((feature) => (
                    <motion.span 
                      key={feature}
                      className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
        <motion.button
          onClick={scrollPrev}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center shadow-lg pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={scrollNext}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center shadow-lg pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {premiumChannels.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-blue-400/30"
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
}