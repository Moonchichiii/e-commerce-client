import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Toast from './components/layout/toast/Toast';
import Loader from './components/layout/Loader/Loader';
import { useToast } from './hooks/useToast';

const LandingPage = lazy(() => import('/pages/LandingPage/LandingPage'));
const Home = lazy(() => import('./pages/Home/Home'));
const ProductList = lazy(() => import('./pages/ProductList/ProductList'));

function App() {
  const { toast, showToast } = useToast();

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home showToast={showToast} />} />
            <Route path="/products" element={<ProductList showToast={showToast} />} />
          </Route>
        </Routes>
      </Suspense>
      {toast && <Toast {...toast} onClose={() => showToast(null)} />}
    </Router>
  );
}

export default App;