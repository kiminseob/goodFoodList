import React from 'react';

type Props = {
  children: JSX.Element;
};

function Main(props: Props) {
  const { children } = props;
  return <div className="layout-main">{children}</div>;
}

export default Main;
