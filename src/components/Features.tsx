import React from 'react';
import { FeatureGrid } from './FeatureGrid';
import { FeatureHighlight } from './FeatureHighlight';

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Premium Features</h2>
        <FeatureGrid />
        <FeatureHighlight />
      </div>
    </section>
  );
}