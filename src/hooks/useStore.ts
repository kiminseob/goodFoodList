import React from 'react';
import { MobXProviderContext } from 'mobx-react';
import { RootStoreType } from 'store/RootStore';

function useStore() {
  return React.useContext(MobXProviderContext) as RootStoreType;
}

export default useStore;
