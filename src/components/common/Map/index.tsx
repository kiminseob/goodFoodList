import React, { useEffect } from 'react';
import { createMap } from 'utils/map';

type MapProps = {
  detail: {
    id: number;
    title: string;
    description: string;
    address: string;
    thumbnail: string;
    rating: number;
    tags: string[];
  };
};

function Map(props: MapProps) {
  const { detail } = props;

  const initMap = () => {
    const map = createMap();
  };

  useEffect(() => {
    initMap();
  }, []);

  return (
    <>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </>
  );
}

export default Map;
