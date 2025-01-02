import React from 'react';
import { categories } from '../data/categories';

export default function ChannelCategories() {
  return (
    <section id="channels" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Premium Channels</h2>
        <p className="text-center text-gray-600 mb-12">
          Access thousands of channels across various categories
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src={category.icon} 
                alt={category.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-600 text-center mt-2">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}