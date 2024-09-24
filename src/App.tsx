import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toast from './components/toast/Toast';
import Layout from './components/layout/Layout';
import Loader from './components/layout/Loader/Loader';
import { useToast } from './hooks/useToast';

const LandingPage = lazy(() => import('./pages/landing/LandingPage'));
const Home = lazy(() => import('./pages/home/Home'));
const ProductList = lazy(() => import('./pages/products/ProductList'));

const App: React.FC = () => {
  const { toast, showToast } = useToast();
  const isAuthenticated = false;

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout isAuthenticated={isAuthenticated} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
          </Route>
        </Routes>
      </Suspense>
      {toast && <Toast {...toast} onClose={() => showToast(null)} />}
    </Router>
  );
};

export default App;