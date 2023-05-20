import React, { useEffect } from 'react';
import useStore from 'hooks/useStore';

function Login() {
  const { userInfoStore } = useStore();
  const { isLoading } = userInfoStore;
  const display = isLoading ? 'none' : 'block';

  useEffect(() => {
    userInfoStore.initNaverLogin();
  }, []);

  return <div id="naverIdLogin" style={{ display }} />;
}

export default Login;
