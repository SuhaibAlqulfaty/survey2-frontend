import React, { useState } from 'react';
import { CreditCard, Download, Calendar, TrendingUp, TrendingDown, DollarSign, Zap, AlertCircle, Settings, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BillingUsage = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const usageData = [
    { date: '2024-01-01', email: 120, sms: 80, voice: 20, whatsapp: 40, total: 260 },
    { date: '2024-01-02', email: 150, sms: 95, voice: 25, whatsapp: 50, total: 320 },
    { date: '2024-01-03', email: 180, sms: 110, voice: 30, whatsapp: 60, total: 380 },
    { date: '2024-01-04', email: 200, sms: 120, voice: 35, whatsapp: 70, total: 425 },
    { date: '2024-01-05', email: 165, sms: 100, voice: 28, whatsapp: 55, total: 348 },
    { date: '2024-01-06', email: 220, sms: 140, voice: 40, whatsapp: 80, total: 480 },
    { date: '2024-01-07', email: 190, sms: 115, voice: 32, whatsapp: 65, total: 402 },
  ];

  const billingHistory = [
    { id: 1, date: '2024-06-01', description: 'Monthly Subscription - Pro Plan', amount: 299.00, status: 'Paid', invoice: 'INV-2024-001' },
    { id: 2, date: '2024-06-15', description: 'Additional SMS Credits (10,000)', amount: 150.00, status: 'Paid', invoice: 'INV-2024-002' },
    { id: 3, date: '2024-05-01', description: 'Monthly Subscription - Pro Plan', amount: 299.00, status: 'Paid', invoice: 'INV-2024-003' },
    { id: 4, date: '2024-04-01', description: 'Monthly Subscription - Pro Plan', amount: 299.00, status: 'Paid', invoice: 'INV-2024-004' },
    { id: 5, date: '2024-03-15', description: 'Voice Call Credits (5,000)', amount: 200.00, status: 'Paid', invoice: 'INV-2024-005' },
  ];

  const channelCosts = [
    { channel: 'Email', cost: 0.02, usage: 12450, total: 249.00, color: '#3B82F6' },
    { channel: 'SMS', cost: 0.08, usage: 8920, total: 713.60, color: '#10B981' },
    { channel: 'WhatsApp', cost: 0.15, usage: 5670, total: 850.50, color: '#F59E0B' },
    { channel: 'Voice Call', cost: 0.35, usage: 2340, total: 819.00, color: '#EF4444' },
  ];

  const MetricCard = ({ title, value, change, changeType, icon: Icon, color = 'blue' }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {change && (
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
          )}
        </div>
        <div className={`p-3 bg-${color}-50 rounded-lg`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Current Plan */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Manage Plan
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Pro Plan</h4>
            <p className="text-2xl font-bold text-gray-900">$299<span className="text-sm font-normal text-gray-500">/month</span></p>
            <p className="text-sm text-gray-600 mt-1">Includes 50,000 credits</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Credits Remaining</h4>
            <p className="text-2xl font-bold text-gray-900">32,450</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Next Billing</h4>
            <p className="text-2xl font-bold text-gray-900">Jul 1</p>
            <p className="text-sm text-gray-600 mt-1">Auto-renewal enabled</p>
          </div>
        </div>
      </div>

      {/* Usage Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Credit Usage Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                <YAxis />
                <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
                <Line type="monotone" dataKey="total" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Channel Usage</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                <YAxis />
                <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
                <Bar dataKey="email" stackId="a" fill="#3B82F6" />
                <Bar dataKey="sms" stackId="a" fill="#10B981" />
                <Bar dataKey="whatsapp" stackId="a" fill="#F59E0B" />
                <Bar dataKey="voice" stackId="a" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Channel Costs */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Channel Cost Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost per Credit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficiency</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {channelCosts.map((channel, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: channel.color }}></div>
                      <span className="text-sm font-medium text-gray-900">{channel.channel}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${channel.cost}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{channel.usage.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${channel.total.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      High
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

  const BillingHistoryTab = () => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Billing History</h3>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {billingHistory.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.amount.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    {item.invoice}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Billing & Usage</h1>
          <p className="text-gray-600 mt-1">Monitor your credit usage and manage billing settings.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Buy Credits
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Current Balance"
          value="$1,247.50"
          change="+$150 this month"
          changeType="up"
          icon={DollarSign}
          color="green"
        />
        <MetricCard
          title="Credits Used"
          value="17,550"
          change="+12% vs last month"
          changeType="up"
          icon={Zap}
          color="blue"
        />
        <MetricCard
          title="Monthly Spend"
          value="$2,632.10"
          change="-8% vs last month"
          changeType="down"
          icon={CreditCard}
          color="purple"
        />
        <MetricCard
          title="Cost per Response"
          value="$0.18"
          change="-$0.02 vs last month"
          changeType="up"
          icon={TrendingDown}
          color="orange"
        />
      </div>

      {/* Auto-recharge Alert */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center">
          <AlertCircle className="h-5 w-5 text-yellow-600 mr-3" />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-yellow-800">Auto-recharge Settings</h4>
            <p className="text-sm text-yellow-700 mt-1">
              Auto-recharge is enabled. Your account will be charged $500 when credits fall below 5,000.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'history', label: 'Billing History' },
            { id: 'settings', label: 'Settings' }
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

      {/* Tab Content */}
      {selectedTab === 'overview' && <OverviewTab />}
      {selectedTab === 'history' && <BillingHistoryTab />}
      {selectedTab === 'settings' && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Settings</h3>
          <p className="text-gray-600">Configure your auto-recharge settings, spending limits, and notification preferences.</p>
        </div>
      )}
    </div>
  );
};

export default BillingUsage;

