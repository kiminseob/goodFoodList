import * as React from 'react';
import { SearchIcon } from 'icons';

function SearchInput(props: any) {
  const { value, handleChangeValue, handleKeyDown, handleClickSearch } = props;

  return (
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
  );
}

export default SearchInput;
