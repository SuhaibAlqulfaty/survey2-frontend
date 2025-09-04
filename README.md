# Survey Pro Frontend

A modern, responsive React application for survey management and analytics, built with TypeScript, Tailwind CSS, and Vite.

## 🚀 Features

- **Complete Survey Management**: Create, manage, and analyze surveys
- **Multi-Channel Distribution**: Email, SMS, WhatsApp, and Voice channels
- **Real-time Analytics**: Comprehensive dashboards and reporting
- **User Management**: Role-based access control and team collaboration
- **Integration Hub**: Connect with Salesforce, Mailchimp, Slack, and more
- **GDPR Compliance**: Built-in consent and privacy management
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **HTTP Client**: Fetch API with custom service layer
- **Authentication**: JWT token-based authentication

## 📋 Prerequisites

- Node.js 18+ and npm
- Survey Pro Backend API running (see [survey2-backend](https://github.com/SuhaibAlqulfaty/survey2-backend))

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/SuhaibAlqulfaty/survey2-frontend.git
cd survey2-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env
```

Edit `.env` and update the variables according to your setup:
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_APP_NAME="Survey Pro"
VITE_APP_URL=http://localhost:5173
VITE_NODE_ENV=development
```

### 4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Layout.jsx      # Main layout component
│   ├── Dashboard.jsx   # Dashboard module
│   ├── Login.jsx       # Authentication components
│   └── ...             # Other module components
├── contexts/           # React contexts
│   └── AuthContext.jsx # Authentication context
├── services/           # API services
│   └── api.js          # Main API service
├── App.jsx            # Main application component
└── main.jsx           # Application entry point
```

## 🔌 API Integration

The frontend communicates with the Laravel backend through a comprehensive API service layer. All API calls are handled through the `ApiService` class in `src/services/api.js`.

### Authentication
- JWT token-based authentication
- Automatic token storage and retrieval
- Token refresh handling
- Secure logout functionality

### Available Endpoints
- Authentication: login, register, logout, user profile
- Dashboard: metrics, charts, recent campaigns
- Surveys: CRUD operations for surveys
- Campaigns: campaign management and statistics
- Analytics: comprehensive reporting data
- Contacts: contact and audience management
- Billing: usage and subscription management
- Integrations: third-party service connections
- Admin: user and system management
- Privacy: GDPR compliance and consent tracking

## 🎨 UI Components

The application uses a combination of custom components and shadcn/ui components for a consistent, professional design:

- **Layout Components**: Responsive sidebar navigation, header, and main content area
- **Form Components**: Input fields, buttons, dropdowns with validation
- **Data Display**: Tables, cards, metrics displays, and charts
- **Interactive Elements**: Modals, tooltips, and loading states

## 🔒 Authentication Flow

1. **Registration**: Users can create new accounts with organization setup
2. **Login**: Email/password authentication with JWT tokens
3. **Session Management**: Automatic token storage and validation
4. **Protected Routes**: Authentication required for all main application features
5. **Logout**: Secure token cleanup and redirect to login

## 📊 Module Overview

### Dashboard
Real-time metrics and analytics overview with interactive charts and key performance indicators.

### Survey Builder
Drag-and-drop interface for creating surveys with various question types and logic flows.

### Channel Orchestration
Multi-channel communication management for email, SMS, WhatsApp, and voice campaigns.

### Contacts & Audience
Comprehensive contact management with segmentation, import/export, and GDPR compliance.

### Campaign Manager
End-to-end campaign lifecycle management with progress tracking and performance metrics.

### Analytics
Advanced analytics dashboard with detailed reporting and data visualization.

### Billing & Usage
Credit management, subscription handling, and usage tracking with billing history.

### Integration Hub
Third-party service integrations including CRM, email marketing, and communication tools.

### Admin Settings
User management, role assignment, and system configuration options.

### Consent & Privacy
GDPR compliance tools with consent tracking and data subject request management.

## 🌐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:8000/api` |
| `VITE_APP_NAME` | Application name | `Survey Pro` |
| `VITE_APP_URL` | Frontend application URL | `http://localhost:5173` |
| `VITE_NODE_ENV` | Environment mode | `development` |

## 🚀 Deployment

### Static Hosting (Recommended)
The built application is a static site that can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **AWS S3 + CloudFront**: Upload the `dist/` contents to S3
- **GitHub Pages**: Use the built files for GitHub Pages deployment

### Environment Configuration for Production
Update your `.env` file for production:
```env
VITE_API_BASE_URL=https://your-backend-api.com/api
VITE_APP_NAME="Survey Pro"
VITE_APP_URL=https://your-frontend-domain.com
VITE_NODE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/SuhaibAlqulfaty/survey2-frontend/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔗 Related Repositories

- **Backend API**: [survey2-backend](https://github.com/SuhaibAlqulfaty/survey2-backend)

---

Built with ❤️ using React, TypeScript, and modern web technologies.

