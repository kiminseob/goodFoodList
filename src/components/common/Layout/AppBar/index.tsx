import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import useStore from 'hooks/useStore';
import { HomeIcon } from 'icons';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';

function AppBar() {
  const { userInfoStore } = useStore();
  const { loginStatus } = userInfoStore;

  return (
    <div className="layout-appbar">
      <Link className="title a" to="/">
        <HomeIcon />
        굿푸리
      </Link>
      {loginStatus ? (
        <div className="info-container">
          <Profile />
          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default observer(AppBar);
