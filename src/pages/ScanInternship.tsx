
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, ArrowLeft, Search, Shield, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { toast } from "sonner";

const ScanInternship = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    internshipText: "",
    companyName: "",
    recruiterEmail: "",
    recruiterPhone: "",
    recruiterName: "",
    offerLetter: null as File | null
  });
  const [aiQuestions, setAiQuestions] = useState([
    { question: "Did they ask for any money or security deposit?", answer: "" },
    { question: "Is this internship from a Gmail or personal email ID?", answer: "" },
    { question: "Can you find this internship on the company's official website?", answer: "" },
    { question: "Did they send you the same message as others?", answer: "" },
    { question: "Are they pressuring you to respond quickly?", answer: "" }
  ]);
  const [scanResults, setScanResults] = useState(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, offerLetter: file }));
      toast.success("Offer letter uploaded successfully");
    }
  };

  const handleAIQuestionAnswer = (index: number, answer: string) => {
    const updatedQuestions = [...aiQuestions];
    updatedQuestions[index].answer = answer;
    setAiQuestions(updatedQuestions);
  };

  const performScamAnalysis = () => {
    const redFlags = [];
    const greenFlags = [];
    
    if (aiQuestions[0].answer.toLowerCase().includes('yes')) {
      redFlags.push("Money requested (Major red flag)");
    }
    if (aiQuestions[1].answer.toLowerCase().includes('yes')) {
      redFlags.push("Using personal email domain");
    }
    if (aiQuestions[2].answer.toLowerCase().includes('no')) {
      redFlags.push("Not found on company website");
    }
    if (aiQuestions[3].answer.toLowerCase().includes('yes')) {
      redFlags.push("Generic/mass messaging detected");
    }
    if (aiQuestions[4].answer.toLowerCase().includes('yes')) {
      redFlags.push("Pressure tactics used");
    }

    if (formData.recruiterEmail.includes('@gmail.com') || formData.recruiterEmail.includes('@yahoo.com')) {
      redFlags.push("Personal email domain used");
    } else if (formData.recruiterEmail.includes('.com') && !formData.recruiterEmail.includes('gmail')) {
      greenFlags.push("Professional email domain");
    }

    const riskScore = Math.min(100, (redFlags.length * 20) + Math.floor(Math.random() * 10));
    
    let riskLevel = "Low";
    let riskColor = "text-green-600";
    if (riskScore > 60) {
      riskLevel = "High";
      riskColor = "text-red-600";
    } else if (riskScore > 30) {
      riskLevel = "Medium";
      riskColor = "text-orange-600";
    }

    setScanResults({
      riskScore,
      riskLevel,
      riskColor,
      redFlags,
      greenFlags,
      companyVerified: Math.random() > 0.3,
      communityReports: Math.floor(Math.random() * 5),
      similarScams: Math.floor(Math.random() * 3)
    });
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.internshipText.trim()) {
        toast.error("Please provide internship details");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.companyName.trim() || !formData.recruiterEmail.trim()) {
        toast.error("Please provide company name and recruiter email");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      const unanswered = aiQuestions.filter(q => !q.answer.trim());
      if (unanswered.length > 0) {
        toast.error("Please answer all AI questions");
        return;
      }
      toast.info("Analyzing your submission...");
      setTimeout(() => {
        performScamAnalysis();
        setStep(4);
      }, 3000);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/');
    }
  };

  const restartScan = () => {
    setStep(1);
    setFormData({
      internshipText: "",
      companyName: "",
      recruiterEmail: "",
      recruiterPhone: "",
      recruiterName: "",
      offerLetter: null
    });
    setScanResults(null);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PageHeader 
          title="Internship Scam Scanner"
          subtitle="Let our AI analyze your internship offer for potential scams"
          showBackButton={true}
          onBack={handleBack}
        />

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Step {step} of 4</span>
            <span className="text-sm text-gray-600">{Math.round((step / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Basic Information */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2 text-blue-600" />
                Step 1: Internship Details
              </CardTitle>
              <CardDescription>
                Paste the internship offer or job description you received
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="internship-text">Internship Offer/Message *</Label>
                <Textarea
                  id="internship-text"
                  placeholder="Paste the entire internship offer, message, or job description here..."
                  className="min-h-[200px] mt-2"
                  value={formData.internshipText}
                  onChange={(e) => handleInputChange('internshipText', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="offer-letter">Upload Offer Letter (Optional)</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <input
                    id="offer-letter"
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="offer-letter" className="cursor-pointer">
                    <span className="text-blue-600 font-medium">Click to upload</span>
                    <span className="text-gray-500"> or drag and drop</span>
                  </label>
                  <p className="text-gray-400 text-sm mt-1">PDF, JPG, PNG up to 10MB</p>
                  {formData.offerLetter && (
                    <p className="text-green-600 mt-2">✓ {formData.offerLetter.name}</p>
                  )}
                </div>
              </div>

              <Button onClick={handleNext} className="w-full bg-blue-600 hover:bg-blue-700">
                Continue to Company Details
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Company & Recruiter Information */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Step 2: Company & Recruiter Information
              </CardTitle>
              <CardDescription>
                Provide details about the company and person who contacted you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="company-name">Company Name *</Label>
                <Input
                  id="company-name"
                  placeholder="e.g., Google, Microsoft, TCS"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="recruiter-name">Recruiter Name</Label>
                  <Input
                    id="recruiter-name"
                    placeholder="Full name of the recruiter"
                    value={formData.recruiterName}
                    onChange={(e) => handleInputChange('recruiterName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="recruiter-email">Recruiter Email *</Label>
                  <Input
                    id="recruiter-email"
                    type="email"
                    placeholder="recruiter@company.com"
                    value={formData.recruiterEmail}
                    onChange={(e) => handleInputChange('recruiterEmail', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="recruiter-phone">Phone Number (Optional)</Label>
                  <Input
                    id="recruiter-phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.recruiterPhone}
                    onChange={(e) => handleInputChange('recruiterPhone', e.target.value)}
                  />
                </div>
              </div>

              <Button onClick={handleNext} className="w-full bg-blue-600 hover:bg-blue-700">
                Continue to AI Questions
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 3: AI Questions */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-blue-600" />
                Step 3: AI Security Questions
              </CardTitle>
              <CardDescription>
                Answer these questions to help our AI detect potential red flags
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {aiQuestions.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <Label className="text-base font-medium mb-3 block">
                    {item.question}
                  </Label>
                  <div className="space-y-2">
                    {['Yes', 'No', 'Not Sure'].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option}
                          checked={item.answer === option}
                          onChange={(e) => handleAIQuestionAnswer(index, e.target.value)}
                          className="text-blue-600"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <Button onClick={handleNext} className="w-full bg-blue-600 hover:bg-blue-700">
                Analyze Internship
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Results */}
        {step === 4 && scanResults && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Scan Results
              </CardTitle>
              <CardDescription>
                Here's what our AI found about this internship offer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Risk Score */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className={`text-4xl font-bold ${scanResults.riskColor} mb-2`}>
                  {scanResults.riskScore}%
                </div>
                <div className={`text-xl font-semibold ${scanResults.riskColor} mb-2`}>
                  {scanResults.riskLevel} Risk
                </div>
                <p className="text-gray-600">
                  {scanResults.riskLevel === 'High' && "⚠️ This internship shows multiple red flags"}
                  {scanResults.riskLevel === 'Medium' && "⚡ Some concerns detected, proceed with caution"}
                  {scanResults.riskLevel === 'Low' && "✅ This internship appears to be legitimate"}
                </p>
              </div>

              {/* Verification Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className={`text-lg font-semibold ${scanResults.companyVerified ? 'text-green-600' : 'text-red-600'}`}>
                    {scanResults.companyVerified ? '✅ Verified' : '❌ Not Found'}
                  </div>
                  <div className="text-sm text-gray-600">Company Profile</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className={`text-lg font-semibold ${scanResults.communityReports === 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {scanResults.communityReports}
                  </div>
                  <div className="text-sm text-gray-600">Community Reports</div>
                </div>
              </div>

              {/* Red Flags */}
              {scanResults.redFlags.length > 0 && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">⚠️ Red Flags Detected:</h3>
                  <ul className="list-disc list-inside text-red-700 space-y-1">
                    {scanResults.redFlags.map((flag, index) => (
                      <li key={index}>{flag}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Green Flags */}
              {scanResults.greenFlags.length > 0 && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">✅ Positive Indicators:</h3>
                  <ul className="list-disc list-inside text-green-700 space-y-1">
                    {scanResults.greenFlags.map((flag, index) => (
                      <li key={index}>{flag}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Similar Scams */}
              {scanResults.similarScams > 0 && (
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Similar Scams Found:</h3>
                  <p className="text-orange-700">
                    We found {scanResults.similarScams} similar scam(s) in our database with matching patterns.
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={restartScan}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Scan Another Internship
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/community')}
                  className="flex-1"
                >
                  Report to Community
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default ScanInternship;
