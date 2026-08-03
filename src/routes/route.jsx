import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../Pages/HomePage';
import AdminDashboard from '../Pages/AdminDashboard';

const route = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
    ],
  },
  {
    path: '/admin',
    Component: AdminDashboard,
  },
  {
    path: '*',
    Component: HomePage,
  },
]);

export default route;