import React from 'react';
import { Phone, ShieldCheck, Wand2 } from 'lucide-react';

interface HeaderProps {
  onOpenAiTool: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAiTool }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <ShieldCheck className="h-8 w-8 text-blue-800 mr-3 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-bold text-xl md:text-2xl text-gray-900 leading-none tracking-tight">Zack McGonigle</span>
              <span className="text-xs text-gray-500 font-semibold tracking-widest uppercase">Cottonwood Insurance Agent</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button 
              onClick={onOpenAiTool}
              className="hidden lg:flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Wand2 className="w-4 h-4 mr-2" />
              AI Visualizer
            </button>
            
            <a href="tel:7144037130" className="hidden md:flex items-center text-gray-900 font-bold text-lg hover:text-blue-800 transition">
              <Phone className="w-5 h-5 mr-2 text-blue-700" />
              (714) 403-7130
            </a>
            
            <a 
              href="#quote-form"
              className="bg-red-700 hover:bg-red-800 text-white px-5 py-2.5 rounded-lg font-bold transition-colors shadow-md transform hover:-translate-y-0.5 whitespace-nowrap text-sm md:text-base"
            >
              Get Comparison Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};