type ShopDetail =
  | {
      id: number;
      thumbnail: string;
      title: string;
      rating: number;
      tags: string[];
      keyword: string;
      address: string;
    }
  | undefined;

const shopDetail = (shopId: string): ShopDetail =>
  ({
    0: {
      id: 1323155426,
      thumbnail: '/images/shop.png',
      title: '청도양꼬치',
      rating: 4.71,
      tags: ['양꼬치', '햐라닭날개', '마라탕'],
      keyword: '미금 청도양꼬치',
      address: '경기 성남시 분당구 미금일로86번길 18',
    },
  }[shopId]);

export default shopDetail;
