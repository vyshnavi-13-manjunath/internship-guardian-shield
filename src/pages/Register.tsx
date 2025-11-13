
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, User, Building, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Company-specific fields
    companyName: '',
    companyEmail: '',
    companyWebsite: '',
    companyRegistration: '',
    jobTitle: '',
    // Admin fields
    adminCode: ''
  });
  const [step, setStep] = useState(1);

  const accountTypes = [
    {
      type: 'general',
      title: 'General User',
      subtitle: 'Job Seekers & Students',
      description: 'Scan internships, report scams, and earn community points',
      icon: User,
      features: [
        'Unlimited internship scans',
        'AI-powered scam detection',
        'Community reporting',
        'Trust score building',
        'Achievement badges'
      ]
    },
    {
      type: 'company',
      title: 'Verified Company',
      subtitle: 'Employers & HR Teams',
      description: 'Protect your brand and verify legitimate opportunities',
      icon: Building,
      features: [
        'Company profile verification',
        'Brand protection tools',
        'Claim company listings',
        'Upload verified offers',
        'Monitor company mentions'
      ]
    },
    {
      type: 'admin',
      title: 'Administrator',
      subtitle: 'Platform Management',
      description: 'Moderate content and manage platform operations',
      icon: Shield,
      features: [
        'Content moderation',
        'User management',
        'Verify companies',
        'Review reports',
        'Platform analytics'
      ]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAccountTypeSelect = (type: string) => {
    setAccountType(type);
    setStep(2);
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (accountType === 'company' && !formData.companyEmail.includes('@')) {
      toast.error("Please use a valid company email");
      return;
    }

    if (accountType === 'admin' && formData.adminCode !== 'SAFESTART2024') {
      toast.error("Invalid admin code");
      return;
    }

    toast.success("Account created successfully! Welcome to Safe Start.");
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const goBack = () => {
    if (step === 1) {
      navigate('/');
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={goBack}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-600 mt-2">Join Safe Start and help protect the community</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Step {step} of 2</span>
            <span className="text-sm text-gray-600">{step === 1 ? 'Choose Account Type' : 'Enter Details'}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Account Type Selection */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accountTypes.map((type) => (
              <Card 
                key={type.type} 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                onClick={() => handleAccountTypeSelect(type.type)}
              >
                <CardHeader className="text-center">
                  <type.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription className="font-medium text-blue-600">
                    {type.subtitle}
                  </CardDescription>
                  <CardDescription className="mt-2">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Choose {type.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Step 2: Registration Form */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {accountType === 'general' && <User className="h-5 w-5 mr-2 text-blue-600" />}
                  {accountType === 'company' && <Building className="h-5 w-5 mr-2 text-blue-600" />}
                  {accountType === 'admin' && <Shield className="h-5 w-5 mr-2 text-blue-600" />}
                  Create {accountTypes.find(t => t.type === accountType)?.title} Account
                </CardTitle>
                <CardDescription>
                  {accountTypes.find(t => t.type === accountType)?.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="font-semibold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="password">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password *</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Company-specific fields */}
                {accountType === 'company' && (
                  <div>
                    <h3 className="font-semibold mb-4">Company Information</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="companyName">Company Name *</Label>
                          <Input
                            id="companyName"
                            placeholder="Your Company Ltd."
                            value={formData.companyName}
                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="companyEmail">Company Email *</Label>
                          <Input
                            id="companyEmail"
                            type="email"
                            placeholder="hr@company.com"
                            value={formData.companyEmail}
                            onChange={(e) => handleInputChange('companyEmail', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="companyWebsite">Company Website</Label>
                          <Input
                            id="companyWebsite"
                            placeholder="https://company.com"
                            value={formData.companyWebsite}
                            onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="jobTitle">Your Job Title</Label>
                          <Input
                            id="jobTitle"
                            placeholder="HR Manager, Recruiter, etc."
                            value={formData.jobTitle}
                            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="companyRegistration">Company Registration Number (Optional)</Label>
                        <Input
                          id="companyRegistration"
                          placeholder="CIN or registration number"
                          value={formData.companyRegistration}
                          onChange={(e) => handleInputChange('companyRegistration', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Admin-specific fields */}
                {accountType === 'admin' && (
                  <div>
                    <h3 className="font-semibold mb-4">Administrator Verification</h3>
                    <div>
                      <Label htmlFor="adminCode">Admin Code *</Label>
                      <Input
                        id="adminCode"
                        type="password"
                        placeholder="Enter administrator access code"
                        value={formData.adminCode}
                        onChange={(e) => handleInputChange('adminCode', e.target.value)}
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Contact support for admin access code
                      </p>
                    </div>
                  </div>
                )}

                {/* Account Type Badge */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-gray-600">Account Type:</span>
                    <Badge className="ml-2 bg-blue-100 text-blue-800">
                      {accountTypes.find(t => t.type === accountType)?.title}
                    </Badge>
                  </div>
                  <Button 
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Create Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Register;
