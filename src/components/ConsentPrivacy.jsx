import React, { useState } from 'react';
import { Shield, FileText, Users, AlertTriangle, CheckCircle, Download, Eye, Edit, Trash2, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ConsentPrivacy = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const consentTemplates = [
    {
      id: 1,
      name: 'GDPR Consent Template',
      description: 'Standard GDPR compliance template for EU users',
      type: 'GDPR',
      status: 'Active',
      usage: 12450,
      lastUpdated: '2024-05-15',
      language: 'English'
    },
    {
      id: 2,
      name: 'CCPA Privacy Notice',
      description: 'California Consumer Privacy Act compliance template',
      type: 'CCPA',
      status: 'Active',
      usage: 8920,
      lastUpdated: '2024-05-10',
      language: 'English'
    },
    {
      id: 3,
      name: 'Marketing Consent',
      description: 'Consent template for marketing communications',
      type: 'Marketing',
      status: 'Draft',
      usage: 0,
      lastUpdated: '2024-06-01',
      language: 'English'
    }
  ];

  const auditLogs = [
    {
      id: 1,
      timestamp: '2024-06-15 14:30:22',
      action: 'Consent Granted',
      user: 'john.smith@email.com',
      type: 'GDPR',
      ipAddress: '192.168.1.100',
      userAgent: 'Chrome 125.0.0.0'
    },
    {
      id: 2,
      timestamp: '2024-06-15 14:25:15',
      action: 'Data Export Request',
      user: 'sarah.j@email.com',
      type: 'GDPR',
      ipAddress: '192.168.1.101',
      userAgent: 'Firefox 126.0'
    },
    {
      id: 3,
      timestamp: '2024-06-15 14:20:08',
      action: 'Consent Withdrawn',
      user: 'mike.davis@email.com',
      type: 'Marketing',
      ipAddress: '192.168.1.102',
      userAgent: 'Safari 17.5'
    },
    {
      id: 4,
      timestamp: '2024-06-15 14:15:33',
      action: 'Data Deletion Request',
      user: 'emily.brown@email.com',
      type: 'GDPR',
      ipAddress: '192.168.1.103',
      userAgent: 'Chrome 125.0.0.0'
    }
  ];

  const dataRequests = [
    {
      id: 1,
      type: 'Data Export',
      user: 'john.doe@email.com',
      requestDate: '2024-06-10',
      status: 'Completed',
      completedDate: '2024-06-12',
      description: 'Full data export request under GDPR Article 20'
    },
    {
      id: 2,
      type: 'Data Deletion',
      user: 'sarah.johnson@email.com',
      requestDate: '2024-06-08',
      status: 'In Progress',
      completedDate: null,
      description: 'Right to be forgotten request under GDPR Article 17'
    },
    {
      id: 3,
      type: 'Data Rectification',
      user: 'mike.davis@email.com',
      requestDate: '2024-06-05',
      status: 'Completed',
      completedDate: '2024-06-06',
      description: 'Data correction request under GDPR Article 16'
    }
  ];

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Compliance Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-green-600">Compliant</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">GDPR Compliance</h3>
          <p className="text-sm text-gray-600">All GDPR requirements are met</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-green-600">Compliant</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">CCPA Compliance</h3>
          <p className="text-sm text-gray-600">California privacy laws compliant</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <span className="text-sm font-medium text-yellow-600">Review Needed</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookie Policy</h3>
          <p className="text-sm text-gray-600">Policy needs annual review</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Privacy Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {auditLogs.slice(0, 5).map((log) => (
              <div key={log.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{log.action}</p>
                    <p className="text-xs text-gray-500">{log.user} • {log.timestamp}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  log.type === 'GDPR' ? 'bg-blue-100 text-blue-800' :
                  log.type === 'CCPA' ? 'bg-purple-100 text-purple-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {log.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ConsentTemplatesTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Consent Templates</h3>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Template
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {consentTemplates.map((template) => (
          <div key={template.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                template.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {template.status}
              </span>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{template.name}</h4>
            <p className="text-sm text-gray-600 mb-4">{template.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Type:</span>
                <span className="text-gray-900">{template.type}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Usage:</span>
                <span className="text-gray-900">{template.usage.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Last Updated:</span>
                <span className="text-gray-900">{template.lastUpdated}</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="flex-1">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const DataRequestsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Data Subject Requests</h3>
        <div className="flex space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search requests..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dataRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-50 rounded-lg mr-3">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{request.type}</div>
                        <div className="text-sm text-gray-500">{request.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.requestDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      request.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      request.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.completedDate || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {request.status === 'In Progress' && (
                        <Button variant="ghost" size="sm">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const AuditLogsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Audit Trail</h3>
        <div className="flex space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search logs..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Logs
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Agent</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.timestamp}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{log.action}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      log.type === 'GDPR' ? 'bg-blue-100 text-blue-800' :
                      log.type === 'CCPA' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {log.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.ipAddress}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.userAgent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Consent & Privacy</h1>
          <p className="text-gray-600 mt-1">Manage GDPR/CCPA compliance, consent templates, and audit logs.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Compliance Report
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-50 rounded-lg mr-3">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Consents Collected</p>
              <p className="text-2xl font-bold text-gray-900">21,370</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-green-50 rounded-lg mr-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Consents</p>
              <p className="text-2xl font-bold text-gray-900">19,245</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-orange-50 rounded-lg mr-3">
              <FileText className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Data Requests</p>
              <p className="text-2xl font-bold text-gray-900">{dataRequests.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-purple-50 rounded-lg mr-3">
              <Shield className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Audit Events</p>
              <p className="text-2xl font-bold text-gray-900">{auditLogs.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: Shield },
            { id: 'templates', label: 'Consent Templates', icon: FileText },
            { id: 'requests', label: 'Data Requests', icon: Users },
            { id: 'audit', label: 'Audit Logs', icon: Eye },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                selectedTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="h-4 w-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {selectedTab === 'overview' && <OverviewTab />}
      {selectedTab === 'templates' && <ConsentTemplatesTab />}
      {selectedTab === 'requests' && <DataRequestsTab />}
      {selectedTab === 'audit' && <AuditLogsTab />}
    </div>
  );
};

export default ConsentPrivacy;

