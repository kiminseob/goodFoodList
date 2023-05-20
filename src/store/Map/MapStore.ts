import { setMapPoint, makeMarker } from 'utils/map';

const { naver } = window;

class MapStore {
  markers: any = [];

  removeMarkers = () =>
    this.markers.map((marker: Record<string, any>) => marker.setMap(null));

  searchAddressToCoordinate = (map: any, searchItems: Record<string, any>) => {
    const { address } = searchItems;

    if (Object.keys(searchItems).length === 0) return;

    naver.maps.Service.geocode(
      {
        query: address,
      },
      (status: boolean, response: Record<string, any>) => {
        if (status === naver.maps.Service.Status.ERROR) {
          return alert('네이버 지도 에러가 발생했습니다. 다시 시도해주세요.');
        }
        if (response.v2.meta.totalCount === 0) {
          return alert('지도 검색 결과가 없습니다.');
        }

        const geocode = response.v2.addresses[0];

        setMapPoint(map, geocode);

        this.markers = [...this.markers, makeMarker(map, geocode, searchItems)];
      }
    );
  };
}

export default MapStore;
