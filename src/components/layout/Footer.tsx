
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail,  MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl text-vue-700">Vue</span>
              <span className="font-medium text-xl text-gray-700">Software</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Professionele softwareoplossingen met een focus op nauwkeurigheid, veiligheid en bruikbaarheid, met name in financiële en administratieve toepassingen.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Snelle Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-vue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-vue-600 transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-muted-foreground hover:text-vue-600 transition-colors">
                  Calculator Demo
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-muted-foreground hover:text-vue-600 transition-colors">
                  Security & Privacy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Neem contact op met ons</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-vue-600 flex-shrink-0" />
                <a href="mailto:contact@vuesoftware.com" className="text-muted-foreground hover:text-vue-600 transition-colors">
                  info@vuesoftware.nl
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-vue-600 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Amsterdam Business Center<br />
                  Herengracht 456<br />
                  1017 CA Amsterdam
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-200">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Vue Software. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
