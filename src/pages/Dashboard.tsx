
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, TrendingUp, User, Award, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const userData = {
    name: "John Doe",
    email: "john.doe@email.com",
    accountType: "General User",
    joinDate: "March 2024",
    trustScore: 85,
    points: 1250,
    badge: "🛡️ Shield Bearer",
    scanCount: 23,
    reportsSubmitted: 8,
    helpedUsers: 156
  };

  const recentScans = [
    {
      id: 1,
      internship: "Amazon Summer Internship",
      risk: "Low",
      riskColor: "text-green-600",
      bgColor: "bg-green-50",
      date: "2 hours ago",
      status: "Safe"
    },
    {
      id: 2,
      internship: "Microsoft Developer Program",
      risk: "High",
      riskColor: "text-red-600",
      bgColor: "bg-red-50",
      date: "1 day ago",
      status: "Scam Detected"
    },
    {
      id: 3,
      internship: "Google Tech Internship",
      risk: "Medium",
      riskColor: "text-orange-600",
      bgColor: "bg-orange-50",
      date: "3 days ago",
      status: "Proceed with Caution"
    }
  ];

  const myReports = [
    {
      id: 1,
      title: "Fake Tesla Internship",
      status: "Verified",
      upvotes: 23,
      comments: 7,
      date: "5 days ago"
    },
    {
      id: 2,
      title: "Apple WhatsApp Scam",
      status: "Under Review",
      upvotes: 12,
      comments: 3,
      date: "1 week ago"
    }
  ];

  const achievements = [
    { icon: "🎯", title: "First Scan", description: "Completed your first internship scan", earned: true },
    { icon: "🛡️", title: "Community Guardian", description: "Reported 5 scams to help others", earned: true },
    { icon: "⭐", title: "Rising Star", description: "Earned 1000+ community points", earned: true },
    { icon: "🔍", title: "Detective", description: "Successfully identified 10 scams", earned: false },
    { icon: "🏆", title: "Top Contributor", description: "Became a top community contributor", earned: false },
    { icon: "👑", title: "Elite Guardian", description: "Protected 500+ users from scams", earned: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
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
            <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
            <p className="text-gray-600 mt-2">Track your progress and manage your account</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8 border-b">
          <Button
            variant={activeTab === 'overview' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('overview')}
            className="border-b-2 border-transparent data-[state=active]:border-blue-600"
          >
            <User className="h-4 w-4 mr-2" />
            Overview
          </Button>
          <Button
            variant={activeTab === 'scans' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('scans')}
            className="border-b-2 border-transparent data-[state=active]:border-blue-600"
          >
            <Shield className="h-4 w-4 mr-2" />
            My Scans
          </Button>
          <Button
            variant={activeTab === 'reports' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('reports')}
            className="border-b-2 border-transparent data-[state=active]:border-blue-600"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            My Reports
          </Button>
          <Button
            variant={activeTab === 'achievements' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('achievements')}
            className="border-b-2 border-transparent data-[state=active]:border-blue-600"
          >
            <Award className="h-4 w-4 mr-2" />
            Achievements
          </Button>
          <Button
            variant={activeTab === 'settings' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('settings')}
            className="border-b-2 border-transparent data-[state=active]:border-blue-600"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* User Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Profile Information</span>
                  <Badge className="bg-blue-100 text-blue-800">{userData.accountType}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">{userData.name}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Email:</strong> {userData.email}</p>
                      <p><strong>Member since:</strong> {userData.joinDate}</p>
                      <p><strong>Badge:</strong> {userData.badge}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Trust Score</span>
                        <span className="text-2xl font-bold text-green-600">{userData.trustScore}/100</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-green-600 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${userData.trustScore}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{userData.points}</div>
                      <div className="text-sm text-gray-600">Community Points</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{userData.scanCount}</div>
                    <div className="text-gray-600">Internships Scanned</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{userData.reportsSubmitted}</div>
                    <div className="text-gray-600">Scams Reported</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{userData.helpedUsers}</div>
                    <div className="text-gray-600">Users Helped</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Get started with common tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col"
                    onClick={() => navigate('/scan')}
                  >
                    <Shield className="h-6 w-6 mb-2" />
                    Scan Internship
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col"
                    onClick={() => navigate('/community')}
                  >
                    <TrendingUp className="h-6 w-6 mb-2" />
                    Report Scam
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col"
                    onClick={() => navigate('/register')}
                  >
                    <User className="h-6 w-6 mb-2" />
                    Verify Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* My Scans Tab */}
        {activeTab === 'scans' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Scans</CardTitle>
                <CardDescription>Your latest internship scans and their results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentScans.map((scan) => (
                    <div key={scan.id} className={`p-4 border rounded-lg ${scan.bgColor}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{scan.internship}</h3>
                          <p className="text-sm text-gray-600">{scan.date}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={`${scan.riskColor} bg-transparent border-current`}>
                            {scan.risk} Risk
                          </Badge>
                          <p className={`text-sm font-medium ${scan.riskColor}`}>{scan.status}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Scans
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* My Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Community Reports</CardTitle>
                <CardDescription>Scams you've reported to help the community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myReports.map((report) => (
                    <div key={report.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{report.title}</h3>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <span>↑ {report.upvotes} upvotes</span>
                            <span>💬 {report.comments} comments</span>
                            <span>{report.date}</span>
                          </div>
                        </div>
                        <Badge 
                          variant={report.status === 'Verified' ? 'default' : 'secondary'}
                          className={report.status === 'Verified' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {report.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Badges and milestones you've earned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`p-4 border rounded-lg text-center ${
                        achievement.earned 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200 opacity-60'
                      }`}
                    >
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <h3 className="font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      {achievement.earned && (
                        <Badge className="mt-2 bg-green-100 text-green-800">Earned</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences and security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Profile Settings</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        Edit Profile Information
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Verify LinkedIn Account
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        Email Preferences
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Community Updates
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Security Alerts
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-4 text-red-600">Danger Zone</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                      Export Data
                    </Button>
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                      Delete Account
                    </Button>
                  </div>
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

export default Dashboard;
