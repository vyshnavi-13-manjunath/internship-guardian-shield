
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ showNavbar = true }: { showNavbar?: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!showNavbar) return null;

  const isHomePage = location.pathname === "/";
  
  const homeNavItems = [
    { name: "Home", path: "/" },
    { name: "Scan Internship", path: "/scan" },
    { name: "Community", path: "/community" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "About", path: "/about" }
  ];

  const otherPagesNavItems = [
    { name: "Scan Internship", path: "/scan" },
    { name: "Community", path: "/community" },
    { name: "Dashboard", path: "/dashboard" }
  ];

  const navItems = isHomePage ? homeNavItems : otherPagesNavItems;

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img 
              src="/lovable-uploads/092a01fd-84b9-4028-ad76-e236c1efa376.png" 
              alt="Safe Start Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-blue-600 whitespace-nowrap">Safe Start</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive(item.path)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop Auth Buttons - Only show on home page */}
          {isHomePage && (
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/login')}
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Login
              </Button>
              <Button 
                onClick={() => navigate('/register')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Sign Up
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium text-left transition-colors ${
                    isActive(item.path)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              {isHomePage && (
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Login
                  </Button>
                  <Button 
                    onClick={() => {
                      navigate('/register');
                      setIsMenuOpen(false);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
