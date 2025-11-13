
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Users, Search, Eye, CheckCircle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Search,
      title: "Conversational AI Interaction",
      description: "Our smart AI asks targeted questions to identify scam patterns and red flags in internship offers, making detection accessible to everyone."
    },
    {
      icon: Shield,
      title: "Cross-Platform Verification",
      description: "We automatically verify internships against trusted platforms like Internshala and official company websites."
    },
    {
      icon: Eye,
      title: "Document Analysis",
      description: "Advanced OCR and AI technology analyzes offer letters for fake seals, suspicious language, and fraudulent formatting."
    },
    {
      icon: Users,
      title: "Community Intelligence",
      description: "A gamified reporting system where users share experiences and collectively build a comprehensive scam database."
    },
    {
      icon: CheckCircle,
      title: "Scam Fingerprinting",
      description: "We track patterns across emails, phone numbers, and message templates to catch repeat offenders instantly."
    },
    {
      icon: FileText,
      title: "Behavioral Mapping",
      description: "Visual network analysis connects scam elements to detect coordinated fraud rings and hidden patterns."
    }
  ];

  const team = [
    {
      name: "Vyshnavi Manjunath S",
      role: "Developer",
      bio: "Passionate about creating secure systems to protect job seekers from fraud.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Vinayakumar P Zingade",
      role: "Developer",
      bio: "Focused on building intelligent solutions for scam detection and prevention.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Siri MN",
      role: "Developer",
      bio: "Committed to leveraging technology to create safer online experiences.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Protected Users" },
    { number: "10,000+", label: "Scams Detected" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "24/7", label: "Protection" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">About Safe Start</h1>
            <p className="text-gray-600 mt-2">Learn more about our mission to protect job seekers from scams</p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/ss-2.jpg" 
              alt="Safe Start Logo" 
              className="mx-auto h-24 w-auto mb-6"
            />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Protecting Dreams, One Internship at a Time
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Safe Start is more than just a scam detection tool—it's a comprehensive ecosystem designed to 
              protect job seekers from the growing threat of internship fraud. Our AI-powered platform 
              combines cutting-edge technology with community intelligence to create the most effective 
              defense against scammers.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <Card>
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  To create a world where every job seeker can pursue opportunities with confidence, 
                  knowing they're protected from fraud and deception.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Protect</h3>
                  <p className="text-gray-600">
                    Shield job seekers from sophisticated scam operations targeting vulnerable students and graduates.
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Empower</h3>
                  <p className="text-gray-600">
                    Educate and equip users with knowledge and tools to identify and avoid scams independently.
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Unite</h3>
                  <p className="text-gray-600">
                    Build a community where users help protect each other through shared intelligence and reporting.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Do It</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our multi-layered approach combines artificial intelligence, community intelligence, 
              and real-time verification to provide comprehensive protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="pt-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-red-800 mb-4">The Problem We're Solving</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold text-red-700 mb-4">Growing Threat</h3>
                    <ul className="text-red-600 space-y-2 text-left">
                      <li>• 60% increase in internship scams in 2023</li>
                      <li>• Average loss of ₹15,000 per victim</li>
                      <li>• Students are primary targets</li>
                      <li>• Sophisticated social engineering tactics</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-700 mb-4">Current Solutions Fall Short</h3>
                    <ul className="text-red-600 space-y-2 text-left">
                      <li>• Generic fraud detection misses context</li>
                      <li>• Limited cross-platform verification</li>
                      <li>• No community-driven intelligence</li>
                      <li>• Reactive rather than proactive</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Experts in AI, security, and community building working together to keep you safe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-blue-600 text-white">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">Join the Fight Against Scams</h2>
              <p className="text-xl mb-6 opacity-90">
                Together, we can create a safer environment for all job seekers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/scan')}
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Start Protecting Yourself
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/community')}
                  className="border-white text-white hover:bg-blue-700"
                >
                  Join Our Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
