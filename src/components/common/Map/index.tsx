import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

function Map() {
  const { kakao } = window;

  useEffect(() => {
    const defaultOptions = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    new kakao.maps.Map(document.getElementById('kakaoMap'), defaultOptions);
  }, []);

  return <div id="kakaoMap"></div>;
}

export default Map;
