declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const createMap = () => {
  const mapOptions = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 2,
  };
  const mapContainer = document.getElementById('kakaoMap');
  return new kakao.maps.Map(mapContainer, mapOptions);
};

const displayMarker = (
  map: Record<string, any>,
  place: Record<string, any>
) => {
  const marker = new kakao.maps.Marker({
    map,
    position: new kakao.maps.LatLng(place.y, place.x),
    clickable: true,
  });
  kakao.maps.event.addListener(marker, 'click', function () {
    window.open(place.place_url);
  });
};

const boundLatLang = (map: Record<string, any>, place: Record<string, any>) => {
  const bounds = new kakao.maps.LatLngBounds();
  bounds.extend(new kakao.maps.LatLng(place.y, place.x));
  map.setBounds(bounds);
};

const keywordSearch = (
  map: Record<string, any>,
  keyword: string,
  id: number
) => {
  const ps = new kakao.maps.services.Places();
  const placesSearchCB = (data: Array<any>, status: string) => {
    if (status !== kakao.maps.services.Status.OK) return;

    const matchedPlace = data.filter((v) => parseInt(v.id) === id)[0];

    displayMarker(map, matchedPlace);
    boundLatLang(map, matchedPlace);
  };

  ps.keywordSearch(keyword, placesSearchCB);
};

export { createMap, keywordSearch };
