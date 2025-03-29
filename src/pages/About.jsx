import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faServer, 
  faUsers, 
  faGlobe, 
  faRocket,
  faTrophy,
  faHandshake,
  faShieldHalved,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
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
            About <span className="gradient-text">Floor Hosting</span>
            </h1>
            <p className="text-xl text-gray-300">
              We're on a mission to provide the best hosting experience for gamers and developers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our <span className="gradient-text">Story</span></h2>
              <p className="text-gray-300 mb-4">
                Floor Hosting was founded in 2018 by a group of passionate gamers who were frustrated with the lack of quality hosting options available. We experienced firsthand the issues that plague many hosting providers: lag, downtime, and poor customer support.
              </p>
              <p className="text-gray-300 mb-4">
                We decided to create a hosting service that we would want to use ourselves - one that prioritizes performance, reliability, and customer satisfaction above all else.
              </p>
              <p className="text-gray-300">
                Today, Floor Hosting serves thousands of customers worldwide, from individual gamers to large communities and esports organizations. Our team has grown, but our mission remains the same: to provide the best possible hosting experience.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://wallpapers.com/images/high/rust-game-72b079fxn1h603f4.webp" alt="Minecraft game screenshot" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Mission & Values</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These core principles guide everything we do at Floor Hosting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faRocket} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-400">
                We invest in the latest hardware and optimize our infrastructure to deliver exceptional performance.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faShieldHalved} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-gray-400">
                We design our systems with redundancy in mind to ensure your servers stay online.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHandshake} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-400">
                We provide responsive, knowledgeable support from people who understand gaming.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faLeaf} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-400">
                We're committed to reducing our environmental impact through energy-efficient practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-dark-lighter">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our <span className="gradient-text">Team</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The passionate people behind Floor Hosting who work tirelessly to provide you with the best service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <img src="https://randomuser.me/api/portraits/men/92.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-1">Alex Johnson</h3>
              <p className="text-primary mb-3">CEO & Founder</p>
              <p className="text-gray-400">
                Avid gamer and tech enthusiast with over 10 years of experience in server infrastructure.
              </p>
            </div>
            
            <div className="card text-center">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-1">Sarah Chen</h3>
              <p className="text-primary mb-3">CTO</p>
              <p className="text-gray-400">
                Network engineering expert who ensures our infrastructure runs smoothly and securely.
              </p>
            </div>
            
            <div className="card text-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-1">Marcus Williams</h3>
              <p className="text-primary mb-3">Support Lead</p>
              <p className="text-gray-400">
                Former esports player who leads our customer support team with a focus on quick resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faServer} className="text-primary text-2xl" />
              </div>
              <h3 className="text-4xl font-bold mb-2">5,000+</h3>
              <p className="text-gray-400">Servers Hosted</p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-primary text-2xl" />
              </div>
              <h3 className="text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faGlobe} className="text-primary text-2xl" />
              </div>
              <h3 className="text-4xl font-bold mb-2">15</h3>
              <p className="text-gray-400">Global Locations</p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faTrophy} className="text-primary text-2xl" />
              </div>
              <h3 className="text-4xl font-bold mb-2">99.9%</h3>
              <p className="text-gray-400">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;