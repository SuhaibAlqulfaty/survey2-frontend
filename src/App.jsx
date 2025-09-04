import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import SurveyBuilder from './components/SurveyBuilder';
import ChannelOrchestration from './components/ChannelOrchestration';
import ContactsAudience from './components/ContactsAudience';
import CampaignManager from './components/CampaignManager';
import Analytics from './components/Analytics';
import BillingUsage from './components/BillingUsage';
import IntegrationHub from './components/IntegrationHub';
import AdminSettings from './components/AdminSettings';
import ConsentPrivacy from './components/ConsentPrivacy';
import './App.css';

const AppContent = () => {
  const { isAuthenticated, loading, user } = useAuth();
  const [currentPage, setCurrentPage] = useState('Dashboard');
  const [showRegister, setShowRegister] = useState(false);

  // Debug logging
  console.log('AppContent render - isAuthenticated:', isAuthenticated, 'loading:', loading, 'user:', user);

  if (loading) {
    console.log('Showing loading state');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('User not authenticated, showing login/register');
    return showRegister ? (
      <Register onSwitchToLogin={() => setShowRegister(false)} />
    ) : (
      <Login onSwitchToRegister={() => setShowRegister(true)} />
    );
  }

  console.log('User authenticated, showing dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Survey Builder':
        return <SurveyBuilder />;
      case 'Channel Orchestration':
        return <ChannelOrchestration />;
      case 'Contacts & Audience':
        return <ContactsAudience />;
      case 'Campaign Manager':
        return <CampaignManager />;
      case 'Analytics':
        return <Analytics />;
      case 'Billing & Usage':
        return <BillingUsage />;
      case 'Integration Hub':
        return <IntegrationHub />;
      case 'Admin Settings':
        return <AdminSettings />;
      case 'Consent & Privacy':
        return <ConsentPrivacy />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;

