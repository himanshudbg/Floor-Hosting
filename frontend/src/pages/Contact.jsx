import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLocationDot, 
  faPhone, 
  faEnvelope,
  faCheck,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter, 
  faDiscord, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Form status
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });
    
    // Simulate form submission
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: false });
      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

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
            Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
            Have questions or need assistance? We're here to help. Reach out to our team using any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faLocationDot} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-gray-400">
                123 Gaming Street<br />
                Server City, SC 12345<br />
                United States
              </p>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faPhone} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone Number</h3>
              <p className="text-gray-400">
                Sales: +1 (555) 123-4567<br />
                Support: +1 (555) 987-6543<br />
                Available 24/7
              </p>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Address</h3>
              <p className="text-gray-400">
                Sales: sales@floorhosting.com<br />
                Support: support@floorhosting.com<br />
                Info: info@floorhosting.com
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a <span className="gradient-text">Message</span></h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              {status.submitted ? (
                <div className="card border-green-500 bg-green-500/10">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-500">Message Sent!</h3>
                      <p className="text-gray-300">
                        Thank you for contacting us. We'll get back to you shortly.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-gray-700 rounded-md focus:outline-none focus:border-primary text-gray-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-gray-700 rounded-md focus:outline-none focus:border-primary text-gray-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-gray-700 rounded-md focus:outline-none focus:border-primary text-gray-300"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-dark-light border border-gray-700 rounded-md focus:outline-none focus:border-primary text-gray-300 resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="btn btn-primary w-full flex justify-center items-center"
                  >
                    {status.submitting ? (
                      <>
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Map and Social Media */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6">Find Us <span className="gradient-text">Here</span></h2>
                <div className="rounded-xl overflow-hidden neon-border h-[300px]">
                  {/* Placeholder for map - in a real project, you would integrate Google Maps or similar */}
                  <div className="w-full h-full bg-dark-light flex items-center justify-center">
                    <p className="text-gray-400">Interactive Map Would Be Here</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Connect <span className="gradient-text">With Us</span></h2>
                <p className="text-gray-400 mb-6">
                  Follow us on social media for the latest news, updates, and promotions.
                </p>
                <div className="flex space-x-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <FontAwesomeIcon icon={faTwitter} className="text-primary text-xl" />
                  </a>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <FontAwesomeIcon icon={faDiscord} className="text-primary text-xl" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <FontAwesomeIcon icon={faLinkedin} className="text-primary text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours Section */}
      <section className="section bg-dark-lighter">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Support Hours</span></h2>
            <p className="text-gray-400 mb-8">
              Our dedicated support team is available around the clock to assist you with any questions or issues.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Technical Support</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-primary font-medium">24/7</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Saturday - Sunday</span>
                    <span className="text-primary font-medium">24/7</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Holidays</span>
                    <span className="text-primary font-medium">24/7</span>
                  </li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Sales Inquiries</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-primary font-medium">9:00 AM - 6:00 PM EST</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-primary font-medium">10:00 AM - 4:00 PM EST</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Sunday & Holidays</span>
                    <span className="text-primary font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;