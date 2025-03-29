import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faServer, 
  faShield, 
  faGaugeHigh, 
  faHeadset, 
  faGamepad,
  faGlobe,
  faDatabase,
  faLock,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pb-8 pt-22">
        <div className="absolute inset-0 bg-dark/90">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-right opacity-100 mix-blend-soft-light"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-blue-600/20 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">
              <span className="gradient-text">Game Server </span> Hosting
            </h1>
            <p className="text-lg text-blue-400 font-medium mb-4">
              Order fairly priced Game Servers from the best rated low cost provider that won't skimp on quality.
            </p>
            <p className="text-gray-300 mb-8 text-lg">
              The cheapest game server hosting that doesn't cut corners boasting 1Gbps Anycast DDoS Protection, High RAM 
              servers over 128GB and SSD storage. You get the same great quality as the big sites, you just pay less for it. 
              Your server will be lag FREE, DDoS protected and features full mod support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn btn-primary text-center flex items-center justify-center">
                View Plans
              </Link>
              <Link to="/contact" className="btn btn-outline text-center flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Game Servers Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular <span className="gradient-text">Game Servers</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer hosting for a wide range of popular games with optimized configurations for the best performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg" alt="RUST" className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">RUST</h3>
                <p className="text-gray-400 mb-4">Starting at $9.99/month</p>
                <Link to="/services" className="btn btn-primary w-full">
                  View Plans
                </Link>
              </div>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg" alt="CS:GO" className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Counter Strike 2</h3>
                <p className="text-gray-400 mb-4">Starting at $7.99/month</p>
                <Link to="/services" className="btn btn-primary w-full">
                  View Plans
                </Link>
              </div>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <img src="https://wallpapers.com/images/hd/hd-minecraft-logo-3nehf0ctjgk3d0zp.jpg" alt="Minecraft" className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Minecraft</h3>
                <p className="text-gray-400 mb-4">Starting at $5.99/month</p>
                <Link to="/services" className="btn btn-primary w-full">
                  View Plans
                </Link>
              </div>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg" alt="ARK" className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">ARK</h3>
                <p className="text-gray-400 mb-4">Starting at $12.99/month</p>
                <Link to="/services" className="btn btn-primary w-full">
                  View Plans
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-outline">
              View All Games <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </Link>
          </div>
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
                <FontAwesomeIcon icon={faGamepad} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">One-Click Mods</h3>
              <p className="text-gray-400">
                Install popular mods and plugins with a single click through our control panel.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faServer} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Setup</h3>
              <p className="text-gray-400">
                Your server is deployed instantly after payment, so you can start playing right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="gradient-text">Customers Say</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">John D.</h4>
                  <p className="text-gray-400 text-sm">RUST Server Owner</p>
                </div>
              </div>
              <p className="text-gray-300">
                "I've tried several hosting providers, but Floor Hosting offers the best performance for my RUST server. The support team is incredibly responsive and helpful."
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Sarah M.</h4>
                  <p className="text-gray-400 text-sm">Minecraft Community Admin</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Our Minecraft community has grown significantly since moving to Floor Hosting. The server performance is excellent, and the one-click mod installation is a game-changer."
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Michael T.</h4>
                  <p className="text-gray-400 text-sm">CS:GO Tournament Organizer</p>
                </div>
              </div>
              <p className="text-gray-300">
                "We host regular CS:GO tournaments and Floor Hosting has been instrumental in providing reliable servers. The DDoS protection has saved us multiple times during high-profile matches."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-dark-lighter">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Game Hosting?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with Floor Hosting today and take your gaming experience to the next level.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services" className="btn btn-primary">
                View Plans
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;