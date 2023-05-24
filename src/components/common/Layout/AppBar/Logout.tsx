import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoutIcon } from 'icons';
import useStore from 'hooks/useStore';

function Logout() {
  const { userInfoStore } = useStore();
  const navigate = useNavigate();

  const handleClick = () => {
    userInfoStore.logout();

    const _window = window.open(
      `https://nid.naver.com/nidlogin.logout`,
      '_blank',
      'width=100,height=100,scrollbars=no,status=no,toolbar=no,menubar=no,resizeable=no,location=no'
    );

    setTimeout(
      (_window) => {
        _window?.close();
        navigate(0);
      },
      200,
      _window
    );
  };

  return <LogoutIcon onClick={handleClick} />;
}

export default Logout;
