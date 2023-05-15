import { makeObservable, action, observable } from 'mobx';

const { naver } = window;
const callbackUrl = 'http://localhost:3000/oauth';

class UserInfoStore {
  naverLogin: any;

  user = {
    id: null,
    name: null,
    gender: null,
    nickname: null,
    profile_image: null,
  };

  loginStatus = false;

  constructor() {
    makeObservable(this, {
      user: observable,
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

      if (status) {
        this.setUserInfo();
      }
    });
  }

  setUserInfo() {
    this.user = { ...this.naverLogin.user };
  }

  logout() {
    this.naverLogin.logout();
  }
}

export default new UserInfoStore();
