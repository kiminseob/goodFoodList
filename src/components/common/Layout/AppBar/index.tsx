import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AddIcon, HomeIcon } from 'icons';
import useStore from 'hooks/useStore';
import SearchList from 'components/views/SearchList';

function AppBar() {
  const { AddDialogStore } = useStore();
  const { pathname } = useLocation();
  const handleClickAdd = () => {
    AddDialogStore.openDialog({ open: true, view: <SearchList /> });
  };

  return (
    <div className="layout-appbar">
      <Link className="title a" to="/">
        <HomeIcon />
        굿푸리
      </Link>
      {pathname === '/' && <AddIcon onClick={handleClickAdd} />}
    </div>
  );
}

export default AppBar;
