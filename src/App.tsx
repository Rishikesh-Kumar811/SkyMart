import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { CartDrawer } from './components/CartDrawer';
import { ToastProvider } from './components/Toast';

const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));
const Register = lazy(() => import('./pages/Register').then(m => ({ default: m.Register })));
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Shop = lazy(() => import('./pages/Shop').then(m => ({ default: m.Shop })));
const ProductDetail = lazy(() => import('./pages/ProductDetail').then(m => ({ default: m.ProductDetail })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" />;
  return <>{children}</>;
};
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <CartDrawer />
    <main className="@container min-h-screen flex flex-col">{children}</main>
  </>
);
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastProvider>
          <Router>
          <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={
                <ProtectedRoute>
                  <Layout><Home /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/products" element={
                <ProtectedRoute>
                  <Layout><Shop /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/products/:id" element={
                <ProtectedRoute>
                  <Layout><ProductDetail /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/about" element={
                <ProtectedRoute>
                  <Layout><About /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
          </Suspense>
        </Router>
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  );
}
export default App;
