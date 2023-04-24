declare global {
  interface Window {
    naver: any;
  }
}

const { naver } = window;
const MARKER_IMAGE_URL = '/images/marker.png';
const PLACE_URL = ({ name, id }: Record<string, any>) =>
  `https://map.naver.com/v5/search/${name}/place/${id}`;

const createMap = () => {
  const mapOptions = {
    zoom: 18,
    zoomControl: true,
    mapTypeControl: true,
    zoomControlOptions: {
      position: naver.maps.Position.TOP_RIGHT,
    },
  };

  return new naver.maps.Map('map', mapOptions);
};

const setMapPoint = (map: any, geocode: { x: number; y: number }) => {
  const point = new naver.maps.Point(geocode);
  map.setCenter(point);
};

const makeMarker = (
  map: any,
  geocode: { x: number; y: number },
  searchItems: Record<string, any>
) => {
  const markerImage = `<img class="marker" src="${MARKER_IMAGE_URL}">`;
  const markerOptions = {
    position: new naver.maps.LatLng(geocode),
    map,
    icon: {
      content: markerImage,
      size: new naver.maps.Size(48, 48),
    },
    animation: naver.maps.Animation.BOUNCE,
  };

  const marker = new naver.maps.Marker(markerOptions);

  addEventHandler(marker, 'click', () => window.open(PLACE_URL(searchItems)));

  return marker;
};

const addEventHandler = (target: any, event: string, cb: Function) => {
  naver.maps.Event.addListener(target, event, cb);
};

const makeInfoWindow = (searchItems: Record<string, any>) => {
  const content = [
    `<a class="info-window" href="${PLACE_URL(searchItems)}" target="_blank">
      ${searchItems.name}
    </a>`,
  ].join('');
  const infoWindowOptions = {
    content,
    borderWidth: 0,
    backgroundColor: 'transparent',
    disableAnchor: true,
  };

  return new naver.maps.InfoWindow(infoWindowOptions);
};

export { createMap, setMapPoint, makeMarker };
