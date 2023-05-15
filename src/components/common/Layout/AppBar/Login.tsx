import React, { useEffect } from 'react';
import useStore from 'hooks/useStore';

function Login() {
  const { UserInfoStore } = useStore();
  const { loginStatus } = UserInfoStore;
  const display = loginStatus ? 'block' : 'none';

  useEffect(() => {
    UserInfoStore.initNaverLogin();
  }, []);

  return <div id="naverIdLogin" style={{ display }} />;
}

export default Login;
