import React from 'react';
import { Wand2 } from 'lucide-react';

interface FooterProps {
  onOpenAiTool: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAiTool }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ Section */}
        <div className="mb-12 border-b border-gray-800 pb-12">
           <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div>
               <h4 className="font-bold text-white mb-2">Q: Does it cost extra to use an Independent Agent?</h4>
               <p className="text-sm">A: Absolutely not. We are paid a commission by the insurance carrier you choose. Your rate is exactly the same (often lower due to our expertise) as if you went direct.</p>
             </div>
             <div>
               <h4 className="font-bold text-white mb-2">Q: Will you spam me with calls?</h4>
               <p className="text-sm">A: No. We hate spam too. We will reach out to gather any missing details and present your quote options. We treat you the way we want to be treated.</p>
             </div>
              <div>
               <h4 className="font-bold text-white mb-2">Q: How long does a quote take?</h4>
               <p className="text-sm">A: Because we shop multiple carriers to find the absolute best fit, please allow us 24 hours to build your comprehensive proposal.</p>
             </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Zack McGonigle<br/>Cottonwood Insurance Agent</h4>
            <p>2028 E Fort Union Blvd, Unit 100</p>
            <p>Cottonwood Heights, UT 84121</p>
            <p className="mt-2"><a href="tel:7144037130" className="hover:text-white">(714) 403-7130</a></p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#quote-form" className="hover:text-white transition">Get a Quote</a></li>
              <li><a href="#" className="hover:text-white transition">Client Portal</a></li>
              <li>
                <button onClick={onOpenAiTool} className="hover:text-white transition flex items-center">
                  <Wand2 className="w-3 h-3 mr-2" /> AI Property Visualizer
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-600 border-t border-gray-800 pt-8">
          <p>We are an independent insurance agency licensed in UT. We do not work for any specific insurance carrier; we work for our clients. Coverages subject to underwriting approval.</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Zack McGonigle - Cottonwood Insurance Agent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};