
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  backTo?: string;
  onBack?: () => void;
  showLogo?: boolean;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  showBackButton = false, 
  backTo = "/", 
  onBack,
  showLogo = true 
}: PageHeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(backTo);
    }
  };

  return (
    <div className="flex items-center mb-8">
      {showBackButton && (
        <Button 
          variant="ghost" 
          onClick={handleBack}
          className="mr-4 hover:bg-blue-50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      )}
      <div className="flex items-center space-x-3">
        {showLogo && (
          <img 
            src="/lovable-uploads/ss-2.jpg" 
            alt="Safe Start Logo" 
            className="h-8 w-auto"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {subtitle && (
            <p className="text-gray-600 mt-2">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
