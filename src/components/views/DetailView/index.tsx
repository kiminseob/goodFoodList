import React from 'react';
import ShopDetail from './ShopDetail';

function DetailView({ detail }: any) {
  return (
    <>
      <ShopDetail detail={detail} />
    </>
  );
}

export default DetailView;
