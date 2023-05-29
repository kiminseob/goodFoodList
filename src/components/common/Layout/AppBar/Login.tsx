import React, { useEffect } from 'react';
import useStore from 'hooks/useStore';
import { observer } from 'mobx-react';

function Login() {
  const { userInfoStore } = useStore();
  const { isLoading } = userInfoStore;
  const display = isLoading ? 'none' : 'block';

  useEffect(() => {
    userInfoStore.initNaverLogin();
  }, []);

  return <div id="naverIdLogin" style={{ display }} />;
}

export default observer(Login);
