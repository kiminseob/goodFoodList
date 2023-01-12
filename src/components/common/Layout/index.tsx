import React from 'react';
import AppBar from './AppBar';
import Main from './Main';

type Props = {
  children: JSX.Element;
};

function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <AppBar />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;
