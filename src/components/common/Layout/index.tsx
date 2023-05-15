import React from 'react';
import AppBar from './AppBar';
import Main from './Main';
import Menu from './Menu';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <AppBar />
      <div style={{ display: 'flex', marginTop: '52px' }}>
        {/* <Menu /> */}
        <Main>
          <Outlet />
        </Main>
      </div>
    </>
  );
}

export default Layout;
