import { useState } from 'react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faChevronUp, 
  faHeadset,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ data
  const faqItems = [
    {
      question: "What games do you support?",
      answer: "We support a wide range of popular games including Minecraft, CS:GO, ARK: Survival Evolved, Server, Valheim, Terraria, Team Fortress 2, Garry's Mod, and many more. If you don't see your game listed, please contact our support team to check if we can host it for you."
    },
    {
      question: "How do I get started with Floor Hosting?",
      answer: "Getting started is easy! Simply select the service you're interested in, choose a plan that fits your needs, and complete the checkout process. Once your payment is processed, your server will be set up automatically and you'll receive login details via email. If you need any assistance, our support team is available 24/7."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes, we offer a 7-day money-back guarantee on all our hosting services. If you're not satisfied with our service within the first 7 days, you can request a full refund, no questions asked."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 technical support via live chat, email, and ticket system. Our support team consists of experienced professionals who can help you with any issues you might encounter, from server setup to troubleshooting."
    },
    {
      question: "Where are your servers located?",
      answer: "We have servers in over 50 locations worldwide, including North America, Europe, Asia, Australia, and South America. This global network ensures low latency for players regardless of their location."
    },
    {
      question: "Do you offer DDoS protection?",
      answer: "Yes, all our hosting plans include DDoS protection at no additional cost. Our enterprise-grade protection can mitigate attacks up to 1Tbps, ensuring your servers stay online even during large-scale attacks."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade your plan at any time through your client area. The price difference will be prorated based on the remaining time in your billing cycle. Upgrades are typically processed instantly, with no downtime for your services."
    },
    {
      question: "How do backups work?",
      answer: "We perform automatic daily backups of all servers, which are retained for 7 days. You can also create manual backups at any time through your control panel. Restoring from a backup is a simple one-click process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards (Visa, MasterCard, American Express), PayPal, and cryptocurrency (Bitcoin, Ethereum). All transactions are secure and encrypted."
    },
    {
      question: "How do I cancel my service?",
      answer: "You can cancel your service at any time through your client area. Navigate to the 'My Services' section, select the service you wish to cancel, and click on the 'Cancel' button. If you cancel before the end of your billing cycle, your service will remain active until the end of the period you've paid for."
    }
  ];

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
            Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-gray-300">
            Find answers to common questions about our services. If you can't find what you're looking for, feel free to contact us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`card transition-all duration-300 pt-7 pb-3 px-6 ${openIndex === index ? 'border-primary' : ''}`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="text-xl font-bold">{item.question}</h3>
                    <FontAwesomeIcon 
                      icon={openIndex === index ? faChevronUp : faChevronDown} 
                      className={`transition-transform duration-300 ${openIndex === index ? 'text-primary' : 'text-gray-400'}`}
                    />
                  </button>
                  <div 
                    className={`mt-4 text-gray-300 overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-89 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section bg-dark-lighter">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have <span className="gradient-text">Questions?</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our support team is here to help. Contact us through any of the channels below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHeadset} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat Support</h3>
              <p className="text-gray-400 mb-6">
                Chat with our support team in real-time. We're available 24/7 to assist you with any questions.
              </p>
              <button className="btn btn-primary">
                Start Chat
              </button>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-gray-400 mb-6">
                Send us an email and we'll get back to you as soon as possible, usually within a few hours.
              </p>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our <span className="gradient-text">Knowledge Base</span></h2>
            <p className="text-gray-400 mb-8">
              Find detailed guides, tutorials, and documentation to help you get the most out of our services.
            </p>
            <Link to="/knowledge-base" className="btn btn-primary">
              Browse Knowledge Base
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;