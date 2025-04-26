import React from 'react';
import { Search, Code, BookOpen } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Search className="w-10 h-10 text-indigo-600" />,
      title: 'Smart Search',
      description:
        'Search highlighted text instantly on GitHub or Stack Overflow with a single click.',
      animation: 'fade-right',
      delay: 0,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Code className="w-10 h-10 text-purple-600" />,
      title: 'Code Translation',
      description: 'Translate code snippets between programming languages quickly and accurately.',
      animation: 'fade-up',
      delay: 200,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      title: 'Code Explanation',
      description:
        'Get clear, concise explanations of complex code segments to enhance understanding.',
      animation: 'fade-left',
      delay: 400,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enhance your browsing experience with these powerful coding tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
