import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from 'components/common/Layout';
import { HomePage, ShopDetailPage, OAuthPage } from 'components/pages';
import AddDialog from 'components/common/Dialog/AddDialog';

import 'react-toastify/dist/ReactToastify.css';

function MainPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="shop/:shopId" element={<ShopDetailPage />} />
          <Route path="oauth*" element={<OAuthPage />} />
        </Route>
      </Routes>
      <AddDialog />
      <ToastContainer />
    </>
  );
}

export default MainPage;
