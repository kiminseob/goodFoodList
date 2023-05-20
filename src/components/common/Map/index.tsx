import React, { useState, useEffect, memo } from 'react';
import useStore from 'hooks/useStore';
import { createMap } from 'utils/map';

function Map(props: Record<string, any>) {
  const { mapStore } = useStore();
  const [map, setMap] = useState(null);
  const { items } = props;

  const initMap = () => {
    const map = createMap();
    setMap(map);
  };

  useEffect(() => {
    initMap();
  }, []);

  useEffect(() => {
    if (!map || !items) return;

    mapStore.searchAddressToCoordinate(map, items);

    return () => {
      mapStore.removeMarkers();
    };
  }, [map, items?.address]);

  return (
    <div className="map-container">
      <div id="map"></div>
    </div>
  );
}

export default memo(Map);
