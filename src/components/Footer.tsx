import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactInfo } from './ContactInfo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Serenity IPTV</h3>
            <p className="text-gray-400">Premium Entertainment at Your Fingertips</p>
            <ContactInfo className="mt-4 text-white" />
          </div>
          <div className="flex space-x-6">
            <motion.a 
              href="#" 
              className="hover:text-blue-400"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-blue-400"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-blue-400"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Serenity IPTV. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: We are not responsible for the content provided through the IPTV service.
          </p>
        </div>
      </div>
    </footer>
  );
}