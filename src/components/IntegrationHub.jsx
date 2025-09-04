import React, { useState } from 'react';
import { Plus, Search, Settings, CheckCircle, AlertCircle, ExternalLink, Zap, Database, Mail, BarChart3, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const IntegrationHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const integrations = [
    {
      id: 1,
      name: 'Salesforce CRM',
      description: 'Sync survey responses with your Salesforce contacts and leads',
      category: 'CRM',
      icon: Database,
      status: 'connected',
      color: 'blue',
      features: ['Contact Sync', 'Lead Scoring', 'Automated Workflows'],
      lastSync: '2 hours ago'
    },
    {
      id: 2,
      name: 'Mailchimp',
      description: 'Send surveys through Mailchimp campaigns and sync subscriber data',
      category: 'Email Marketing',
      icon: Mail,
      status: 'connected',
      color: 'yellow',
      features: ['Campaign Integration', 'Subscriber Sync', 'Segmentation'],
      lastSync: '1 day ago'
    },
    {
      id: 3,
      name: 'Google Analytics',
      description: 'Track survey performance and user behavior with Google Analytics',
      category: 'Analytics',
      icon: BarChart3,
      status: 'available',
      color: 'orange',
      features: ['Event Tracking', 'Conversion Goals', 'Custom Reports'],
      lastSync: null
    },
    {
      id: 4,
      name: 'HubSpot',
      description: 'Integrate with HubSpot CRM for comprehensive customer insights',
      category: 'CRM',
      icon: Database,
      status: 'available',
      color: 'orange',
      features: ['Contact Management', 'Deal Tracking', 'Marketing Automation'],
      lastSync: null
    },
    {
      id: 5,
      name: 'Slack',
      description: 'Get real-time notifications about survey responses in Slack',
      category: 'Communication',
      icon: Users,
      status: 'connected',
      color: 'purple',
      features: ['Real-time Notifications', 'Channel Integration', 'Custom Alerts'],
      lastSync: '30 minutes ago'
    },
    {
      id: 6,
      name: 'Zapier',
      description: 'Connect Survey Pro with 3000+ apps through Zapier automation',
      category: 'Automation',
      icon: Zap,
      status: 'available',
      color: 'orange',
      features: ['Workflow Automation', '3000+ App Connections', 'Custom Triggers'],
      lastSync: null
    },
    {
      id: 7,
      name: 'Microsoft Teams',
      description: 'Share survey results and collaborate with your team in Microsoft Teams',
      category: 'Communication',
      icon: Users,
      status: 'available',
      color: 'blue',
      features: ['Team Collaboration', 'File Sharing', 'Meeting Integration'],
      lastSync: null
    },
    {
      id: 8,
      name: 'Webhook API',
      description: 'Send survey data to any endpoint with custom webhook configurations',
      category: 'API',
      icon: Globe,
      status: 'connected',
      color: 'green',
      features: ['Custom Endpoints', 'Real-time Data', 'Flexible Payloads'],
      lastSync: '5 minutes ago'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Integrations', count: integrations.length },
    { id: 'CRM', label: 'CRM', count: integrations.filter(i => i.category === 'CRM').length },
    { id: 'Email Marketing', label: 'Email Marketing', count: integrations.filter(i => i.category === 'Email Marketing').length },
    { id: 'Analytics', label: 'Analytics', count: integrations.filter(i => i.category === 'Analytics').length },
    { id: 'Communication', label: 'Communication', count: integrations.filter(i => i.category === 'Communication').length },
    { id: 'Automation', label: 'Automation', count: integrations.filter(i => i.category === 'Automation').length },
    { id: 'API', label: 'API', count: integrations.filter(i => i.category === 'API').length },
  ];

  const filteredIntegrations = selectedCategory === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory);

  const connectedIntegrations = integrations.filter(i => i.status === 'connected');

  const IntegrationCard = ({ integration }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className={`p-3 bg-${integration.color}-50 rounded-lg mr-4`}>
            <integration.icon className={`h-6 w-6 text-${integration.color}-600`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
            <p className="text-sm text-gray-600">{integration.category}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {integration.status === 'connected' ? (
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Connected</span>
            </div>
          ) : (
            <div className="flex items-center text-gray-500">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Available</span>
            </div>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{integration.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Features:</h4>
        <div className="flex flex-wrap gap-2">
          {integration.features.map((feature, index) => (
            <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {feature}
            </span>
          ))}
        </div>
      </div>
      
      {integration.lastSync && (
        <p className="text-xs text-gray-500 mb-4">Last sync: {integration.lastSync}</p>
      )}
      
      <div className="flex space-x-2">
        {integration.status === 'connected' ? (
          <>
            <Button variant="outline" size="sm" className="flex-1">
              <Settings className="h-4 w-4 mr-2" />
              Configure
            </Button>
            <Button variant="ghost" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Connect
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Integration Hub</h1>
          <p className="text-gray-600 mt-1">Connect Survey Pro with your favorite tools and services.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            API Settings
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Request Integration
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-50 rounded-lg mr-3">
              <Zap className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Integrations</p>
              <p className="text-2xl font-bold text-gray-900">{integrations.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-green-50 rounded-lg mr-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Connected</p>
              <p className="text-2xl font-bold text-gray-900">{connectedIntegrations.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-purple-50 rounded-lg mr-3">
              <Database className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Data Synced</p>
              <p className="text-2xl font-bold text-gray-900">45.2K</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-orange-50 rounded-lg mr-3">
              <BarChart3 className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">API Calls</p>
              <p className="text-2xl font-bold text-gray-900">12.8K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search integrations..." 
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Connected Integrations */}
      {connectedIntegrations.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Connected Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {connectedIntegrations.map((integration) => (
              <IntegrationCard key={integration.id} integration={integration} />
            ))}
          </div>
        </div>
      )}

      {/* Available Integrations */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {selectedCategory === 'all' ? 'All Integrations' : `${selectedCategory} Integrations`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration) => (
            <IntegrationCard key={integration.id} integration={integration} />
          ))}
        </div>
        
        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <Zap className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No integrations found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>

      {/* API Documentation */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Globe className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900">Developer Resources</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Build custom integrations using our comprehensive API documentation and webhooks.
        </p>
        <div className="flex space-x-3">
          <Button variant="outline">
            <ExternalLink className="h-4 w-4 mr-2" />
            API Documentation
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Webhook Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationHub;

