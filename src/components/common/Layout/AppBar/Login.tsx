import React, { useEffect } from 'react';
import useStore from 'hooks/useStore';

function Login() {
  const { UserInfoStore } = useStore();
  const { isLoading } = UserInfoStore;
  const display = isLoading ? 'none' : 'block';

  useEffect(() => {
    UserInfoStore.initNaverLogin();
  }, []);

  return <div id="naverIdLogin" style={{ display }} />;
}

export default Login;
