const baseUrl = 'https://openapi.naver.com/v1/search';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
