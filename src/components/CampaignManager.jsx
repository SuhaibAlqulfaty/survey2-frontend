import React, { useState } from 'react';
import { Plus, Search, Filter, Calendar, Users, BarChart3, Play, Pause, Copy, Edit, Trash2, Eye, Target, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CampaignManager = () => {
  const [selectedTab, setSelectedTab] = useState('active');

  const campaigns = [
    {
      id: 1,
      name: 'Customer Satisfaction Q2 2024',
      description: 'Quarterly customer satisfaction survey for all premium customers',
      status: 'Active',
      type: 'Recurring',
      startDate: '2024-04-01',
      endDate: '2024-06-30',
      targetAudience: 'Premium Customers',
      targetCount: 5000,
      responses: 3420,
      responseRate: 68.4,
      channels: ['Email', 'SMS'],
      surveys: ['Customer Satisfaction Survey', 'NPS Survey'],
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      name: 'Product Feedback Collection',
      description: 'Collect feedback on new product features from beta users',
      status: 'Completed',
      type: 'One-time',
      startDate: '2024-03-15',
      endDate: '2024-03-30',
      targetAudience: 'Beta Users',
      targetCount: 1000,
      responses: 892,
      responseRate: 89.2,
      channels: ['Email', 'WhatsApp'],
      surveys: ['Product Feedback Survey'],
      lastActivity: '1 week ago'
    },
    {
      id: 3,
      name: 'Employee Engagement Survey',
      description: 'Annual employee engagement and satisfaction survey',
      status: 'Scheduled',
      type: 'Annual',
      startDate: '2024-07-01',
      endDate: '2024-07-15',
      targetAudience: 'All Employees',
      targetCount: 2500,
      responses: 0,
      responseRate: 0,
      channels: ['Email', 'SMS', 'Voice'],
      surveys: ['Employee Engagement Survey'],
      lastActivity: 'Never'
    },
    {
      id: 4,
      name: 'Market Research Study',
      description: 'Research on market trends and customer preferences',
      status: 'Active',
      type: 'One-time',
      startDate: '2024-05-01',
      endDate: '2024-05-31',
      targetAudience: 'Target Market',
      targetCount: 3000,
      responses: 1350,
      responseRate: 45.0,
      channels: ['Email', 'SMS'],
      surveys: ['Market Research Survey'],
      lastActivity: '5 hours ago'
    }
  ];

  const filteredCampaigns = campaigns.filter(campaign => {
    if (selectedTab === 'active') return campaign.status === 'Active';
    if (selectedTab === 'completed') return campaign.status === 'Completed';
    if (selectedTab === 'scheduled') return campaign.status === 'Scheduled';
    return true;
  });

  const CampaignCard = ({ campaign }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-900 mr-3">{campaign.name}</h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
              campaign.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {campaign.status}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-3">{campaign.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Target Audience</p>
              <p className="text-sm font-medium text-gray-900">{campaign.targetAudience}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Responses</p>
              <p className="text-sm font-medium text-gray-900">{campaign.responses.toLocaleString()} / {campaign.targetCount.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Response Rate</p>
              <p className="text-sm font-medium text-gray-900">{campaign.responseRate}%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Last Activity</p>
              <p className="text-sm font-medium text-gray-900">{campaign.lastActivity}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">{campaign.startDate} - {campaign.endDate}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">{campaign.channels.join(', ')}</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
              {campaign.status === 'Active' ? (
                <Button variant="ghost" size="sm">
                  <Pause className="h-4 w-4" />
                </Button>
              ) : campaign.status === 'Scheduled' ? (
                <Button variant="ghost" size="sm">
                  <Play className="h-4 w-4" />
                </Button>
              ) : null}
            </div>
          </div>

          {campaign.status === 'Active' && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="text-gray-900 font-medium">{Math.round((campaign.responses / campaign.targetCount) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${(campaign.responses / campaign.targetCount) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaign Manager</h1>
          <p className="text-gray-600 mt-1">Create and manage multi-survey campaign workflows.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Campaign
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-50 rounded-lg mr-3">
              <Target className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Campaigns</p>
              <p className="text-2xl font-bold text-gray-900">{campaigns.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-green-50 rounded-lg mr-3">
              <Play className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
              <p className="text-2xl font-bold text-gray-900">{campaigns.filter(c => c.status === 'Active').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-purple-50 rounded-lg mr-3">
              <CheckCircle className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{campaigns.filter(c => c.status === 'Completed').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-orange-50 rounded-lg mr-3">
              <Clock className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Scheduled</p>
              <p className="text-2xl font-bold text-gray-900">{campaigns.filter(c => c.status === 'Scheduled').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'all', label: 'All Campaigns' },
            { id: 'active', label: 'Active' },
            { id: 'completed', label: 'Completed' },
            { id: 'scheduled', label: 'Scheduled' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                selectedTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search campaigns..." 
              className="pl-10"
            />
          </div>
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Date Range
        </Button>
      </div>

      {/* Campaign Cards */}
      <div className="space-y-6">
        {filteredCampaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
        
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12">
            <Target className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No campaigns found</h3>
            <p className="text-gray-500 mb-4">Get started by creating your first campaign.</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignManager;

