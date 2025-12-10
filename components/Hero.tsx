import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-blue-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Family in front of home"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/75 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Stop Letting One Insurance Company Dictate Your Price.
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            We are Independent Agents. We shop over 25 top-rated carriers to find you the perfect blend of coverage and price—so you don’t have to.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-blue-900 bg-white hover:bg-gray-50 md:py-4 md:text-xl shadow-xl transition-all"
            >
              Start My Free Rate Analysis
            </a>
            <div className="flex items-center text-blue-200 text-sm font-medium mt-2 sm:mt-0 px-4">
              <span>No cost. No obligation. 100% Local Service.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};