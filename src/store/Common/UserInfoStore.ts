import { makeObservable, action, observable, toJS } from 'mobx';

const { naver } = window;
const callbackUrl = 'http://localhost:3000/oauth';

class UserInfoStore {
  naverLogin: any;

  _user = {
    id: '',
    name: '',
    gender: '',
    nickname: '',
    profile_image: '',
  };

  loginStatus = false;

  isLoading = true;

  constructor() {
    makeObservable(this, {
      _user: observable,
      loginStatus: observable,
      initNaverLogin: action,
    });
  }

  initNaverLogin() {
    this.naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_OAUTH_LOGIN_ID,
      callbackUrl,
      isPopup: false,
      loginButton: { color: 'white', type: 1, height: '24' },
    });
    this.naverLogin.init();
    this.naverLogin.getLoginStatus((status: any) => {
      this.loginStatus = status;
      this.isLoading = false;
      if (status) {
        this.setUserInfo();
      }
    });
  }

  logout() {
    this.naverLogin.logout();
  }

  get user() {
    return toJS(this._user);
  }

  setUserInfo() {
    this._user = { ...this.naverLogin.user };
  }
}

export default UserInfoStore;
