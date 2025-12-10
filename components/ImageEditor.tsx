import React, { useState, useRef } from 'react';
import { Camera, Wand2, Download, AlertCircle, Loader2 } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';

export const ImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setGeneratedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await editImageWithGemini(selectedImage, prompt);
      if (result) {
        setGeneratedImage(result);
      } else {
        setError("The AI could not generate an image. Please try a different prompt.");
      }
    } catch (err) {
      setError("An error occurred while connecting to the AI service.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white border-y border-gray-200" id="ai-tool">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
            <Wand2 className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">New Feature</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            AI Property Visualizer
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Upload a photo of your home or property and use our AI to visualize renovations, repairs, or aesthetic changes before you commit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Input Section */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Camera className="w-5 h-5 mr-2 text-gray-500" />
              1. Upload Photo
            </h3>
            
            <div 
              className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer bg-white"
              onClick={() => fileInputRef.current?.click()}
            >
              {selectedImage ? (
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <img src={selectedImage} alt="Original" className="object-cover w-full h-full" />
                  <button 
                    className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded hover:bg-black"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                  >
                    Change
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <Camera className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="text-gray-600 font-medium">Click to upload photo</p>
                  <p className="text-gray-400 text-sm mt-1">PNG, JPG up to 5MB</p>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleFileChange}
              />
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Describe Changes</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., 'Add a retro filter', 'Fix the roof shingles', 'Add a garden'"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  disabled={isLoading}
                />
                <button
                  onClick={handleGenerate}
                  disabled={!selectedImage || !prompt || isLoading}
                  className={`px-6 py-3 rounded-lg font-semibold text-white flex items-center transition-all ${
                    !selectedImage || !prompt || isLoading
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <Wand2 className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Powered by Gemini 2.5 Flash Image. Describe what you want to see.
              </p>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm h-full min-h-[400px] flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Wand2 className="w-5 h-5 mr-2 text-blue-500" />
              3. AI Result
            </h3>

            <div className="flex-1 flex items-center justify-center bg-white rounded-xl border border-gray-200 overflow-hidden relative">
              {isLoading ? (
                <div className="text-center">
                  <Loader2 className="w-10 h-10 text-blue-600 animate-spin mx-auto mb-3" />
                  <p className="text-gray-600 font-medium">Analyzing property...</p>
                  <p className="text-gray-400 text-sm">Applying visual updates</p>
                </div>
              ) : generatedImage ? (
                <div className="relative w-full h-full">
                  <img src={generatedImage} alt="Generated" className="w-full h-auto object-contain max-h-[500px]" />
                  <a 
                    href={generatedImage} 
                    download="zack-mcgonigle-insurance-ai-edit.png"
                    className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow hover:bg-white text-gray-700 transition"
                    title="Download Image"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              ) : error ? (
                <div className="text-center text-red-500 px-6">
                  <AlertCircle className="w-10 h-10 mx-auto mb-3" />
                  <p>{error}</p>
                </div>
              ) : (
                <div className="text-center text-gray-400">
                  <p>Result will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};