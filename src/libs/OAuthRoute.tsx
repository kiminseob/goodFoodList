import * as React from 'react';
import useStore from 'hooks/useStore';
import { Route, RouteProps, Routes } from 'react-router-dom';

function OAuthRoute({ element }: RouteProps) {
  return (
    <Routes>
      <Route path="*" element={element} />;
    </Routes>
  );
}

export default OAuthRoute;
