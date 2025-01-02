import React from 'react';
import { PackageGrid } from './PackageGrid';
import { PackageFeatures } from './PackageFeatures';

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Choose Your Plan</h2>
        <p className="text-center text-gray-600 mb-12">
          Select the perfect package for your entertainment needs
        </p>
        <PackageGrid />
        <PackageFeatures />
      </div>
    </section>
  );
}