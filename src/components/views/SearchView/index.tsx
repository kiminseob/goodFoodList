import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';

import { SHEET_TITLE } from 'store/Googlesheet/GooglesheetStore';
import useGoogleSheet from 'libs/googlesheet';
import Map from 'components/common/Map';
import useRestaurant from 'hooks/useRestaurant';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import useSummary from 'hooks/useSummary';
import useStore from 'hooks/useStore';
import { info, success } from 'utils/toast';

import SearchList from './SearchList';
import SearchInput from './SearchInput';

type SearchItemType = {
  [header: string]: string;
};

function SearchView() {
  const { userInfoStore } = useStore();
  const [searchList, setSearchList] = useState<Record<string, any>[]>([]);
  const [page, setPage] = useState(1);
  const [searchItem, setSearchItem] = useState<SearchItemType>({});
  const [value, setValue] = useState('');
  const [keyword, setKeyword] = useState('');
  const { data, error, isLoading } = useRestaurant(keyword, page);
  const { loader } = useInfiniteScroll(searchList, data, setPage, page);
  const [sheetRows, { addSheetRows, updateSheetRows }] = useGoogleSheet(
    SHEET_TITLE.ALL
  );
  const { summary } = useSummary(searchItem.id);

  useEffect(() => {
    setSearchList((prev) => [...prev, ...(data?.result?.place?.list ?? [])]);
  }, [data?.result?.place?.page, keyword]);

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
    if (searchList.length === 0 || page > 1) return;
    setSearchItem(searchList[0]);
  }, [searchList]);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleClickSearch();
  };

  const handleClickSearch = () => {
    if (!value.trim() || value === keyword) return;
    setSearchList([]);
    setPage(1);
    setKeyword(value);
  };

  const handleClickAddItem = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!userInfoStore.loginStatus) {
      return info('로그인을 먼저 해주세요');
    }

    const isConfirm = confirm(
      `'${searchItem.name}'을 맛집 리스트에 추가합니다.`
    );

    if (!isConfirm) return;

    try {
      const targetRow = sheetRows.filter(({ id }) => id === searchItem.id)[0];
      const mergedItem = {
        userId: userInfoStore.user.id,
        profile_image: userInfoStore.user.profile_image,
        tel: searchItem.tel,
        category: searchItem.category,
        id: summary.id,
        name: summary.name,
        keywords: summary.keywords,
        address: summary.address,
        bizhourInfo: summary.bizhourInfo,
        description: summary.description,
        imageURL: summary.imageURL,
      };
      if (targetRow) {
        alert(
          `'${searchItem.name}'는 이미 등록되어 있습니다. 업데이트 하시겠습니까?`
        );
        updateSheetRows(SHEET_TITLE.ALL, targetRow.rowIndex, mergedItem);
        success(`'${searchItem.name}'가 맛집 리스트에 업데이트 되었습니다.`);
      } else {
        await addSheetRows(SHEET_TITLE.ALL, mergedItem);
        success(`'${searchItem.name}'가 맛집 리스트에 추가 되었습니다.`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <SearchInput
        value={value}
        handleChangeValue={handleChangeValue}
        handleKeyDown={handleKeyDown}
        handleClickSearch={handleClickSearch}
      />
      <div className="search-list-container">
        {!isLoading && searchList.length === 0 && '검색 결과가 없습니다.'}
        {searchList.length > 0 && (
          <SearchList
            error={error}
            searchList={searchList}
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

export default observer(SearchView);
