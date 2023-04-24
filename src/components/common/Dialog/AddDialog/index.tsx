import React, { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { AddDialogStore } from 'store';
import useClickOutside from 'hooks/useClickOutside';

function AddDialog() {
  const { options } = AddDialogStore;
  const { open, view } = options;

  const dialogRef = useRef<HTMLDivElement>(null);

  const style = (open: boolean) => ({
    display: open ? 'flex' : 'none',
  });

  useClickOutside(dialogRef, () => {
    AddDialogStore.openDialog({ open: false, view: null });
  });

  return (
    <div className="dialog" style={style(open)} ref={dialogRef}>
      {view}
    </div>
  );
}

export default observer(AddDialog);
