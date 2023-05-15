import React from 'react';
import AddButton from './AddButton';

type Props = {
  children: JSX.Element;
};

function Main(props: Props) {
  const { children } = props;
  return (
    <div className="layout-main">
      <AddButton />
      {children}
    </div>
  );
}

export default Main;
