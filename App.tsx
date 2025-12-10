import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ImageEditor } from './components/ImageEditor';
import { Features } from './components/Features';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { X } from 'lucide-react';

const App: React.FC = () => {
  const [isAiToolOpen, setIsAiToolOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header onOpenAiTool={() => setIsAiToolOpen(true)} />
      
      {/* AI Tool Modal */}
      {isAiToolOpen && (
        <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={() => setIsAiToolOpen(false)}
            ></div>

            {/* Modal panel */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4 z-10">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => setIsAiToolOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="bg-white">
                <ImageEditor />
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        <Hero />
        <TrustBar />
        
        {/* Main Content Flow */}
        <Features />
        
        {/* Testimonial Snippet */}
        <section className="bg-blue-50 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Proven Results for Local Families</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                 <p className="italic text-gray-600 mb-4">"I thought I had a great rate until Zack McGonigle looked at my policy. Not only did I save $600 a year, but I found out my old policy wouldn't have covered my roof."</p>
                 <p className="font-bold text-gray-900">— Sarah J., Lehi, UT</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                 <p className="italic text-gray-600 mb-4">"Finally, an agent who actually answers the phone. I love that I can text them questions and get real answers, not a call center robot."</p>
                 <p className="font-bold text-gray-900">— Mike T., Salt Lake City</p>
              </div>
            </div>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Footer onOpenAiTool={() => setIsAiToolOpen(true)} />
    </div>
  );
};

export default App;