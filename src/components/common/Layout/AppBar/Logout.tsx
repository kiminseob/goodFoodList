import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { LogoutIcon } from 'icons';
import useStore from 'hooks/useStore';

function Logout() {
  const { UserInfoStore } = useStore();
  const location = useLocation();

  const handleClick = () => {
    UserInfoStore.logout();
    window.location.replace(location.pathname);
  };

  return <LogoutIcon onClick={handleClick} />;
}

export default Logout;
