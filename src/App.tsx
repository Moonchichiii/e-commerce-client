import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Toast from './components/common/Toast';
import Layout from './components/layout/Layout';
import Loader from './components/common/Loader';
import { useToast } from './hooks/useToast';
import useAuthStore from './store/authStore';

const LandingPage = lazy(() => import('./pages/landing/LandingPage'));
const Home = lazy(() => import ('./pages/home/Home'))
const ProductList = lazy(() => import('./pages/products/ProductList'))
const SignIn = lazy(() => import('./components/auth/SignIn'));
const SignUp = lazy(() => import('./components/auth/SignUp'));
const EmailVerification = lazy(() => import('./components/auth/EmailVerification'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Cart = lazy(() => import('./pages/cart/Cart'));

const App: React.FC = () => {
  const { toast, showToast } = useToast();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isEmailVerified = useAuthStore((state) => state.isEmailVerified);

  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/signin" />;
    }
    if (!isEmailVerified) {
      return <Navigate to="/email-verification" />;
    }
    return <>{children}</>;
  };

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/email-verification" element={<EmailVerification />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/cart" element={Cart} />
          </Route>
        </Routes>
      </Suspense>
      {toast && <Toast {...toast} onClose={() => showToast(null)} />}
    </Router>
  );
};

export default App;