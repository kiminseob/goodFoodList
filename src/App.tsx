import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainPage } from 'components/pages';
import OAuthRoute from 'libs/OAuthRoute';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Routes>
      <Route path="*" element={<OAuthRoute element={<MainPage />} />} />
    </Routes>
  );
}

export default App;
