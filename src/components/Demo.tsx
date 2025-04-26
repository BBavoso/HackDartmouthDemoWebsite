import React, { useState, useEffect } from 'react';
import { Github, Search, Languages, BookOpen } from 'lucide-react';

const Demo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'translate' | 'explain'>('search');
  const [selectedText, setSelectedText] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const handleTextSelection = (event: MouseEvent) => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setSelectedText(selection.toString());
      setPopupPosition({
        top: rect.bottom + window.scrollY + 10,
        left: rect.left + window.scrollX,
      });
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleTextSelection);
    document.addEventListener('click', (e) => {
      if (!(e.target as HTMLElement).closest('.code-popup')) {
        setShowPopup(false);
      }
    });

    return () => {
      document.removeEventListener('mouseup', handleTextSelection);
    };
  }, []);

  const renderSearchDemo = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
          <span className="font-medium text-gray-700">Code Snippet</span>
          <Search className="h-4 w-4 text-gray-600" />
        </div>
        <div className="p-4">
          <pre className="bg-gray-800 text-gray-100 rounded-md p-4 text-sm overflow-x-auto">
            <code>{`const quickSort = (arr) => [...arr].sort((a, b) => a - b);`}</code>
          </pre>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
          <span className="font-medium text-gray-700">GitHub Search Results</span>
          <Github className="h-4 w-4 text-gray-600" />
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-indigo-600">algorithms/sorting.js</h3>
                <span className="text-sm text-gray-500">⭐ 1.2k</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Implementation of various sorting algorithms including quickSort
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">JavaScript</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Algorithms</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-indigo-600">utils/array-helpers.ts</h3>
                <span className="text-sm text-gray-500">⭐ 847</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Collection of array utility functions with TypeScript support
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Utils</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTranslateDemo = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
          <span className="font-medium text-gray-700">JavaScript</span>
          <Languages className="h-4 w-4 text-gray-600" />
        </div>
        <div className="p-4">
          <pre className="bg-gray-800 text-gray-100 rounded-md p-4 text-sm overflow-x-auto">
            <code>{`function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[0];
  const left = [];
  const right = [];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [
    ...quickSort(left),
    pivot,
    ...quickSort(right)
  ];
}`}</code>
          </pre>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
          <span className="font-medium text-gray-700">Python</span>
          <Languages className="h-4 w-4 text-gray-600" />
        </div>
        <div className="p-4">
          <pre className="bg-gray-800 text-gray-100 rounded-md p-4 text-sm overflow-x-auto">
            <code>{`def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[0]
    left = []
    right = []
    
    for i in range(1, len(arr)):
        if arr[i] < pivot:
            left.append(arr[i])
        else:
            right.append(arr[i])
    
    return quick_sort(left) + [pivot] + quick_sort(right)
`}</code>
          </pre>
        </div>
      </div>
    </div>
  );

  const renderExplainDemo = () => (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center">
        <div className="flex space-x-2 mr-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="bg-white flex-1 rounded-full px-3 py-1 text-sm text-gray-600 flex items-center">
          <BookOpen className="h-3.5 w-3.5 mr-1.5 text-indigo-600" />
          What's This Code? Explanation
        </div>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-2">Original Code</h4>
          <pre className="bg-gray-800 text-gray-100 rounded-md p-4 text-sm overflow-x-auto">
            <code>{`async function getData() {
  const cache = await caches.open('my-cache');
  const cachedResponse = await cache.match('/api/data');
  
  if (cachedResponse) {
    return cachedResponse.json();
  }
  
  const response = await fetch('/api/data');
  const clone = response.clone();
  cache.put('/api/data', clone);
  return response.json();
}`}</code>
          </pre>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-2">Explanation</h4>
          <div className="bg-indigo-50 rounded-md p-4 text-sm text-gray-800">
            <p className="mb-3">
              <strong>This function implements a cache-first strategy:</strong>
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Opens a cache storage named 'my-cache'</li>
              <li>Checks if the data from '/api/data' is already in the cache</li>
              <li>If cached data exists, returns it immediately</li>
              <li>Otherwise, fetches fresh data from the API</li>
              <li>Clones the response (since response bodies can only be consumed once)</li>
              <li>Saves the cloned response in the cache for future use</li>
              <li>Returns the original response data as JSON</li>
            </ol>
            <p className="mt-3 text-indigo-700">
              This pattern improves application performance by reducing network requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="demo" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See it in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how our extension enhances your coding workflow
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveTab('search')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'search'
                  ? 'bg-white shadow-sm text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              <span className="flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Search
              </span>
            </button>
            <button
              onClick={() => setActiveTab('translate')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'translate'
                  ? 'bg-white shadow-sm text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              <span className="flex items-center">
                <Languages className="h-4 w-4 mr-2" />
                Translate
              </span>
            </button>
            <button
              onClick={() => setActiveTab('explain')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'explain'
                  ? 'bg-white shadow-sm text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              <span className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Explain
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === 'search' && renderSearchDemo()}
          {activeTab === 'translate' && renderTranslateDemo()}
          {activeTab === 'explain' && renderExplainDemo()}
        </div>
      </div>
    </section>
  );
};

export default Demo;
