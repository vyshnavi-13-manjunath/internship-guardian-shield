import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, User, Award, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

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

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleBackToOverview = () => {
    setActiveTab('overview');
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'scans': return 'My Scans';
      case 'reports': return 'My Reports';
      case 'achievements': return 'Achievements';
      case 'settings': return 'Settings';
      default: return 'My Dashboard';
    }
  };

  const getPageSubtitle = () => {
    switch (activeTab) {
      case 'scans': return 'View your internship scan history';
      case 'reports': return 'Manage your community reports';
      case 'achievements': return 'Your badges and milestones';
      case 'settings': return 'Account preferences and security';
      default: return 'Track your progress and manage your account';
    }
  };

  return (
    <Layout showNavbar={activeTab === 'overview'} showFooter={activeTab === 'overview'}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PageHeader
          title={getPageTitle()}
          subtitle={getPageSubtitle()}
          showBackButton={activeTab !== 'overview'}
          onBack={activeTab !== 'overview' ? handleBackToOverview : undefined}
          backTo="/"
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-100 rounded-lg">
          {[
            { key: 'overview', label: 'Overview', icon: User },
            { key: 'scans', label: 'My Scans', icon: Shield },
            { key: 'reports', label: 'My Reports', icon: TrendingUp },
            { key: 'achievements', label: 'Achievements', icon: Award },
            { key: 'settings', label: 'Settings', icon: Settings }
          ].map(({ key, label, icon: Icon }) => (
            <Button
              key={key}
              variant={activeTab === key ? 'default' : 'ghost'}
              onClick={() => handleTabChange(key)}
              className={`flex-1 sm:flex-none ${
                activeTab === key 
                  ? 'bg-white shadow-sm' 
                  : 'hover:bg-white/50'
              }`}
            >
              <Icon className="h-4 w-4 mr-2" />
              {label}
            </Button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* User Profile Card */}
              <Card className="shadow-sm">
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
                <Card className="shadow-sm">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{userData.scanCount}</div>
                      <div className="text-gray-600">Internships Scanned</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">{userData.reportsSubmitted}</div>
                      <div className="text-gray-600">Scams Reported</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{userData.helpedUsers}</div>
                      <div className="text-gray-600">Users Helped</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Get started with common tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button 
                      variant="outline" 
                      className="h-20 flex-col hover:bg-blue-50 hover:border-blue-200"
                      onClick={() => navigate('/scan')}
                    >
                      <Shield className="h-6 w-6 mb-2 text-blue-600" />
                      Scan Internship
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-20 flex-col hover:bg-green-50 hover:border-green-200"
                      onClick={() => navigate('/community')}
                    >
                      <TrendingUp className="h-6 w-6 mb-2 text-green-600" />
                      Report Scam
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-20 flex-col hover:bg-purple-50 hover:border-purple-200"
                      onClick={() => navigate('/register')}
                    >
                      <User className="h-6 w-6 mb-2 text-purple-600" />
                      Verify Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* My Scans Tab */}
          {activeTab === 'scans' && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Recent Scans</CardTitle>
                <CardDescription>Your latest internship scans and their results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentScans.map((scan) => (
                    <div key={scan.id} className={`p-4 border rounded-lg ${scan.bgColor} hover:shadow-md transition-shadow`}>
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
                <Button variant="outline" className="w-full mt-4 hover:bg-blue-50">
                  View All Scans
                </Button>
              </CardContent>
            </Card>
          )}

          {/* My Reports Tab */}
          {activeTab === 'reports' && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>My Community Reports</CardTitle>
                <CardDescription>Scams you've reported to help the community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myReports.map((report) => (
                    <div key={report.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
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
                <Button variant="outline" className="w-full mt-4 hover:bg-green-50">
                  View All Reports
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Badges and milestones you've earned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`p-4 border rounded-lg text-center transition-all hover:shadow-md ${
                        achievement.earned 
                          ? 'bg-green-50 border-green-200 hover:bg-green-100' 
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
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences and security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Profile Settings</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start hover:bg-blue-50">
                        Edit Profile Information
                      </Button>
                      <Button variant="outline" className="w-full justify-start hover:bg-blue-50">
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full justify-start hover:bg-blue-50">
                        Verify LinkedIn Account
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start hover:bg-green-50">
                        Email Preferences
                      </Button>
                      <Button variant="outline" className="w-full justify-start hover:bg-green-50">
                        Community Updates
                      </Button>
                      <Button variant="outline" className="w-full justify-start hover:bg-green-50">
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
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
