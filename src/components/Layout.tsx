
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

const Layout = ({ children, showNavbar = true, showFooter = true }: LayoutProps) => {
  const location = useLocation();
  
  // Check if we're on a dashboard sub-page
  const isDashboardSubPage = location.pathname.includes('/dashboard') && 
    new URLSearchParams(location.search).get('tab') !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar showNavbar={showNavbar && !isDashboardSubPage} />
      <main className="flex-1">
        {children}
      </main>
      {showFooter && !isDashboardSubPage && <Footer />}
    </div>
  );
};

export default Layout;
