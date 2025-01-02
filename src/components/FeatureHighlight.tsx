import React from 'react';

export function FeatureHighlight() {
  return (
    <div className="mt-20 bg-blue-50 rounded-2xl p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Why Choose Our IPTV Service?</h3>
        <p className="text-gray-600 mb-6">
          We offer the most comprehensive IPTV solution with premium channels, 
          reliable streams, and exceptional customer support. Our service includes 
          regular updates, backup servers, and a 99.9% uptime guarantee.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-3xl text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-3xl text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Technical Support</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-3xl text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
        </div>
      </div>
    </div>
  );
}