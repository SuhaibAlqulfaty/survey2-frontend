import React, { useState } from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

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
}

export default App;

