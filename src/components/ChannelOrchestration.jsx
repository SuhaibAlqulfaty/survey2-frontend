import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Zap, Plus, Settings, Play, Pause, BarChart3, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ChannelOrchestration = () => {
  const [selectedChannel, setSelectedChannel] = useState('email');

  const channels = [
    { id: 'email', name: 'Email', icon: Mail, color: 'blue', active: true, sent: 12450, delivered: 11890, opened: 8234 },
    { id: 'sms', name: 'SMS', icon: MessageSquare, color: 'green', active: true, sent: 8920, delivered: 8756, opened: 6543 },
    { id: 'whatsapp', name: 'WhatsApp', icon: MessageSquare, color: 'green', active: false, sent: 5670, delivered: 5234, opened: 4123 },
    { id: 'voice', name: 'Voice Call', icon: Phone, color: 'purple', active: true, sent: 2340, delivered: 2156, opened: 1890 },
  ];

  const campaigns = [
    { id: 1, name: 'Customer Satisfaction Q2', status: 'Active', channels: ['email', 'sms'], responses: 1234, target: 5000, completion: 78 },
    { id: 2, name: 'Product Feedback Survey', status: 'Completed', channels: ['email', 'whatsapp'], responses: 892, target: 1000, completion: 100 },
    { id: 3, name: 'Employee Engagement', status: 'Scheduled', channels: ['email', 'sms', 'voice'], responses: 0, target: 2500, completion: 0 },
  ];

  const workflows = [
    { id: 1, name: 'Standard Follow-up', description: 'Email → Wait 2 days → SMS → Wait 1 day → Voice', active: true },
    { id: 2, name: 'High Priority', description: 'Email + SMS → Wait 4 hours → Voice → Wait 1 day → WhatsApp', active: true },
    { id: 3, name: 'Gentle Reminder', description: 'Email → Wait 1 week → Email → Wait 3 days → SMS', active: false },
  ];

  const ChannelCard = ({ channel }) => (
    <div className={`bg-white p-6 rounded-lg border-2 ${selectedChannel === channel.id ? 'border-blue-500' : 'border-gray-200'} shadow-sm cursor-pointer`}
         onClick={() => setSelectedChannel(channel.id)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className={`p-3 bg-${channel.color}-50 rounded-lg mr-3`}>
            <channel.icon className={`h-6 w-6 text-${channel.color}-600`} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{channel.name}</h3>
            <div className="flex items-center mt-1">
              <div className={`w-2 h-2 rounded-full mr-2 ${channel.active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
              <span className={`text-sm ${channel.active ? 'text-green-600' : 'text-gray-500'}`}>
                {channel.active ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-600">Sent</p>
          <p className="font-semibold text-gray-900">{channel.sent.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Delivered</p>
          <p className="font-semibold text-gray-900">{channel.delivered.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Opened</p>
          <p className="font-semibold text-gray-900">{channel.opened.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Channel Orchestration</h1>
          <p className="text-gray-600 mt-1">Manage multi-channel survey distribution and automation workflows.</p>
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

      {/* Channel Overview */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Communication Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel) => (
            <ChannelCard key={channel.id} channel={channel} />
          ))}
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Active Campaigns</h3>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Campaign
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channels</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                      <div className="text-sm text-gray-500">{campaign.responses} / {campaign.target} responses</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-1">
                      {campaign.channels.map((channelId) => {
                        const channel = channels.find(c => c.id === channelId);
                        return (
                          <div key={channelId} className={`p-1 bg-${channel.color}-50 rounded`}>
                            <channel.icon className={`h-3 w-3 text-${channel.color}-600`} />
                          </div>
                        );
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${campaign.completion}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{campaign.completion}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                      campaign.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      {campaign.status === 'Active' ? (
                        <Button variant="ghost" size="sm">
                          <Pause className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Automation Workflows */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Automation Workflows</h3>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Create Workflow
            </Button>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          {workflows.map((workflow) => (
            <div key={workflow.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg mr-4 ${workflow.active ? 'bg-green-100' : 'bg-gray-200'}`}>
                  <Zap className={`h-5 w-5 ${workflow.active ? 'text-green-600' : 'text-gray-500'}`} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{workflow.name}</h4>
                  <p className="text-sm text-gray-600">{workflow.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  workflow.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {workflow.active ? 'Active' : 'Inactive'}
                </span>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelOrchestration;

