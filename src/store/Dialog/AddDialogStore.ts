import { action, makeObservable, observable } from 'mobx';

type Options = {
  open: boolean;
  view: JSX.Element | null;
};

class Dialog {
  options: Options = { open: false, view: null };

  constructor() {
    makeObservable(this, { options: observable, openDialog: action });
  }

  openDialog = (options: Options) => {
    this.options = { ...options };
  };
}

class AddDialogStore extends Dialog {
  constructor() {
    super();
  }
}

export default AddDialogStore;
