# Comprehensive Frontend Documentation

## Table of Contents
1. [System Overview](#system-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Component Structure](#component-structure)
5. [Authentication & Authorization](#authentication--authorization)
6. [Dashboard Components](#dashboard-components)
7. [API Integration](#api-integration)
8. [State Management](#state-management)
9. [UI/UX Features](#uiux-features)
10. [Deployment Guide](#deployment-guide)
11. [Development Guide](#development-guide)
12. [Troubleshooting](#troubleshooting)

## System Overview

SilentWatch Frontend is a comprehensive React-based security analysis platform that provides real-time monitoring and analysis capabilities for:

- **Memory Analysis**: Advanced malware detection using machine learning
- **Network Analysis**: Port scanning detection and traffic monitoring
- **Phishing Detection**: URL analysis and threat assessment
- **Threat Intelligence**: Centralized threat data management
- **Device Management**: Enterprise device onboarding and monitoring

### Key Features

- **Real-time Dashboards**: Live monitoring of security events
- **Role-based Access Control**: Granular permissions system
- **Enterprise Integration**: Multi-tenant architecture
- **Responsive Design**: Mobile and desktop optimized
- **Advanced Analytics**: ML-powered insights and visualizations

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    Frontend Layer                              │
│  ┌─────────────────┐  ┌─────────────────────────────────────┐  │
│  │   React App     │  │        Component Library          │  │
│  │   (Main App)    │  │        (Reusable UI)               │  │
│  └─────────────────┘  └─────────────────────────────────────┘  │
└─────────────────────┬───────────────────────────────────────────┘
                      │
┌─────────────────────┴───────────────────────────────────────────┐
│                    State Management Layer                      │
│  ┌─────────────────┐  ┌─────────────────────────────────────┐  │
│  │   Context API    │  │        Custom Hooks                │  │
│  │   (Auth, Theme)  │  │        (Business Logic)            │  │
│  └─────────────────┘  └─────────────────────────────────────┘  │
└─────────────────────┬───────────────────────────────────────────┘
                      │
┌─────────────────────┴───────────────────────────────────────────┐
│                    Service Layer                                │
│  ┌─────────────────┐  ┌─────────────────────────────────────┐  │
│  │   API Services   │  │        Firebase Services           │  │
│  │   (HTTP Calls)   │  │        (Real-time Data)            │  │
│  └─────────────────┘  └─────────────────────────────────────┘  │
└─────────────────────┬───────────────────────────────────────────┘
                      │
┌─────────────────────┴───────────────────────────────────────────┐
│                    Backend Services                             │
│  ┌─────────────────┐  ┌─────────────────────────────────────┐  │
│  │   Malware       │  │        Network Analysis            │  │
│  │   Analysis      │  │        Backend                     │  │
│  └─────────────────┘  └─────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Component Architecture

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components
│   ├── auth/            # Authentication components
│   ├── malwareAnalysis/ # Memory analysis components
│   ├── networkDashboard/# Network analysis components
│   └── compliance/      # Compliance components
├── pages/               # Page-level components
├── contexts/            # React contexts
├── hooks/               # Custom hooks
├── services/            # API services
└── utils/               # Utility functions
```

## Technology Stack

### Core Technologies

- **React 18.3.1**: Modern React with hooks and concurrent features
- **React Router 6.28.0**: Client-side routing
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Firebase 11.10.0**: Authentication and real-time database

### Key Dependencies

```json
{
  "dependencies": {
    "@heroicons/react": "^2.2.0",
    "axios": "^1.10.0",
    "chart.js": "^4.5.0",
    "firebase": "^11.10.0",
    "jspdf": "^3.0.3",
    "lucide-react": "^0.544.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^4.10.1",
    "react-router-dom": "^6.28.0",
    "react-toastify": "^11.0.5",
    "recharts": "^3.1.0",
    "sonner": "^2.0.6"
  }
}
```

### Development Tools

- **Create React App**: Build tooling and development server
- **ESLint**: Code linting and formatting
- **Jest**: Testing framework
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Component Structure

### 1. Common Components

#### Header Component
```jsx
// src/components/common/Header.jsx
const Header = ({ pageType, navLinks, scrollToSection }) => {
  // Navigation and authentication UI
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Header content */}
    </header>
  );
};
```

**Features:**
- Responsive navigation
- User authentication status
- Theme toggle
- Mobile menu

#### Loading Components
```jsx
// src/components/common/LoadingSpinner.jsx
const LoadingSpinner = ({ text, size = "medium" }) => {
  return (
    <div className="flex items-center justify-center">
      <div className={`animate-spin rounded-full border-4 border-t-4 border-indigo-200 border-t-indigo-600 ${size}`}></div>
      {text && <span className="ml-3 text-gray-600">{text}</span>}
    </div>
  );
};
```

**Loading Components:**
- `LoadingSpinner`: Basic loading indicator
- `LoadingOverlay`: Full-screen loading overlay
- `LoadingSkeleton`: Content placeholder
- `LoadingWrapper`: Conditional loading wrapper

### 2. Authentication Components

#### AuthContext
```jsx
// src/contexts/AuthContext.jsx
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const [userRole, setUserRole] = useState(null);

  const hasPermission = useCallback((permission) => {
    return permissions.includes(permission) || permissions.includes('*');
  }, [permissions]);

  return (
    <AuthContext.Provider value={{
      user, userProfile, userRole, permissions,
      hasPermission, hasAnyPermission, ROLES
    }}>
      {children}
    </AuthContext.Provider>
  );
};
```

#### Role-Based Access Control
```jsx
// src/components/auth/RoleBasedRoute.jsx
const RoleBasedRoute = ({ children, requiredPermissions }) => {
  const { hasAnyPermission } = useAuth();
  
  if (!hasAnyPermission(requiredPermissions)) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  return children;
};
```

**Permission System:**
- **SUPER_ADMIN**: Full system access
- **SECURITY_ADMIN**: Security operations and user management
- **SECURITY_ANALYST**: Security analysis and incident response
- **ENDPOINT_SECURITY_ANALYST**: Endpoint security and device management
- **NETWORK_ADMIN**: Network security management
- **PHISHING_ANALYST**: Phishing detection and analysis
- **READONLY_USER**: View-only access
- **GUEST**: Limited dashboard access

### 3. Dashboard Components

#### Memory Analysis Dashboard
```jsx
// src/components/malwareAnalysis/dashboard.jsx
const Dashboard = memo(() => {
  const [processList, setProcessList] = useState([]);
  const [isScanning, setIsScanning] = useState(false);
  const [predictionData, setPredictionData] = useState(null);
  const [alerts, setAlerts] = useState([]);

  const handleScan = async () => {
    // Memory analysis initiation
  };

  return (
    <div>
      {/* Device Selection */}
      <DeviceSelector />
      
      {/* Action Buttons */}
      <ScanControls onScan={handleScan} />
      
      {/* Results Display */}
      <ResultsDisplay />
    </div>
  );
});
```

**Key Features:**
- Real-time scan monitoring
- Process tree visualization
- ML prediction display
- Alert management
- Process termination capabilities

#### Network Dashboard
```jsx
// src/pages/NetworkDashboard.jsx
const NetworkDashboard = () => {
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'live', name: 'Live Monitor', icon: '🔴' },
    { id: 'analysis', name: 'Analysis', icon: '🔍' },
    { id: 'results', name: 'Results', icon: '📈' },
    { id: 'security', name: 'Security', icon: '🛡️' },
    { id: 'metrics', name: 'Metrics', icon: '📊' }
  ];

  return (
    <div>
      {/* Section Navigation */}
      <SectionNavigation sections={sections} />
      
      {/* Content Rendering */}
      <SectionContent activeSection={activeSection} />
    </div>
  );
};
```

**Network Dashboard Features:**
- Live traffic monitoring
- File upload and analysis
- Real-time alerts
- IP blocking management
- Firewall rule generation
- Performance metrics

### 4. Data Visualization Components

#### Chart Components
```jsx
// src/components/networkDashboard/ClusterChart.jsx
const ClusterChart = ({ analysisResults }) => {
  const chartData = useMemo(() => {
    // Process analysis results for chart display
    return {
      labels: ['Normal', 'Anomalous'],
      datasets: [{
        data: [normalCount, anomalousCount],
        backgroundColor: ['#10B981', '#EF4444']
      }]
    };
  }, [analysisResults]);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Cluster Analysis</h3>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};
```

**Visualization Components:**
- **ClusterChart**: DBSCAN clustering visualization
- **ROCCurve**: Model performance metrics
- **ConfusionMatrix**: Classification accuracy
- **LiveTrafficChart**: Real-time network monitoring
- **MetricsCards**: Key performance indicators

## Authentication & Authorization

### Firebase Authentication

#### Authentication Flow
```jsx
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

#### Authentication Context
```jsx
// src/contexts/AuthContext.jsx
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await fetchUserProfile(currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, userProfile, permissions }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### Role-Based Access Control

#### Permission System
```jsx
// Permission definitions
export const ROLES = {
  SUPER_ADMIN: {
    level: 1,
    permissions: ['*'],
    description: 'Full system access and administration'
  },
  SECURITY_ADMIN: {
    level: 2,
    permissions: [
      'malware:full',
      'network:full', 
      'phishing:full',
      'users:manage',
      'settings:configure'
    ],
    description: 'Security operations and user management'
  },
  // ... other roles
};
```

#### Permission Gates
```jsx
// src/components/auth/PermissionGate.jsx
const PermissionGate = ({ permission, children, fallback }) => {
  const { hasPermission } = useAuth();
  
  if (!hasPermission(permission)) {
    return fallback || <div>Access Denied</div>;
  }
  
  return children;
};
```

### Enterprise Integration

#### Multi-tenant Architecture
```jsx
// Domain-based role assignment
const domainRoleMap = {
  'eflglobal.com': 'SECURITY_ADMIN',
  'security.eflglobal.com': 'SECURITY_ANALYST',
  'endpoint.eflglobal.com': 'ENDPOINT_SECURITY_ANALYST',
  'network.eflglobal.com': 'NETWORK_ADMIN',
  'phishing.eflglobal.com': 'PHISHING_ANALYST'
};
```

#### Device Management
```jsx
// src/components/deviceManagement/DeviceManagement.jsx
const DeviceManagement = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleDeviceApproval = async (deviceId) => {
    // Approve device for organization
  };

  return (
    <div>
      <DeviceList devices={devices} onSelect={setSelectedDevice} />
      <DeviceDetails device={selectedDevice} onApprove={handleDeviceApproval} />
    </div>
  );
};
```

## API Integration

### Service Layer

#### API Service
```jsx
// src/services/apiService.js
export const apiService = {
  // Memory Analysis APIs
  startMemoryCapture: async (token, userEmail, macAddress) => {
    const response = await axios.post('/capture-memory', {
      user_email: userEmail,
      mac_address: macAddress
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },

  getScanStatus: async (token, userEmail, macAddress) => {
    const response = await axios.get('/scan-status', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },

  // Network Analysis APIs
  analyzeNetworkData: async (fileData) => {
    const response = await axios.post('/api/analyze', fileData);
    return response.data;
  },

  startLiveMonitoring: async () => {
    const response = await axios.post('/api/live/start');
    return response.data;
  }
};
```

#### Firebase Integration
```jsx
// src/services/firebaseService.js
export const firebaseService = {
  // Real-time data subscriptions
  subscribeToScanStatus: (companyDomain, deviceId, callback) => {
    const scanStatusRef = doc(db, 'companies', companyDomain, 'managedendpoints', deviceId, 'live_scan_status', 'status');
    return onSnapshot(scanStatusRef, callback);
  },

  // Data fetching
  fetchDevices: async (companyDomain) => {
    const devicesRef = collection(db, 'companies', companyDomain, 'managedendpoints');
    const snapshot = await getDocs(devicesRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  // Data updates
  updateScanStatus: async (companyDomain, deviceId, status) => {
    const scanStatusRef = doc(db, 'companies', companyDomain, 'managedendpoints', deviceId, 'live_scan_status', 'status');
    await updateDoc(scanStatusRef, status);
  }
};
```

### Error Handling

#### API Error Handling
```jsx
// src/utils/errorHandler.js
export const handleApiError = (error) => {
  if (axios.isAxiosError(error)) {
    switch (error.response?.status) {
      case 401:
        return 'Authentication required. Please log in again.';
      case 403:
        return 'Access denied. Insufficient permissions.';
      case 404:
        return 'Resource not found.';
      case 409:
        return 'Conflict. Resource already exists.';
      case 500:
        return 'Internal server error. Please try again later.';
      default:
        return 'An unexpected error occurred.';
    }
  }
  return 'Network error. Please check your connection.';
};
```

## State Management

### Context API Usage

#### Authentication Context
```jsx
// src/contexts/AuthContext.jsx
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

#### Enterprise Context
```jsx
// src/contexts/EnterpriseAuthContext.jsx
export const EnterpriseAuthProvider = ({ children }) => {
  const [organization, setOrganization] = useState(null);
  const [devices, setDevices] = useState([]);
  const [users, setUsers] = useState([]);

  const value = {
    organization,
    devices,
    users,
    setOrganization,
    setDevices,
    setUsers
  };

  return (
    <EnterpriseAuthContext.Provider value={value}>
      {children}
    </EnterpriseAuthContext.Provider>
  );
};
```

### Custom Hooks

#### Audit Logging Hook
```jsx
// src/hooks/useAuditLogging.js
export const useAuditLogging = () => {
  const { user } = useAuth();

  const logSecurityEvent = useCallback(async (eventType, eventData) => {
    try {
      const auditLog = {
        eventType,
        eventData,
        userId: user?.uid,
        userEmail: user?.email,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ipAddress: '127.0.0.1' // In production, get actual IP
      };

      await firebaseService.logAuditEvent(auditLog);
    } catch (error) {
      console.error('Failed to log audit event:', error);
    }
  }, [user]);

  return { logSecurityEvent };
};
```

#### Process Termination Hook
```jsx
// src/hooks/useProcessTermination.js
export const useProcessTermination = (auth) => {
  const [isKillDialogActive, setIsKillDialogActive] = useState(false);
  const [processToKill, setProcessToKill] = useState(null);

  const handleKillProcess = useCallback((process) => {
    setProcessToKill(process);
    setIsKillDialogActive(true);
  }, []);

  const confirmKillProcess = useCallback(async (refreshCallback) => {
    try {
      await apiService.terminateProcess(processToKill.PID);
      toast.success(`Process ${processToKill.PID} terminated successfully`);
      if (refreshCallback) refreshCallback();
    } catch (error) {
      toast.error('Failed to terminate process');
    } finally {
      setIsKillDialogActive(false);
      setProcessToKill(null);
    }
  }, [processToKill]);

  return {
    isKillDialogActive,
    processToKill,
    handleKillProcess,
    confirmKillProcess,
    setIsKillDialogActive
  };
};
```

## UI/UX Features

### Responsive Design

#### Mobile-First Approach
```css
/* Tailwind CSS responsive classes */
.container {
  @apply w-full px-4 sm:px-6 lg:px-8;
}

.grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4;
}

.card {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 p-6;
}
```

#### Breakpoint System
- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up
- **2xl**: 1536px and up

### Theme System

#### Dark/Light Mode Toggle
```jsx
// src/components/common/ThemeToggle.jsx
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
```

### Loading States

#### Loading Overlay
```jsx
// src/components/common/LoadingOverlay.jsx
const LoadingOverlay = ({ isVisible, message, subMessage }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-4 border-indigo-200 border-t-indigo-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{message}</h3>
          <p className="text-gray-600">{subMessage}</p>
        </div>
      </div>
    </div>
  );
};
```

#### Skeleton Loading
```jsx
// src/components/common/LoadingSkeleton.jsx
const LoadingSkeleton = ({ lines = 3, height = "h-4" }) => {
  return (
    <div className="animate-pulse">
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className={`bg-gray-200 rounded ${height} mb-2`}></div>
      ))}
    </div>
  );
};
```

### Notifications

#### Toast Notifications
```jsx
// Using react-toastify
import { toast } from 'react-toastify';

// Success notification
toast.success('Analysis completed successfully!');

// Error notification
toast.error('Failed to start analysis. Please try again.');

// Info notification
toast.info('Scan initiated. Monitoring progress...');

// Warning notification
toast.warn('No devices found for your organization.');
```

#### Sonner Notifications
```jsx
// Using sonner for modern notifications
import { toast } from 'sonner';

// Rich notifications with actions
toast.success('Analysis Complete', {
  description: 'Memory analysis completed successfully',
  action: {
    label: 'View Results',
    onClick: () => navigate('/results')
  }
});
```

## Deployment Guide

### Build Configuration

#### Package.json Scripts
```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "set CI=false && react-scripts build",
    "build:ci": "react-scripts build",
    "build:test": "node build-test.js",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

#### Environment Configuration
```bash
# .env.development
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# Backend API URLs
REACT_APP_MALWARE_API_URL=http://localhost:5000
REACT_APP_NETWORK_API_URL=http://localhost:5001
```

### Production Build

#### Build Process
```bash
# Install dependencies
npm install

# Create production build
npm run build

# Test build locally
npm run build:test
```

#### Build Optimization
```javascript
// build-test.js
const fs = require('fs');
const path = require('path');

// Check if build was successful
const buildPath = path.join(__dirname, 'build');
if (fs.existsSync(buildPath)) {
  console.log('✅ Build successful');
  console.log('📁 Build directory:', buildPath);
  
  // Check for common issues
  const indexHtml = path.join(buildPath, 'index.html');
  if (fs.existsSync(indexHtml)) {
    console.log('✅ index.html found');
  }
} else {
  console.log('❌ Build failed');
  process.exit(1);
}
```

### Deployment Options

#### Netlify Deployment
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Docker Deployment
```dockerfile
# Dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Nginx Configuration
```nginx
# nginx.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

## Development Guide

### Getting Started

#### Prerequisites
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher
- Firebase project setup
- Backend services running

#### Installation
```bash
# Clone repository
git clone <repository-url>
cd MalwareAnalysis-Frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Configure Firebase
# Add your Firebase configuration to .env.local

# Start development server
npm start
```

### Development Workflow

#### Code Structure
```
src/
├── components/          # Reusable components
│   ├── common/         # Shared components
│   ├── auth/           # Authentication components
│   ├── malwareAnalysis/# Memory analysis components
│   └── networkDashboard/# Network analysis components
├── pages/              # Page components
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── services/           # API services
├── utils/              # Utility functions
└── images/             # Static images
```

#### Component Development
```jsx
// Component template
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const MyComponent = ({ prop1, prop2 }) => {
  const { user, hasPermission } = useAuth();
  const [state, setState] = useState(null);

  useEffect(() => {
    // Component initialization
  }, []);

  const handleAction = () => {
    // Handle user actions
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Component content */}
    </div>
  );
};

export default MyComponent;
```

### Testing

#### Unit Testing
```jsx
// src/components/__tests__/MyComponent.test.js
import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  test('renders correctly', () => {
    render(<MyComponent prop1="test" />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  test('handles user interaction', () => {
    render(<MyComponent />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('Updated Text')).toBeInTheDocument();
  });
});
```

#### Integration Testing
```jsx
// src/pages/__tests__/Dashboard.test.js
import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider } from '../../contexts/AuthContext';
import Dashboard from '../Dashboard';

const renderWithAuth = (component) => {
  return render(
    <AuthProvider>
      {component}
    </AuthProvider>
  );
};

describe('Dashboard Integration', () => {
  test('loads dashboard with authentication', async () => {
    renderWithAuth(<Dashboard />);
    
    await waitFor(() => {
      expect(screen.getByText('Memory Analysis Dashboard')).toBeInTheDocument();
    });
  });
});
```

### Code Quality

#### ESLint Configuration
```json
{
  "extends": [
    "react-app",
    "react-app/jest"
  ],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "warn",
    "prefer-const": "error"
  }
}
```

#### Pre-commit Hooks
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "git add"
    ]
  }
}
```

## Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear React build cache
npm start -- --reset-cache
```

#### Firebase Connection Issues
```javascript
// Check Firebase configuration
console.log('Firebase config:', firebaseConfig);

// Verify authentication
import { auth } from './firebase';
console.log('Auth instance:', auth);
```

#### API Connection Issues
```javascript
// Check API endpoints
const apiUrl = process.env.REACT_APP_MALWARE_API_URL;
console.log('API URL:', apiUrl);

// Test API connectivity
fetch(`${apiUrl}/health`)
  .then(response => response.json())
  .then(data => console.log('API Health:', data))
  .catch(error => console.error('API Error:', error));
```

### Performance Optimization

#### Bundle Analysis
```bash
# Analyze bundle size
npm install --save-dev webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

#### Code Splitting
```jsx
// Lazy load components
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
```

#### Memoization
```jsx
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Expensive rendering */}</div>;
});

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);
```

### Debugging

#### React Developer Tools
- Install React Developer Tools browser extension
- Use Profiler to identify performance bottlenecks
- Check component state and props

#### Network Debugging
```javascript
// Add request/response logging
axios.interceptors.request.use(request => {
  console.log('Request:', request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
});
```

#### Error Boundaries
```jsx
// src/components/ErrorBoundary.jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
```

## Conclusion

The SilentWatch Frontend is a comprehensive React-based security analysis platform that provides:

### Key Strengths
1. **Modern Architecture**: Built with React 18 and modern hooks
2. **Role-Based Security**: Granular permission system
3. **Real-time Updates**: Firebase integration for live data
4. **Responsive Design**: Mobile-first approach with Tailwind CSS
5. **Enterprise Ready**: Multi-tenant architecture
6. **Performance Optimized**: Code splitting and memoization

### Future Enhancements
1. **Progressive Web App**: Offline capabilities
2. **Advanced Analytics**: Enhanced data visualization
3. **Mobile App**: React Native implementation
4. **AI Integration**: Enhanced ML model integration
5. **Real-time Collaboration**: Multi-user features

For additional support or questions, please refer to the component documentation or contact the development team.

