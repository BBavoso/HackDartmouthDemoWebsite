import React from 'react';
import { Download, Github } from 'lucide-react';
import DownloadZipButton from './DownloadZipButton';

const Installation: React.FC = () => {
  return (
    <section
      id="install"
      className="py-16 md:py-24 bg-gradient-to-br from-indigo-100 via-white to-indigo-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Installation Options
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your preferred method to install our Chrome extension
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Option 1: Download Build */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Download className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Download Build</h3>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600">Download the pre-built extension files</p>
                  <DownloadZipButton />
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600">Open Chrome and go to chrome://extensions/</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600">Enable "Developer mode" in the top right</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600">
                    Click "Load unpacked" and select the downloaded folder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Option 2: Build from Source */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Github className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Build from Source</h3>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600">
                    1
                  </div>
                </div>
                <div className="ml-4 w-full">
                  <p className="text-gray-600">Clone the repository</p>
                  <div className="relative mt-2 bg-gray-100 p-2 rounded-md overflow-x-auto">
                    <code className="text-sm break-words whitespace-pre-wrap">
                      git clone https://github.com/yourusername/whats-this-code.git
                    </code>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(
                          'git clone https://github.com/yourusername/whats-this-code.git'
                        )
                      }
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600">
                    2
                  </div>
                </div>
                <div className="ml-4 w-full">
                  <p className="text-gray-600">Install dependencies and build</p>
                  <div className="relative mt-2 bg-gray-100 p-2 rounded-md overflow-x-auto">
                    <code className="text-sm break-words whitespace-pre-wrap">
                      npm install && npm run build
                    </code>
                    <button
                      onClick={() => navigator.clipboard.writeText('npm install && npm run build')}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600">Open Chrome and go to chrome://extensions/</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600">
                    Enable "Developer mode" and click "Load unpacked" and select the downloaded
                    folder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Installation;
