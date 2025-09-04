// API service for Survey Pro frontend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

class ApiService {
  constructor() {
    this.token = localStorage.getItem('auth_token');
  }

  // Set authentication token
  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

  // Get authentication headers
  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  // Generic API request method
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication methods
  async login(email, password) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (response.token) {
      this.setToken(response.token);
    }
    
    return response;
  }

  async register(name, email, password, password_confirmation, organization_name) {
    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation,
        organization_name,
      }),
    });
    
    if (response.token) {
      this.setToken(response.token);
    }
    
    return response;
  }

  async logout() {
    try {
      await this.request('/auth/logout', { method: 'POST' });
    } finally {
      this.setToken(null);
    }
  }

  async getUser() {
    return this.request('/auth/me');
  }

  // Dashboard methods
  async getDashboardMetrics() {
    return this.request('/dashboard/metrics');
  }

  async getDashboardCharts() {
    return this.request('/dashboard/charts');
  }

  async getRecentCampaigns() {
    return this.request('/dashboard/recent-campaigns');
  }

  // Channel Orchestration methods
  async getChannelStats() {
    return this.request('/channels/stats');
  }

  // Campaign Manager methods
  async getCampaignStats() {
    return this.request('/campaigns/stats');
  }

  async getCampaigns() {
    return this.request('/campaigns');
  }

  // Billing & Usage methods
  async getBillingUsage() {
    return this.request('/billing/usage');
  }

  // Integration Hub methods
  async getIntegrationStats() {
    return this.request('/integrations/stats');
  }

  async getIntegrations() {
    return this.request('/integrations');
  }

  // Admin Settings methods
  async getAdminUserStats() {
    return this.request('/admin/users/stats');
  }

  async getAdminUsers() {
    return this.request('/admin/users');
  }

  // Privacy & Consent methods
  async getPrivacyStats() {
    return this.request('/privacy/stats');
  }

  // Analytics methods
  async getAnalyticsOverview() {
    return this.request('/analytics/overview');
  }

  // Contacts & Audience methods
  async getContactStats() {
    return this.request('/contacts/stats');
  }

  async getContacts() {
    return this.request('/contacts');
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;

