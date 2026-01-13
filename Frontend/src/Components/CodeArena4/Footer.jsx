import { useState } from 'react';
import { MatrixRain } from './MatrixRain';
import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

export function Footer() {
  const [showMatrix, setShowMatrix] = useState(false);

  return (
    <footer className="relative py-12 md:py-16 px-4 md:px-6 border-t border-gray-900 overflow-hidden">
      {/* Matrix Rain Effect */}
      {showMatrix && (
        <div className="absolute inset-0 pointer-events-none">
          <MatrixRain />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              CODE<span className="text-[--logic-blue]">ARENA</span> 4.0
            </h3>
            <p className="text-gray-400 mb-3 md:mb-4 font-mono text-xs md:text-sm">
              "Optimization matters more than speed alone."
            </p>
            <div
              className="inline-block text-xs md:text-sm text-[--logic-blue] cursor-pointer hover:text-[--optimization-green] transition-colors"
              onMouseEnter={() => setShowMatrix(true)}
              onMouseLeave={() => setShowMatrix(false)}
            >
              Hover for Matrix Mode ▸
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <a
                  href="#arena-flow"
                  className="hover:text-[--logic-blue] transition-colors inline-block"
                >
                  → Timeline
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="hover:text-[--logic-blue] transition-colors inline-block"
                >
                  → Register
                </a>
              </li>
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-[--logic-blue] transition-colors"
                >
                  → Back to Top
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Connect</h4>
            <div className="flex gap-3 md:gap-4 mb-4 md:mb-6">
  
     
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 bg-[#0a0a0a] border border-gray-800 rounded-lg flex items-center justify-center hover:border-[--logic-blue] hover:text-[--logic-blue] transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </a>
                    <a
                href="https://www.instagram.com/codecraft.pccoer__/"
                className="w-9 h-9 md:w-10 md:h-10 bg-[#0a0a0a] border border-gray-800 rounded-lg flex items-center justify-center hover:border-[--logic-blue] hover:text-[--logic-blue] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

    

        {/* Decorative Element */}
        <div className="mt-6 md:mt-8 text-center">
          <div className="inline-block px-4 md:px-6 py-2 bg-[#0a0a0a] border border-gray-800 rounded-full text-xs text-gray-600 font-mono">
            <span className="text-[--optimization-green]">●</span> System Status: Operational
          </div>
        </div>
      </div>
    </footer>
  );
}