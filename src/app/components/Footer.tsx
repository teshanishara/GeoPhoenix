import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from 'figma:asset/f40de81c9fd60a7abca1748089dbc3504dd1388d.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="GEOPHOENIX" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 mb-4">
              Leading provider of geospatial analysis, data analysis, and GIS consultation services. 
              Empowering businesses worldwide with location intelligence.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/teshan-ishara-80b9bb156" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
        
              <a href="https://www.facebook.com/tehan.ishara.3" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-orange-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-orange-500 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-orange-500 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-orange-500 transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-orange-500 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500" />
                <a href="mailto:teshan.ishara@gmail.com" className="hover:text-orange-500 transition-colors">
                  teshan.ishara@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500" />
                <a href="tel:+94715298267" className="hover:text-orange-500 transition-colors">
                  +94 71 529 8267
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500" />
                <span>Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 GEOPHOENIX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}