
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/092a01fd-84b9-4028-ad76-e236c1efa376.png" 
                alt="Safe Start Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Safe Start</span>
            </div>
            <p className="text-gray-300 mb-4">
              Protecting job seekers from internship scams through AI-powered detection 
              and community intelligence. Your safety is our priority.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Safe Start. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigate('/scan')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Scan Internship
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/community')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Community
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/dashboard')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@safestart.com" className="text-gray-300 hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/help')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/privacy')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/terms')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
