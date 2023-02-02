import * as React from 'react';
const { useEffect } = React;
import Map from 'components/common/Map';
import shopDetail from 'constants/data/cardDetail';
import goodFoodLists from 'db/goodFoodLists.json';
import { useParams } from 'react-router-dom';
import fetcher from 'api/naver/search';

type Params = {
  shopId: string;
};

function ShopDetailPage() {
  const { shopId } = useParams<Params>();
  const detail = goodFoodLists.filter(({ id }) => id === parseInt(shopId!))[0];

  if (!detail) return null;

  const { title, description, address, thumbnail, rating, tags } = detail;

  const fetch = async () => {
    const a = await fetcher(parseInt(detail.shopId));
    console.log(a);
  };

  useEffect(() => {
    fetch();
  }, []);

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
