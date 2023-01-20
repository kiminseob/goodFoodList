import React from 'react';
import AppBar from './AppBar';
import Main from './Main';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <AppBar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
