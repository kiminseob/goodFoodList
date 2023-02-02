declare global {
  interface Window {
    naver: any;
  }
}

const { naver } = window;

const createMap = () => {
  const mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10,
    zoomControl: true,
    mapTypeControl: true,
    zoomControlOptions: {
      position: naver.maps.Position.TOP_RIGHT,
    },
  };

  return new naver.maps.Map('map', mapOptions);
};

export { createMap };
