import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { CoachRoute } from '@/components/auth/CoachRoute';

// Pages
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import NotFound from '@/pages/NotFound';

// Member pages
import Dashboard from '@/pages/member/Dashboard';
import Profile from '@/pages/member/Profile';
import LogMeals from '@/pages/member/LogMeals';
import Analyse from '@/pages/member/Analyse';
import Results from '@/pages/member/Results';

// Admin pages
import AdminDashboard from '@/pages/admin/Dashboard';
import Members from '@/pages/admin/Members';
import Analysis from '@/pages/admin/Analysis';
import Rules from '@/pages/admin/Rules';

const router = createBrowserRouter([
  // Public routes
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },

  // Redirect root to dashboard
  { path: '/', element: <Navigate to="/dashboard" replace /> },

  // Protected member routes
  { path: '/dashboard', element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
  { path: '/profile', element: <ProtectedRoute><Profile /></ProtectedRoute> },
  { path: '/log', element: <ProtectedRoute><LogMeals /></ProtectedRoute> },
  { path: '/analyse', element: <ProtectedRoute><Analyse /></ProtectedRoute> },
  { path: '/results/:id', element: <ProtectedRoute><Results /></ProtectedRoute> },

  // Protected admin/coach routes
  { path: '/admin', element: <CoachRoute><AdminDashboard /></CoachRoute> },
  { path: '/admin/members', element: <CoachRoute><Members /></CoachRoute> },
  { path: '/admin/analysis/:id', element: <CoachRoute><Analysis /></CoachRoute> },
  { path: '/admin/rules', element: <CoachRoute><Rules /></CoachRoute> },

  // 404
  { path: '*', element: <NotFound /> },
]);

function App() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-foreground)] min-h-screen">
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </div>
  );
}

export default App;
