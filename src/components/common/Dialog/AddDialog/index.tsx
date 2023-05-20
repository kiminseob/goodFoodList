import React, { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useClickOutside from 'hooks/useClickOutside';
import useStore from 'hooks/useStore';

function AddDialog() {
  const { addDialogStore } = useStore();
  const { open, view } = addDialogStore.options;

  const dialogRef = useRef<HTMLDivElement>(null);

  const style = (open: boolean) => ({
    display: open ? 'flex' : 'none',
  });

  useClickOutside(dialogRef, () => {
    addDialogStore.openDialog({ open: false, view: null });
  });

  return (
    <div className="dialog" style={style(open)} ref={dialogRef}>
      {view}
    </div>
  );
}

export default observer(AddDialog);
