import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faServer, 
  faShield, 
  faGaugeHigh, 
  faHeadset,
  faGamepad,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dark">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-soft-light"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-14">
            Server<span className="gradient-text"> Hosting</span>
            </h1>
            <p className="text-xl text-gray-300">
              The fastest and most reliable hosting for your servers, with premium hardware, DDoS protection, and 24/7 support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section bg-dark relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Server <span className="gradient-text">Plans</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include DDoS protection, 24/7 support, and instant setup.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="pricing-card bg-dark-lighter/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-primary/30 transition-all duration-300 hover:translate-y-[-5px]">
              <div className="text-center p-6 border-b border-gray-700/50">
                <h3 className="text-2xl font-bold mb-2">Basic Hosting</h3>
                <div className="mt-4">
                  <span className="text-5xl font-bold">$4.99</span>
                  <span className="text-gray-400 ml-1">Monthly</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> 10 GB storage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> 1 website
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> Unlimited bandwidth
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> Basic customer support
                  </li>
                </ul>
                
                <Link to="/contact" className="btn btn-outline hover:btn-primary w-full text-center mt-8 py-3 transition-all duration-300">
                  Get Plan
                </Link>
              </div>
            </div>
            
            {/* Business Plan - Featured */}
            <div className="pricing-card bg-gradient-to-b from-primary/20 to-blue-900/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-primary/30 transform scale-105 relative">
              <div className="absolute -right-8 top-6 bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-bold py-1 px-8 shadow-lg rotate-45">
                Most Popular
              </div>
              <div className="text-center p-6 border-b border-gray-700/50">
                <h3 className="text-2xl font-bold mb-2">Business Hosting</h3>
                <div className="mt-4">
                  <span className="text-5xl font-bold">$9.99</span>
                  <span className="text-gray-400 ml-1">Monthly</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> 50 GB storage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> 5 websites
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> Unlimited bandwidth
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> Priority customer support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> SSL certificate included
                  </li>
                </ul>
                
                <Link to="/contact" className="btn btn-primary w-full text-center mt-8 py-3 shadow-lg shadow-primary/20">
                  Get Plan
                </Link>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="pricing-card bg-dark-lighter/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-primary/30 transition-all duration-300 hover:translate-y-[-5px]">
              <div className="text-center p-6 border-b border-gray-700/50">
                <h3 className="text-2xl font-bold mb-2">Pro Hosting</h3>
                <div className="mt-4">
                  <span className="text-5xl font-bold">$19.99</span>
                  <span className="text-gray-400 ml-1">Monthly</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> Unlimited storage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> Unlimited websites
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> Unlimited bandwidth
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> Premium customer support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> Enhanced security features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary mr-2 text-lg">✓</span> Free domain name registration
                  </li>
                </ul>
                
                <Link to="/contact" className="btn btn-outline hover:btn-primary w-full text-center mt-8 py-3 transition-all duration-300">
                  Get Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Server <span className="gradient-text">Features</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              All our Server servers come with these premium features to ensure the best gaming experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faShield} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">DDoS Protection</h3>
              <p className="text-gray-400">
                Enterprise-grade protection against DDoS attacks to keep your servers online.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faGaugeHigh} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">99.9% Uptime</h3>
              <p className="text-gray-400">
                Our infrastructure is designed for reliability with redundant systems.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHeadset} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-400">
                Our team is available around the clock to assist with any issues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;