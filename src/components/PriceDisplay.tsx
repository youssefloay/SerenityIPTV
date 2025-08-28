import React from 'react';

interface PriceDisplayProps {
  egp: string;
  usd: number;
}

export function PriceDisplay({ egp, usd }: PriceDisplayProps) {
  // Extract the numeric value from the EGP string
  const egpValue = egp.replace(/[^0-9.]/g, '');
  
  return (
    <div className="mb-6">
      <div className="flex flex-col">
        <span className="text-xs font-medium text-gray-500 mb-1 tracking-wider">STARTING FROM</span>
        <div className="flex items-end gap-2">
          <div className="flex items-baseline">
            <span className="text-3xl font-semibold text-blue-600">${usd.toFixed(2)}</span>
            <span className="ml-1 text-xs font-medium text-gray-500">USD</span>
          </div>
          <span className="text-gray-400 mx-1">/</span>
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-blue-500">{egpValue}</span>
            <span className="ml-1 text-sm font-medium text-gray-600">EGP</span>
          </div>
        </div>
      </div>
    </div>
  );
}