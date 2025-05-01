import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faServer, 
  faShield, 
  faGaugeHigh, 
  faHeadset, 
  faGamepad,
  faGlobe,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subscriptionLength, setSubscriptionLength] = useState(48);
  
  
  const API_BASE_URL = `${window.location.origin}/api`;
  
  // Fetch services from Django backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        
        console.log(`Fetching services from: ${API_BASE_URL}/services/?type=${activeTab}`);
        
        const response = await fetch(`${API_BASE_URL}/services/?type=${activeTab}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response:', errorText);
          throw new Error(`Network response was not ok (${response.status}): ${errorText}`);
        }
        
        const data = await response.json();
        console.log('Fetched data:', data);
        
        // Check if data is an array
        if (!Array.isArray(data)) {
          console.error('Expected array but got:', typeof data);
          throw new Error('Invalid data format received from server');
        }
        
        setServices(data);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setError('Failed to fetch services: ' + error.message);
        setLoading(false);
      }
    };
    
    fetchServices();
  }, [activeTab, API_BASE_URL]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setLoading(true);
  };

  // Debug output to help identify issues
  console.log('Current state:', { 
    activeTab, 
    loading, 
    error, 
    servicesCount: services?.length,
    services
  });

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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300">
              Get online fast at an unbeatable price
            </p>
            <p className="text-gray-400 mt-4">
              Choose from a wide variety of services and plans to grow your idea online.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="section bg-dark">
        <div className="container">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-dark-lighter rounded-lg p-1">
              <button 
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'web' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => handleTabChange('web')}
              >
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                Web Hosting
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'game' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => handleTabChange('game')}
              >
                <FontAwesomeIcon icon={faGamepad} className="mr-2" />
                Game Hosting
              </button>
            </div>
          </div>

          {/* Subscription Length Dropdown */}
          <div className="mb-12">
            <div className="max-w-md mx-auto">
              <label className="block text-gray-400 mb-2">Length of subscription</label>
              <select 
                className="w-full bg-dark-lighter border border-gray-700 rounded px-4 py-3 text-white"
                onChange={(e) => setSubscriptionLength(parseInt(e.target.value))}
                value={subscriptionLength}
              >
                <option value="48">48-months</option>
                <option value="24">24-months</option>
                <option value="12">12-months</option>
                <option value="1">1-month</option>
              </select>
            </div>
          </div>

          {/* Loading and Error States */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-400">Loading services...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <div className="bg-red-500/20 text-red-400 p-4 rounded-lg max-w-lg mx-auto">
                <p>{error}</p>
                <button 
                  className="mt-4 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
                  onClick={() => handleTabChange(activeTab)}
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Services Grid */}
          {!loading && !error && (
            <div className="flex justify-center w-full overflow-x-auto">
              <div className={`flex flex-nowrap gap-6 py-4 min-w-max`}>
                {Array.isArray(services) && services.length > 0 ? (
                  services.map((service) => {
                    // Add validation to ensure service has all required properties
                    if (!service || !service.id) {
                      console.error('Invalid service object:', service);
                      return null;
                    }
                    
                    return (
                      <div 
                        key={service.id} 
                        className={`card relative overflow-hidden w-[350px] flex-shrink-0 bg-white bg-opacity-5 rounded-lg ${service.popular ? 'border-2 border-primary' : 'border border-gray-700'}`}
                      >
                        {service.popular && (
                          <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-1 text-sm font-medium">
                            MOST POPULAR
                          </div>
                        )}
                        <div className="p-6 pt-8">
                          <h3 className="text-xl font-bold mb-1">{service.name}</h3>
                          
                          <div className="mb-6">
                            {service.original_price && (
                              <div className="flex items-center">
                                <span className="text-gray-400 line-through text-sm">
                                  ${typeof service.original_price === 'number' ? 
                                    service.original_price.toFixed(2) : service.original_price}
                                </span>
                                <span className="ml-2 bg-blue-500/20 text-blue-400 text-xs font-medium px-2 py-1 rounded">
                                  SAVE {subscriptionLength === 48 ? service.discount_48_month : 
                                        subscriptionLength === 24 ? service.discount_24_month : 
                                        subscriptionLength === 12 ? service.discount_12_month : 0}%
                                </span>
                              </div>
                            )}
                            <div className="flex items-baseline mt-2">
                              <span className="text-3xl font-bold">
                                $
                                {subscriptionLength === 48 && service.price_48_month ? 
                                  (typeof service.price_48_month === 'number' ? 
                                    service.price_48_month.toFixed(2) : service.price_48_month) :
                                 // Rest of price calculation remains the same
                               subscriptionLength === 24 && service.price_24_month ? 
                                (typeof service.price_24_month === 'number' ? 
                                  service.price_24_month.toFixed(2) : service.price_24_month) :
                               subscriptionLength === 12 && service.price_12_month ? 
                                (typeof service.price_12_month === 'number' ? 
                                  service.price_12_month.toFixed(2) : service.price_12_month) :
                               service.price_1_month ? 
                                (typeof service.price_1_month === 'number' ? 
                                  service.price_1_month.toFixed(2) : service.price_1_month) : 
                               '0.00'}
                            </span>
                            <span className="text-gray-400 text-sm ml-1">/mo</span>
                          </div>
                          {subscriptionLength > 1 && (
                            <div className="text-xs text-gray-500 mt-1">
                              {service.type === 'web' ? '+3 months free' : 
                               `Save ${subscriptionLength === 48 ? service.discount_48_month : 
                                      subscriptionLength === 24 ? service.discount_24_month : 
                                      service.discount_12_month}%`}
                            </div>
                          )}
                        </div>
                        
                        <button className="btn btn-primary w-full mb-4">
                          Choose plan
                        </button>
                        <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                        <div className="border-t border-gray-700 my-8"></div>
                        
                        <ul className="space-y-2">
                          {Array.isArray(service.features) ? (
                            service.features.map((featureObj) => (
                              <li key={featureObj.id} className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-gray-300 text-sm">{featureObj.feature}</span>
                              </li>
                            ))
                          ) : (
                            <li className="text-gray-400">No features available</li>
                          )}
                        </ul>
                      </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-4 text-center py-10">
                    <p className="text-gray-400">No valid services data available. Please check the console for details.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* No Services Found */}
          {!loading && !error && services.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400">No services found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-dark-lighter">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="gradient-text">Floor Hosting</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide the best hosting experience with premium hardware and exceptional support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faServer} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Hardware</h3>
              <p className="text-gray-400">
                All our servers run on high-performance CPUs and NVMe SSDs for lightning-fast performance.
              </p>
            </div>
            
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
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faDatabase} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Daily Backups</h3>
              <p className="text-gray-400">
                Automatic daily backups ensure your data is always safe and recoverable.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faServer} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Setup</h3>
              <p className="text-gray-400">
                Your server is deployed instantly after payment, so you can start right away.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;