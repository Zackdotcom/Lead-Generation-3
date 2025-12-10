import React from 'react';
import { Search, Users, RefreshCw, Shield, Handshake, ScrollText } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Independent Advantage */}
        <div className="mb-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Why Choose an Independent Agent?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Most people don't realize there are two ways to buy insurance:
              </p>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-red-900">The "Captive" Way</h3>
                  <p className="text-red-800 text-sm mt-1">
                    You call a big brand (like the ones with the lizards or stadiums). The agent can only sell you that one company's product. If their rates go up? You’re stuck.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
                  <h3 className="font-bold text-green-900">The "Independent" Way (Us)</h3>
                  <p className="text-green-800 text-sm mt-1">
                    We work for YOU, not the insurance company. We have access to the entire marketplace.
                  </p>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                      <Search className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">We Are Your Personal Shopper</h4>
                    <p className="text-gray-500">We compare dozens of quotes at once.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                      <Users className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">We Are Your Advocate</h4>
                    <p className="text-gray-500">If you have a claim, we are on your side of the table, fighting for a fair payout.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                      <RefreshCw className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">We Are Lifetime Partners</h4>
                    <p className="text-gray-500">At every renewal, we re-check the market. If your rate creeps up, we can switch carriers without you losing your agent.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-10 lg:mt-0 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px] flex items-center justify-center">
                 <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern home background" 
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/75 mix-blend-multiply"></div>
                
                {/* Visual Watermark/Anchor */}
                <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
                  <Shield className="h-24 w-24 text-blue-200 opacity-30 mb-4" />
                  <p className="text-blue-100 font-serif italic text-2xl opacity-90">"Protecting what matters most."</p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-blue-50 rounded-2xl border border-blue-100"></div>
            </div>
          </div>
        </div>

        {/* Rate Defense Strategy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">The "Rate Defense" Strategy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
              <ScrollText className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Audit</h3>
            <p className="text-gray-600">
              Most homeowners are underinsured due to rising costs. We audit your policy to ensure you aren't paying for 'fluff' or missing protection.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
             <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Handshake className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Match</h3>
            <p className="text-gray-600">
              We match your specific risk profile (credit, driving history, home age) with the carrier that has the biggest appetite for you.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
             <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Bundle</h3>
            <p className="text-gray-600">
              We maximize multi-policy discounts by bundling Home, Auto, Toys, and Umbrella policies under one roof, often saving clients 15-20%.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};