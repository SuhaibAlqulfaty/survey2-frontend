import React, { useState } from 'react';
import { Search, Plus, Filter, Download, Upload, Users, Mail, Phone, MapPin, Edit, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactsAudience = () => {
  const [selectedTab, setSelectedTab] = useState('contacts');
  
  const contacts = [
    { id: 1, name: 'John Smith', email: 'john.smith@email.com', phone: '+1 (555) 123-4567', location: 'New York, NY', segment: 'Premium', status: 'Active', lastActivity: '2 hours ago' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '+1 (555) 234-5678', location: 'Los Angeles, CA', segment: 'Standard', status: 'Active', lastActivity: '1 day ago' },
    { id: 3, name: 'Mike Davis', email: 'mike.davis@email.com', phone: '+1 (555) 345-6789', location: 'Chicago, IL', segment: 'Premium', status: 'Inactive', lastActivity: '1 week ago' },
    { id: 4, name: 'Emily Brown', email: 'emily.brown@email.com', phone: '+1 (555) 456-7890', location: 'Houston, TX', segment: 'Basic', status: 'Active', lastActivity: '3 hours ago' },
    { id: 5, name: 'David Wilson', email: 'david.w@email.com', phone: '+1 (555) 567-8901', location: 'Phoenix, AZ', segment: 'Standard', status: 'Active', lastActivity: '5 hours ago' },
  ];

  const segments = [
    { id: 1, name: 'Premium Customers', count: 1247, description: 'High-value customers with premium subscriptions', criteria: 'Subscription tier = Premium', lastUpdated: '2 hours ago' },
    { id: 2, name: 'New Signups', count: 892, description: 'Users who signed up in the last 30 days', criteria: 'Registration date < 30 days', lastUpdated: '1 day ago' },
    { id: 3, name: 'Inactive Users', count: 456, description: 'Users with no activity in the last 90 days', criteria: 'Last activity > 90 days', lastUpdated: '3 hours ago' },
    { id: 4, name: 'Mobile Users', count: 2134, description: 'Users primarily accessing via mobile devices', criteria: 'Primary device = Mobile', lastUpdated: '6 hours ago' },
  ];

  const ContactsTable = () => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">All Contacts</h3>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Contact
            </Button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Segment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Activity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {contact.email}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {contact.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                    {contact.location}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    contact.segment === 'Premium' ? 'bg-purple-100 text-purple-800' :
                    contact.segment === 'Standard' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {contact.segment}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    contact.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {contact.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.lastActivity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const SegmentsGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {segments.map((segment) => (
        <div key={segment.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2 bg-blue-50 rounded-lg mr-3">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{segment.name}</h3>
                <p className="text-sm text-gray-500">{segment.count.toLocaleString()} contacts</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">{segment.description}</p>
          
          <div className="bg-gray-50 p-3 rounded mb-3">
            <p className="text-xs font-medium text-gray-700 mb-1">Criteria:</p>
            <p className="text-xs text-gray-600 font-mono">{segment.criteria}</p>
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Last updated: {segment.lastUpdated}</span>
            <Button variant="outline" size="sm">View Contacts</Button>
          </div>
        </div>
      ))}
      
      {/* Add New Segment Card */}
      <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300 shadow-sm flex items-center justify-center">
        <div className="text-center">
          <Plus className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">Create New Segment</h3>
          <p className="text-sm text-gray-500 mb-4">Define criteria to automatically group contacts</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Segment
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contacts & Audience</h1>
          <p className="text-gray-600 mt-1">Manage your contact database and audience segments.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Import Contacts
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-50 rounded-lg mr-3">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Contacts</p>
              <p className="text-2xl font-bold text-gray-900">45,230</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-green-50 rounded-lg mr-3">
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Contacts</p>
              <p className="text-2xl font-bold text-gray-900">38,920</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-purple-50 rounded-lg mr-3">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Segments</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-orange-50 rounded-lg mr-3">
              <Plus className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">New This Week</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setSelectedTab('contacts')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'contacts'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            All Contacts
          </button>
          <button
            onClick={() => setSelectedTab('segments')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'segments'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Audience Segments
          </button>
        </nav>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder={selectedTab === 'contacts' ? 'Search contacts...' : 'Search segments...'} 
              className="pl-10"
            />
          </div>
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Advanced Filters
        </Button>
      </div>

      {/* Content */}
      {selectedTab === 'contacts' ? <ContactsTable /> : <SegmentsGrid />}
    </div>
  );
};

export default ContactsAudience;

