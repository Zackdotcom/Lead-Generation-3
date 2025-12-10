import React from 'react';

export const TrustBar: React.FC = () => {
  // Using text placeholders for logos as per standard limitations, styled to look like a logo bar
  const carriers = [
    "Travelers", "Safeco", "Progressive", "Liberty Mutual", "Nationwide", "The Hartford"
  ];

  return (
    <div className="bg-gray-100 py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide mb-6">
          We compare rates from the nation's most trusted carriers
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {carriers.map((carrier) => (
            <span key={carrier} className="text-xl md:text-2xl font-bold text-gray-700 font-serif italic">
              {carrier}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};