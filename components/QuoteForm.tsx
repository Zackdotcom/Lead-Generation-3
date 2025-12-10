import React, { useEffect } from 'react';
import { Phone } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.agent-crm.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="quote-form" className="bg-blue-900 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-10 text-center border-b-8 border-red-600">
             <h2 className="text-4xl font-extrabold text-white mb-4">Request Your Comparison Quote</h2>
             <p className="text-blue-100 text-lg max-w-2xl mx-auto">Stop overpaying. Fill out the form below and let us shop 25+ top carriers for you.</p>
             
             <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 bg-white/10 rounded-full py-3 px-6 backdrop-blur-sm border border-white/10 inline-flex mx-auto">
               <span className="text-blue-100 font-medium">Want to speak with an agent sooner?</span>
               <a href="tel:7144037130" className="flex items-center text-white font-bold hover:text-blue-200 transition-colors">
                 <Phone className="w-4 h-4 mr-2" />
                 Call (714) 403-7130
               </a>
             </div>
          </div>
          
          <div className="p-4 md:p-8 bg-white">
            <iframe
                src="https://link.agent-crm.com/widget/form/dKEzNixguAA4kkdG4jgl"
                style={{ width: '100%', height: '100%', minHeight: '800px', border: 'none', borderRadius: '3px' }}
                id="inline-dKEzNixguAA4kkdG4jgl" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 17"
                data-height="1348"
                data-layout-iframe-id="inline-dKEzNixguAA4kkdG4jgl"
                data-form-id="dKEzNixguAA4kkdG4jgl"
                title="Form 17"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};