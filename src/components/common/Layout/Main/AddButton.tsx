import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { CircleAddIcon } from 'icons';
import useStore from 'hooks/useStore';
import SearchList from 'components/views/SearchList';

function AddButton() {
  const { AddDialogStore } = useStore();
  const { pathname } = useLocation();

  const handleClickAdd = () => {
    AddDialogStore.openDialog({ open: true, view: <SearchList /> });
  };

  return (
    <>
      {pathname === '/' && (
        <CircleAddIcon
          style={{
            position: 'fixed',
            top: '60px',
            right: '20px',
            borderRadius: '16px',
            boxShadow: '1px 1px 3px 1px #1e3050',
          }}
          onClick={handleClickAdd}
        />
      )}
    </>
  );
}

export default AddButton;
