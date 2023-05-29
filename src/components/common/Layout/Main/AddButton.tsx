import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { CircleAddIcon } from 'icons';
import useStore from 'hooks/useStore';
import SearchView from 'components/views/SearchView';

function AddButton() {
  const { addDialogStore } = useStore();
  const { pathname } = useLocation();

  const handleClickAdd = () => {
    addDialogStore.openDialog({ open: true, view: <SearchView /> });
  };

  return (
    <>
      {pathname === '/' && (
        <CircleAddIcon
          style={{
            position: 'fixed',
            top: '60px',
            right: '12px',
            borderRadius: '16px',
            boxShadow: '1px 1px 3px 1px #1e3050',
            zIndex: 2,
          }}
          onClick={handleClickAdd}
        />
      )}
    </>
  );
}

export default AddButton;
