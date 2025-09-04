import React from 'react';
import { Download, Filter, Calendar, TrendingUp, Users, Eye, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Analytics = () => {
  // Sample data for various charts
  const responseData = [
    { date: '2024-01-01', responses: 120, views: 450, completion: 85 },
    { date: '2024-01-02', responses: 150, views: 520, completion: 88 },
    { date: '2024-01-03', responses: 180, views: 600, completion: 82 },
    { date: '2024-01-04', responses: 200, views: 680, completion: 90 },
    { date: '2024-01-05', responses: 165, views: 580, completion: 87 },
    { date: '2024-01-06', responses: 220, views: 750, completion: 92 },
    { date: '2024-01-07', responses: 190, views: 650, completion: 89 },
  ];

  const channelPerformance = [
    { channel: 'Email', responses: 4500, rate: 68.5, cost: 0.12 },
    { channel: 'SMS', responses: 3200, rate: 72.3, cost: 0.08 },
    { channel: 'WhatsApp', responses: 2800, rate: 75.1, cost: 0.15 },
    { channel: 'Voice', responses: 800, rate: 45.2, cost: 0.35 },
  ];

  const demographicData = [
    { name: '18-24', value: 15, color: '#3B82F6' },
    { name: '25-34', value: 35, color: '#10B981' },
    { name: '35-44', value: 25, color: '#F59E0B' },
    { name: '45-54', value: 15, color: '#EF4444' },
    { name: '55+', value: 10, color: '#8B5CF6' },
  ];

  const satisfactionTrend = [
    { month: 'Jan', score: 7.2 },
    { month: 'Feb', score: 7.5 },
    { month: 'Mar', score: 7.8 },
    { month: 'Apr', score: 8.1 },
    { month: 'May', score: 7.9 },
    { month: 'Jun', score: 8.3 },
  ];

  const MetricCard = ({ title, value, change, changeType, icon: Icon, color = 'blue' }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          <div className="flex items-center mt-2">
            <TrendingUp className={`h-4 w-4 mr-1 ${changeType === 'up' ? 'text-green-500' : 'text-red-500'}`} />
            <span className={`text-sm ${changeType === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {change}
            </span>
          </div>
        </div>
        <div className={`p-3 bg-${color}-50 rounded-lg`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Comprehensive insights into your survey performance.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </Button>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Responses"
          value="12,847"
          change="+12.5% vs last month"
          changeType="up"
          icon={MessageSquare}
          color="blue"
        />
        <MetricCard
          title="Response Rate"
          value="68.5%"
          change="+3.2% vs last month"
          changeType="up"
          icon={TrendingUp}
          color="green"
        />
        <MetricCard
          title="Active Surveys"
          value="24"
          change="+4 vs last month"
          changeType="up"
          icon={Eye}
          color="purple"
        />
        <MetricCard
          title="Avg. Completion Time"
          value="4.2 min"
          change="-0.8 min vs last month"
          changeType="up"
          icon={Users}
          color="orange"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Response Trend */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={responseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                <YAxis />
                <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
                <Area type="monotone" dataKey="responses" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Channel Performance */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Channel Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="responses" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Demographics */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Age Demographics</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={demographicData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {demographicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Satisfaction Score */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Satisfaction Score Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={satisfactionTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Performance Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Channel Performance Details</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responses</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost per Response</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {channelPerformance.map((channel, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{channel.channel}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{channel.responses.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{channel.rate}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${channel.cost}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      +{(channel.rate * 2).toFixed(0)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

