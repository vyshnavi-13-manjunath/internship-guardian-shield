
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Search, Users, Eye, CheckCircle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Search,
      title: "AI-Powered Detection",
      description: "Advanced conversational AI asks smart questions to identify scam patterns and red flags in internship offers.",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Cross-Platform Verification",
      description: "Automatically verifies internships against trusted platforms like LinkedIn, Internshala, and company websites.",
      color: "text-green-600"
    },
    {
      icon: Eye,
      title: "Document Analysis",
      description: "OCR and AI analyze offer letters for fake seals, suspicious language, and fraudulent formatting.",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Community Intelligence",
      description: "Gamified reporting system where users share experiences and build a collective scam database.",
      color: "text-orange-600"
    },
    {
      icon: CheckCircle,
      title: "Scam Fingerprinting",
      description: "Tracks patterns across emails, phone numbers, and message templates to catch repeat offenders.",
      color: "text-red-600"
    },
    {
      icon: FileText,
      title: "Behavioral Mapping",
      description: "Visual network analysis connects scam elements to detect coordinated fraud rings.",
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/092a01fd-84b9-4028-ad76-e236c1efa376.png" 
              alt="Safe Start Logo" 
              className="mx-auto h-32 w-auto mb-6"
            />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Safe Start
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Internship Scam Intelligence Engine
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
              Protect yourself from internship scams with our AI-powered detection system. 
              We combine conversational AI, cross-verification, and community intelligence 
              to keep you safe from fraudulent opportunities.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => navigate('/scan')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Scan Internship Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/community')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Join Community
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center border-blue-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Scams Detected</div>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">50,000+</div>
                <div className="text-gray-600">Protected Users</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Scam Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-layered approach combines AI, community intelligence, and real-time verification 
              to provide unmatched protection against internship fraud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">How Safe Start Works</h2>
          <p className="text-xl mb-12 opacity-90">
            Simple, fast, and reliable scam detection in just a few steps
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Submit Details", desc: "Upload internship offer or recruiter information" },
              { step: "2", title: "AI Analysis", desc: "Our AI asks smart questions and analyzes patterns" },
              { step: "3", title: "Cross-Verification", desc: "We verify against trusted platforms and databases" },
              { step: "4", title: "Get Results", desc: "Receive detailed verdict with risk assessment" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Protect Yourself?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who trust Safe Start to keep them safe from internship scams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/scan')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Start Scanning Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/register')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Create Account
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
