import React from 'react';

interface PriceDisplayProps {
  egp: string;
  usd: number;
}

export function PriceDisplay({ egp, usd }: PriceDisplayProps) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-2">
        <p className="text-3xl font-bold text-blue-600">{egp}</p>
        <p className="text-gray-500 text-sm">EGP</p>
      </div>
      <div className="flex items-baseline gap-2 mt-1">
        <p className="text-xl font-semibold text-blue-500">${usd.toFixed(2)}</p>
        <p className="text-gray-500 text-sm">USD</p>
      </div>
    </div>
  );
}