import React from 'react';
import { FeatureGrid } from './FeatureGrid';
import { FeatureHighlight } from './FeatureHighlight';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Premium Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience entertainment like never before with our cutting-edge features
          </p>
        </div>
        <FeatureGrid />
        <FeatureHighlight />
      </div>
    </section>
  );
}