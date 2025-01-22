import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactInfo } from './ContactInfo';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Serenity IPTV
            </h3>
            <p className="text-blue-200 mb-6 text-lg">
              Premium Entertainment at Your Fingertips
            </p>
            <ContactInfo className="text-white" />
          </div>
          <div className="flex justify-center md:justify-end space-x-8">
            {[
              { icon: Facebook, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Twitter, href: '#' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-blue-300 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800/50 text-center">
          <p className="text-blue-200">
            © {new Date().getFullYear()} Serenity IPTV. All rights reserved.
          </p>
          <p className="mt-2 text-blue-300/80 text-sm">
            Disclaimer: We are not responsible for the content provided through the IPTV service.
          </p>
        </div>
      </div>
    </footer>
  );
}