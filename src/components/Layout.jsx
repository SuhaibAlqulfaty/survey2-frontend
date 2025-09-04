import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Search, Bell, User, Menu, BarChart3, FileText, Settings, Users, Zap, CreditCard, Plug, Shield, HelpCircle, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Layout = ({ children, currentPage = 'Dashboard', onPageChange }) => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', active: currentPage === 'Dashboard' },
    { icon: FileText, label: 'Survey Builder', active: currentPage === 'Survey Builder' },
    { icon: Zap, label: 'Channel Orchestration', active: currentPage === 'Channel Orchestration' },
    { icon: Users, label: 'Contacts & Audience', active: currentPage === 'Contacts & Audience' },
    { icon: Settings, label: 'Campaign Manager', active: currentPage === 'Campaign Manager', badge: '2' },
    { icon: BarChart3, label: 'Analytics', active: currentPage === 'Analytics' },
    { icon: CreditCard, label: 'Billing & Usage', active: currentPage === 'Billing & Usage' },
    { icon: Plug, label: 'Integration Hub', active: currentPage === 'Integration Hub' },
    { icon: Settings, label: 'Admin Settings', active: currentPage === 'Admin Settings' },
    { icon: Shield, label: 'Consent & Privacy', active: currentPage === 'Consent & Privacy' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-lg">SurveyPro</span>
            </div>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search surveys, campaigns, contacts..." 
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <span className="text-gray-600">AC</span>
              <span className="ml-1 font-medium">Acme Corp</span>
            </div>
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-gray-600" />
              </div>
              <div className="text-sm">
                <div className="font-medium">John Doe</div>
                <div className="text-gray-500 text-xs">Admin</div>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              + Create New Survey
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item, index) => (
              <div key={index} className="relative">
                <Button
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full justify-start ${
                    item.active 
                      ? 'bg-blue-50 text-blue-700 border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => onPageChange && onPageChange(item.label)}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                  {item.badge && (
                    <span className="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Button>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

