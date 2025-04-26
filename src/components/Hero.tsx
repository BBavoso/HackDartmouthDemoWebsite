import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Understand <span className="text-indigo-600">Any Code</span> Instantly
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Search, translate, and understand code snippets with a simple right-click. Your smart
            coding assistant is here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#install"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center"
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              Add to Chrome
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
