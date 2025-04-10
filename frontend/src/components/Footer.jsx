import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faServer, 
  faEnvelope, 
  faPhone, 
  faLocationDot 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter, 
  faFacebook, 
  faInstagram, 
  faDiscord, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark pt-16 pb-8 border-t border-dark-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6 group">
              <FontAwesomeIcon 
                icon={faServer} 
                className="text-primary text-2xl transform transition-transform group-hover:scale-110 group-hover:rotate-6" 
              />
              <span className="text-2xl font-gaming font-bold text-white group-hover:text-gray-200 transition-colors">
                Floor<span className="text-primary group-hover:text-primary-light transition-colors">Hosting</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium game server hosting with unbeatable performance, 24/7 support, and competitive pricing.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 transform"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 transform"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 transform"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 transform"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 transform"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative pl-3 border-l-4 border-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                  <span className="text-primary mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span> 
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                  <span className="text-primary mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span> 
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                  <span className="text-primary mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span> 
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                  <span className="text-primary mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span> 
                  <span className="group-hover:translate-x-1 transition-transform duration-300">FAQ</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                  <span className="text-primary mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span> 
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Apply same hover effects as Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative pl-3 border-l-4 border-primary">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                  <span className="text-primary mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span> 
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Game Servers</span>
                </Link>
              </li>
              {/* Apply same pattern to other service links */}
              {/* ... */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative pl-3 border-l-4 border-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center text-primary mr-3 flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">123 Gaming Street, Server City, SC 12345</span>
              </li>
              {/* Apply same pattern to other contact items */}
              {/* ... */}
            </ul>
          </div>
        </div>

        <hr className="border-dark-light my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FloorHosting. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-primary text-sm transition-all duration-300 hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary text-sm transition-all duration-300 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;