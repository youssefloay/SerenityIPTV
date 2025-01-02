import React from 'react';
import { PremiumChannelGrid } from './PremiumChannelGrid';

export default function PremiumChannels() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Premium Networks</h2>
        <p className="text-center text-gray-600 mb-12">
          Watch your favorite sports/entertainment with the world's leading broadcasters
        </p>
        <PremiumChannelGrid />
      </div>
    </section>
  );
}