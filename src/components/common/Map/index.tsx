import React, { useEffect } from 'react';
import { createMap, keywordSearch } from 'utils/map';

type MapProps = {
  detail: {
    id: number;
    thumbnail: string;
    title: string;
    rating: number;
    tags: string[];
    keyword: string;
    address: string;
  };
};

function Map(props: MapProps) {
  const { detail } = props;
  const { keyword, id } = detail;

  const initMap = () => {
    const map = createMap();
    keywordSearch(map, keyword, id);
  };

  useEffect(() => {
    initMap();
  }, []);

  return <div id="kakaoMap"></div>;
}

export default Map;
