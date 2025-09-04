import React from 'react';
import { TrendingUp, TrendingDown, Users, BarChart3, Eye, MessageSquare } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Dashboard = () => {
  // Sample data for charts
  const channelData = [
    { name: 'Email', value: 45, color: '#3B82F6' },
    { name: 'SMS', value: 30, color: '#10B981' },
    { name: 'WhatsApp', value: 20, color: '#F59E0B' },
    { name: 'Voice', value: 5, color: '#EF4444' },
  ];

  const responseData = [
    { month: 'Jan', responses: 4000 },
    { month: 'Feb', responses: 3000 },
    { month: 'Mar', responses: 5000 },
    { month: 'Apr', responses: 4500 },
    { month: 'May', responses: 6000 },
    { month: 'Jun', responses: 8920 },
  ];

  const MetricCard = ({ title, value, change, changeType, icon: Icon }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          <div className="flex items-center mt-2">
            {changeType === 'up' ? (
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm ${changeType === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {change}
            </span>
          </div>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">What's happening with your surveys.</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Completed Responses"
          value="8,920"
          change="+8% from last month"
          changeType="up"
          icon={MessageSquare}
        />
        <MetricCard
          title="Active Contacts"
          value="45,230"
          change="+156 this week"
          changeType="up"
          icon={Users}
        />
        <MetricCard
          title="Survey Views"
          value="12,450"
          change="-2% from last month"
          changeType="down"
          icon={Eye}
        />
        <MetricCard
          title="Response Rate"
          value="68.5%"
          change="+5.2% from last month"
          changeType="up"
          icon={BarChart3}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Channel Breakdown */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Response by Channel</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {channelData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600">{item.name}</span>
                <span className="ml-auto text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Response Trend */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={responseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="responses" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Campaigns</h3>
        <div className="space-y-4">
          {[
            { name: 'Customer Satisfaction Q2', status: 'Active', responses: 1234, completion: 78 },
            { name: 'Product Feedback Survey', status: 'Completed', responses: 892, completion: 100 },
            { name: 'Employee Engagement', status: 'Draft', responses: 0, completion: 0 },
            { name: 'Market Research Study', status: 'Active', responses: 567, completion: 45 },
          ].map((campaign, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                <p className="text-sm text-gray-600">{campaign.responses} responses</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium">{campaign.completion}%</p>
                  <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${campaign.completion}%` }}
                    ></div>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                  campaign.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {campaign.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

