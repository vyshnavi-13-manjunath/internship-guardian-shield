
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, AlertTriangle, TrendingUp, Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Community = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('reports');
  const [searchTerm, setSearchTerm] = useState('');
  const [showReportForm, setShowReportForm] = useState(false);
  const [newReport, setNewReport] = useState({
    title: '',
    description: '',
    company: '',
    recruiterEmail: '',
    scamType: 'money-request'
  });

  // Mock data for community reports
  const communityReports = [
    {
      id: 1,
      title: "Fake Amazon Internship Scam",
      description: "They asked for ₹2000 as registration fee for Amazon internship. Completely fake!",
      company: "Amazon (Fake)",
      recruiterEmail: "hr.amazon.india@gmail.com",
      scamType: "money-request",
      upvotes: 45,
      downvotes: 2,
      comments: 12,
      reportedBy: "SafeUser123",
      timeAgo: "2 hours ago",
      status: "verified"
    },
    {
      id: 2,
      title: "Flipkart WhatsApp Scam",
      description: "Received internship offer via WhatsApp from fake Flipkart HR. Asked for personal documents.",
      company: "Flipkart (Fake)",
      recruiterEmail: "flipkart.careers@yahoo.com",
      scamType: "document-theft",
      upvotes: 32,
      downvotes: 1,
      comments: 8,
      reportedBy: "AlertStudent",
      timeAgo: "5 hours ago",
      status: "investigating"
    },
    {
      id: 3,
      title: "Microsoft Teams Fake Interview",
      description: "Scheduled fake Microsoft interview and asked for bank details for 'salary processing'.",
      company: "Microsoft (Fake)",
      recruiterEmail: "microsoft.hr.india@gmail.com",
      scamType: "banking-fraud",
      upvotes: 67,
      downvotes: 0,
      comments: 23,
      reportedBy: "TechGuard",
      timeAgo: "1 day ago",
      status: "verified"
    }
  ];

  const leaderboard = [
    { username: "ScamBuster", points: 1250, reports: 45, badge: "🏆 Top Reporter" },
    { username: "SafeGuardian", points: 980, reports: 32, badge: "🛡️ Shield Bearer" },
    { username: "AlertStudent", points: 750, reports: 28, badge: "⭐ Rising Star" },
    { username: "TechGuard", points: 620, reports: 21, badge: "🔍 Detective" },
    { username: "WiseOwl", points: 540, reports: 18, badge: "🦉 Wisdom Keeper" }
  ];

  const scamTypes = [
    { type: 'money-request', label: 'Money Request', count: 45, color: 'bg-red-100 text-red-800' },
    { type: 'document-theft', label: 'Document Theft', count: 32, color: 'bg-orange-100 text-orange-800' },
    { type: 'banking-fraud', label: 'Banking Fraud', count: 28, color: 'bg-purple-100 text-purple-800' },
    { type: 'fake-interview', label: 'Fake Interview', count: 21, color: 'bg-blue-100 text-blue-800' },
    { type: 'phishing', label: 'Phishing', count: 15, color: 'bg-yellow-100 text-yellow-800' }
  ];

  const handleReportSubmit = () => {
    if (!newReport.title.trim() || !newReport.description.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Report submitted successfully! Thank you for helping the community.");
    setShowReportForm(false);
    setNewReport({
      title: '',
      description: '',
      company: '',
      recruiterEmail: '',
      scamType: 'money-request'
    });
  };

  const handleVote = (reportId: number, voteType: 'up' | 'down') => {
    toast.success(`Vote ${voteType === 'up' ? 'up' : 'down'} recorded!`);
  };

  const filteredReports = communityReports.filter(report =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <Users className="h-8 w-8 mr-3 text-blue-600" />
                Community Intelligence
              </h1>
              <p className="text-gray-600 mt-2">Help others stay safe by sharing and learning about scams</p>
            </div>
          </div>
          <Button 
            onClick={() => setShowReportForm(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Report Scam
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">1,247</div>
                  <div className="text-sm text-gray-600">Scams Reported</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">15,432</div>
                  <div className="text-sm text-gray-600">Protected Users</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">98.5%</div>
                  <div className="text-sm text-gray-600">Detection Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Search className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">3,892</div>
                  <div className="text-sm text-gray-600">Scans Today</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-6">
              <Button
                variant={activeTab === 'reports' ? 'default' : 'outline'}
                onClick={() => setActiveTab('reports')}
              >
                Recent Reports
              </Button>
              <Button
                variant={activeTab === 'trending' ? 'default' : 'outline'}
                onClick={() => setActiveTab('trending')}
              >
                Trending Scams
              </Button>
              <Button
                variant={activeTab === 'types' ? 'default' : 'outline'}
                onClick={() => setActiveTab('types')}
              >
                Scam Types
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search reports, companies, or scam types..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Content based on active tab */}
            {activeTab === 'reports' && (
              <div className="space-y-6">
                {filteredReports.map((report) => (
                  <Card key={report.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{report.title}</CardTitle>
                          <CardDescription className="mt-2">
                            <span className="font-medium">{report.company}</span> • 
                            <span className="ml-1 text-red-600">{report.recruiterEmail}</span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={report.status === 'verified' ? 'default' : 'secondary'}
                            className={report.status === 'verified' ? 'bg-green-100 text-green-800' : ''}
                          >
                            {report.status}
                          </Badge>
                          <Badge className={scamTypes.find(s => s.type === report.scamType)?.color}>
                            {scamTypes.find(s => s.type === report.scamType)?.label}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{report.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleVote(report.id, 'up')}
                              className="text-green-600 border-green-600 hover:bg-green-50"
                            >
                              ↑ {report.upvotes}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleVote(report.id, 'down')}
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              ↓ {report.downvotes}
                            </Button>
                          </div>
                          <span className="text-sm text-gray-500">{report.comments} comments</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          by {report.reportedBy} • {report.timeAgo}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'types' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scamTypes.map((type) => (
                  <Card key={type.type} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{type.label}</h3>
                          <p className="text-gray-600">{type.count} reports</p>
                        </div>
                        <Badge className={type.color}>
                          {type.count}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Community Leaderboard
                </CardTitle>
                <CardDescription>Top contributors this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div key={user.username} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          index === 0 ? 'bg-yellow-100 text-yellow-800' :
                          index === 1 ? 'bg-gray-100 text-gray-800' :
                          index === 2 ? 'bg-orange-100 text-orange-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{user.username}</div>
                          <div className="text-xs text-gray-500">{user.badge}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-blue-600">{user.points}</div>
                        <div className="text-xs text-gray-500">{user.reports} reports</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => navigate('/scan')}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Scan Internship
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setShowReportForm(true)}
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Report Scam
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => navigate('/dashboard')}
                >
                  <Users className="h-4 w-4 mr-2" />
                  My Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Report Form Modal */}
        {showReportForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Report a Scam</CardTitle>
                <CardDescription>
                  Help protect others by reporting suspicious internship offers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Report Title *</label>
                  <Input
                    placeholder="Brief description of the scam"
                    value={newReport.title}
                    onChange={(e) => setNewReport(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Detailed Description *</label>
                  <Textarea
                    placeholder="Describe what happened, how you were contacted, what they asked for..."
                    className="min-h-[100px]"
                    value={newReport.description}
                    onChange={(e) => setNewReport(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <Input
                      placeholder="Company they claimed to represent"
                      value={newReport.company}
                      onChange={(e) => setNewReport(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Recruiter Email</label>
                    <Input
                      placeholder="Email address of the scammer"
                      value={newReport.recruiterEmail}
                      onChange={(e) => setNewReport(prev => ({ ...prev, recruiterEmail: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Scam Type</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={newReport.scamType}
                    onChange={(e) => setNewReport(prev => ({ ...prev, scamType: e.target.value }))}
                  >
                    <option value="money-request">Money Request</option>
                    <option value="document-theft">Document Theft</option>
                    <option value="banking-fraud">Banking Fraud</option>
                    <option value="fake-interview">Fake Interview</option>
                    <option value="phishing">Phishing</option>
                  </select>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button 
                    onClick={handleReportSubmit}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Submit Report
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setShowReportForm(false)}
                    className="flex-1"
                  >
                    Cancel
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

export default Community;
