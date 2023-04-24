import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/common/Layout';
import Home from 'components/pages/Home';
import ShopDetailPage from 'components/pages/ShopDetailPage';
import AddDialog from 'components/common/Dialog/AddDialog';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="shop/:shopId" element={<ShopDetailPage />} />
        </Route>
      </Routes>
      <AddDialog />
    </>
  );
}

export default App;
