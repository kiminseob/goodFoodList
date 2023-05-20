import {
  AddDialogStore,
  MapStore,
  GooglesheetStore,
  UserInfoStore,
} from 'store';

class RootStore {
  addDialogStore: AddDialogStore;
  mapStore: MapStore;
  googlesheetStore: GooglesheetStore;
  userInfoStore: UserInfoStore;

  constructor() {
    this.addDialogStore = new AddDialogStore();
    this.mapStore = new MapStore();
    this.googlesheetStore = new GooglesheetStore();
    this.userInfoStore = new UserInfoStore();
  }
}

export type RootStoreType = RootStore;
export default new RootStore();
