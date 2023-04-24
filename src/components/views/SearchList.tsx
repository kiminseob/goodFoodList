import React, { useState, useEffect, useMemo } from 'react';
import Map from 'components/common/Map';
import { SearchIcon } from 'icons';
import useRestaurant from 'hooks/useRestaurant';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

function SearchList() {
  const [placeList, setPlaceList] = useState<Record<string, any>[]>([]);
  const [page, setPage] = useState(1);
  const [searchItem, setSearchItem] = useState<Record<string, any>>({});
  const [value, setValue] = useState('');
  const [keyword, setKeyword] = useState('');
  const { data, error, isLoading } = useRestaurant(keyword, page);
  const { loader } = useInfiniteScroll(placeList, data, setPage, page);

  useEffect(() => {
    setPlaceList((prev) => [...prev, ...(data?.result?.place?.list ?? [])]);
  }, [data?.result?.place?.page]);

  const toggleTarget = (e: React.MouseEvent<HTMLLIElement>) => {
    const activedTarget = [...document.querySelectorAll('.search-list')].filter(
      ({ classList }) => [...classList].includes('active')
    )[0];

    activedTarget?.classList.remove('active');
    e.currentTarget.classList.toggle('active');
  };

  const handleClickSearchItem = (
    e: React.MouseEvent<HTMLLIElement>,
    searchItem: Record<string, any>
  ) => {
    toggleTarget(e);
    setSearchItem(searchItem);
  };

  useEffect(() => {
    if (placeList.length === 0 || page > 1) return;
    console.log('setSearchIteem', placeList[0]);
    const searchedItem = { address: placeList[0].address };
    setSearchItem(searchedItem);
  }, [placeList]);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleClickSearch();
  };

  const handleClickSearch = () => {
    if (!value.trim()) return;
    setKeyword(value);
    setPlaceList([]);
  };

  const handleClickAdd = () => {};

  return (
    <>
      <div className="search">
        <input
          value={value}
          onChange={handleChangeValue}
          onKeyDown={handleKeyDown}
        ></input>
        <span>
          <SearchIcon onClick={handleClickSearch} />
        </span>
      </div>
      <div className="search-list-container">
        {!isLoading && placeList.length === 0 && '검색 결과가 없습니다.'}
        {placeList.length > 0 && (
          <PlaceList
            error={error}
            placeList={placeList}
            loader={loader}
            handleClickSearchItem={handleClickSearchItem}
          />
        )}
        {Object.keys(searchItem).length > 0 && <Map items={searchItem} />}
      </div>
    </>
  );
}

type PlaceListType = {
  error: Record<string, any>;
  placeList: Record<string, any>[];
  handleClickSearchItem: (
    e: React.MouseEvent<HTMLLIElement>,
    searchItem: Record<string, any>
  ) => void;
  loader: React.MutableRefObject<null>;
};

function PlaceList(props: PlaceListType) {
  const { error, placeList, handleClickSearchItem, loader } = props;

  return (
    <>
      <ul id="scrollArea">
        {placeList.map((searchItem: any, i) => (
          <li
            key={`${searchItem.name}.${i}`}
            className={`search-list${i === 0 ? ' active' : ''}`}
            onClick={(e) => handleClickSearchItem(e, searchItem)}
          >
            <div className="title">{searchItem.name}</div>
            <div className="description">{searchItem.address}</div>
          </li>
        ))}
        {!error && <li ref={loader} />}
      </ul>
      <button>맛집 추가하기</button>
    </>
  );
}

export default SearchList;
