const baseUrl = 'https://map.naver.com/v5/api/sites/summary/';

const fetcher = async (id: number) =>
  fetch(baseUrl + id).then((res) => res.json());

export default fetcher;
