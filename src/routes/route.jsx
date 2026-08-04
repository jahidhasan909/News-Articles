import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../Pages/HomePage';
import AdminDashboard from '../Pages/AdminDashboard';
import AdminPlaceholderPage from '../Pages/AdminPlaceholderPage';
import PlaceholderPage from '../Pages/PlaceholderPage';

const route = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'donate', element: <PlaceholderPage title="Donate & Support" category="Financial Support" /> },
      { path: 'donate/emergency', element: <PlaceholderPage title="Emergency Relief Fund" category="Donation Campaign" /> },
      { path: 'donate/orphan', element: <PlaceholderPage title="Sponsor an Orphan" category="Donation Campaign" /> },
      { path: 'donate/zakat', element: <PlaceholderPage title="Sadqah & Zakat" category="Financial Support" /> },
      { path: 'events', element: <PlaceholderPage title="Events & Programs" category="Community Outreach" /> },
      { path: 'about', element: <PlaceholderPage title="About MaxValid Foundation" category="Organization" /> },
      { path: 'about/mission', element: <PlaceholderPage title="Our Mission & Values" category="Organization" /> },
      { path: 'about/team', element: <PlaceholderPage title="Board & Executive Team" category="Organization" /> },
      { path: 'about/reports', element: <PlaceholderPage title="Financial Reports" category="Transparency" /> },
      { path: 'gallery', element: <PlaceholderPage title="Photo & Media Gallery" category="Media Archive" /> },
      { path: 'partnership', element: <PlaceholderPage title="Corporate Partnership" category="Collaboration" /> },
      { path: 'blood', element: <PlaceholderPage title="Blood Donation Program" category="Healthcare Service" /> },
      { path: 'blood-request', element: <PlaceholderPage title="Emergency Blood Request" category="Healthcare Service" /> },
      { path: 'contact', element: <PlaceholderPage title="Contact & Help Center" category="Support" /> },
      { path: 'terms', element: <PlaceholderPage title="Terms of Conditions" category="Legal" /> },
      { path: 'privacy', element: <PlaceholderPage title="Privacy Policy" category="Legal" /> },
    ],
  },
  {
    path: '/admin',
    Component: AdminDashboard,
  },
  {
    path: '/admin/dashboard',
    element: <AdminPlaceholderPage title="Dashboard Overview" activeTab="dashboard" description="Overview statistics and analytics module for portal monitoring." />,
  },
  {
    path: '/admin/users',
    element: <AdminPlaceholderPage title="User Management" activeTab="user" description="Manage system administrators, roles, permissions, and accounts." />,
  },
  {
    path: '/admin/testing',
    element: <AdminPlaceholderPage title="Testing Management" activeTab="testing" description="Quality assurance testing suites and environment controls." />,
  },
  {
    path: '*',
    element: <PlaceholderPage title="404 - Page Not Found" category="Page Not Found" />,
  },
]);

export default route;