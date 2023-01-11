import React, { useState, useEffect } from "react";

function Map() {
  const { kakao } = window;

  useEffect(() => {
    const defaultOptions = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    new kakao.maps.Map(document.getElementById("kakaoMap"), defaultOptions);
  }, []);

  return <div id="kakaoMap"></div>;
}

export default Map;
