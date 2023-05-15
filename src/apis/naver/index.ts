const summaryBaseUrl = 'https://map.naver.com/v5/api/sites';
const restaurantBaseUrl = (query: string, page: number) =>
  `https://map.naver.com/v5/api/search?caller=pcweb&query=${query}&type=all&page=${page}&displayCount=5&isPlaceRecommendationReplace=true&lang=ko`;

// 공통 fetcher
const fetcher = async (url: string, headers = {}) =>
  fetch(url, { headers }).then((res) => res.json());

// 각  fetch 정의
const summaryFetcher = async (suffixUrl: string) =>
  fetcher(summaryBaseUrl + suffixUrl);

const restaurantFetcher = async ({
  query,
  page,
}: {
  query: string;
  page: number;
}) => fetcher(restaurantBaseUrl(query, page));

export { summaryFetcher, restaurantFetcher };
