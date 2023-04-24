import React, { useEffect } from 'react';
import Map from 'components/common/Map';
import goodFoodLists from 'db/goodFoodLists.json';
import { useParams } from 'react-router-dom';
import useSummary from 'hooks/useSummary';

type Params = {
  shopId: string;
};

function ShopDetailPage() {
  const { shopId } = useParams<Params>();
  const detail = goodFoodLists.filter(({ id }) => id === parseInt(shopId!))[0];

  if (!detail) return null;

  const { summary, isLoading } = useSummary(detail?.shopId);
  const { title, description, address, thumbnail, rating, tags } = detail;
  console.log(summary);
  return (
    <>
      <Map detail={detail} />
      <div>{title}</div>
      <div>{description}</div>
      <div>{address}</div>
      <div>{thumbnail}</div>

      <div>
        {rating}
        {tags}
      </div>
    </>
  );
}

export default ShopDetailPage;
