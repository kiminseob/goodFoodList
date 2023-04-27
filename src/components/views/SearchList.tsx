import React, { useState, useEffect, useMemo } from 'react';
import Map from 'components/common/Map';
import { SearchIcon } from 'icons';
import useRestaurant from 'hooks/useRestaurant';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import useGoogleSheet from 'libs/googlesheet';
import useSummary from 'hooks/useSummary';

type SearchItemType = {
  [header: string]: string;
};

function SearchList() {
  const [placeList, setPlaceList] = useState<Record<string, any>[]>([]);
  const [page, setPage] = useState(1);
  const [searchItem, setSearchItem] = useState<SearchItemType>({});
  const [value, setValue] = useState('');
  const [keyword, setKeyword] = useState('');
  const { data, error, isLoading } = useRestaurant(keyword, page);
  const { loader } = useInfiniteScroll(placeList, data, setPage, page);
  const [sheetRows, addSheetRows] = useGoogleSheet(0);
  const { summary } = useSummary(searchItem.id);

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
    searchItem: SearchItemType
  ) => {
    toggleTarget(e);
    setSearchItem(searchItem);
  };

  useEffect(() => {
    if (placeList.length === 0 || page > 1) return;
    setSearchItem(placeList[0]);
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

  const handleClickAddItem = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const isConfirm = confirm(
      `'${searchItem.name}'을 맛집 리스트에 추가합니다.`
    );

    if (isConfirm) {
      try {
        const isRegistered = sheetRows.some(({ id }) => id === searchItem.id);
        if (isRegistered) {
          alert(`'${searchItem.name}'는 이미 등록되어 있습니다.`);
        } else {
          const { tel, category } = searchItem;
          const {
            id,
            name,
            keywords,
            address,
            bizhourInfo,
            description,
            imageURL,
          } = summary;
          await addSheetRows({
            tel,
            category,
            id,
            name,
            keywords,
            address,
            bizhourInfo,
            description,
            imageURL,
          });
          alert(`'${searchItem.name}'가 맛집 리스트에 추가되었습니다.`);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

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
            handleClickAddItem={handleClickAddItem}
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
  loader: React.MutableRefObject<null>;
  handleClickSearchItem: (
    e: React.MouseEvent<HTMLLIElement>,
    searchItem: Record<string, any>
  ) => void;
  handleClickAddItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function PlaceList(props: PlaceListType) {
  const {
    error,
    placeList,
    loader,
    handleClickSearchItem,
    handleClickAddItem,
  } = props;

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
      <button onClick={handleClickAddItem}>맛집 추가하기</button>
    </>
  );
}

export default SearchList;
