import useStore from 'hooks/useStore';
import useGoogleSheet from 'libs/googlesheet';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SHEET_TITLE } from 'store/Googlesheet/GooglesheetStore';

function OAuthPage() {
  const location = useLocation();
  const { userInfoStore } = useStore();
  const { loginStatus, user } = userInfoStore;
  const [sheetRows, { addSheetRows, updateSheetRows }] = useGoogleSheet(
    SHEET_TITLE.USER
  );

  useEffect(() => {
    if (!location.hash) return;

    try {
      const { hash } = location;
      const splited = hash.split('&');
      const token = splited[0]?.split('=')[1];
      const state = splited[1]?.split('=')[1];
      const token_type = splited[2]?.split('=')[1];
      const expires_in = splited[3]?.split('=')[1];

      if (!loginStatus || !sheetRows.length) return;

      const targetRow = sheetRows.filter(({ id }) => id === user.id)[0];

      if (targetRow) {
        updateSheetRows(SHEET_TITLE.USER, targetRow.rowIndex, user);
      } else {
        addSheetRows(SHEET_TITLE.USER, user);
      }
    } catch (e) {
      console.error(e);
    }
    window.location.replace('/');
  }, [sheetRows, loginStatus]);
  return <></>;
}

export default observer(OAuthPage);
