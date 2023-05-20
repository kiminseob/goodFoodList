import * as React from 'react';

type SearchListType = {
  error: Record<string, any>;
  searchList: Record<string, any>[];
  loader: React.MutableRefObject<null>;
  handleClickSearchItem: (
    e: React.MouseEvent<HTMLLIElement>,
    searchItem: Record<string, any>
  ) => void;
  handleClickAddItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function SearchList(props: SearchListType) {
  const {
    error,
    searchList,
    loader,
    handleClickSearchItem,
    handleClickAddItem,
  } = props;

  return (
    <>
      <ul id="scrollArea">
        {searchList.map((searchItem: any, i) => (
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
      <button className="add-shop-btn" onClick={handleClickAddItem}>
        맛집 추가하기
      </button>
    </>
  );
}

export default SearchList;
