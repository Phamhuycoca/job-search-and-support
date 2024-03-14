import { DEFAULT_LANGUAGE, SupportLanguage } from '../constants';
import { isStringify } from '../helpers';
import type { IUserProfile, IUserRole } from '../interfaces';
import { storage } from './localStorage';

const BUFFER_TIME = 60 * 1000; // 60s

  export const enum AUTH_SERVICE_KEY {
    ACCESS_TOKEN = 'ACCESS_TOKEN',
    REFRESH_TOKEN = 'REFRESH_TOKEN',
    USER = 'USER',
    ROLE = 'ROLE',
    LANGUAGE = 'LANGUAGE',
    ACCESS_TOKEN_EXPIRED_AT = 'ACCESS_TOKEN_EXPIRED_AT',
    REFRESH_TOKEN_EXPIRED_AT = 'REFRESH_TOKEN_EXPIRED_AT',
    AVATAR='AVATAR'
  }
class LocalStorageAuthService {
  // ACCESS_TOKEN
  setAccessToken(token: string): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN, token);
  }
  getAccessToken(): string {
    return storage.getLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN);
  }
  resetAccessToken(): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN, '');
  }
  // ACCESS_TOKEN_EXPIRED_AT
  getAccessTokenExpiredAt(): number {
    return +storage.getLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT);
  }
  setAccessTokenExpiredAt(expiredIn: number): void {
    const expiredAt = new Date().getTime() + expiredIn * 1000 - BUFFER_TIME;
    storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT, String(expiredAt));
  }
  resetAccessTokenExpiredAt(): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT, '');
  }
  //REFRESH_TOKEN
  setRefeshToken(refresh_token: string): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN, refresh_token);
  }
  getRefeshToken(): string {
    return storage.getLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN);
  }
  resetRefeshToken(): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN, '');
  }
  //REFRESH_TOKEN_EXPIRED_AT
  getRefeshTokenExpiredAt(): number {
    return +storage.getLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN_EXPIRED_AT);
  }
  setRefeshTokenExpiredAt(expiredIn: number): void {
    const expiredAt = new Date().getTime() + expiredIn * 1000 - BUFFER_TIME;
    storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN_EXPIRED_AT, String(expiredAt));
  }
  resetRefeshTokenExpiredAt(): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN_EXPIRED_AT, '');
  }




 setAvatar(avatar: string): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.AVATAR, avatar);
  }
  getAvatar(): string {
    return storage.getLocalStorage(AUTH_SERVICE_KEY.AVATAR);
  }


  // LANGUAGE
  setLanguage(value: SupportLanguage): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.LANGUAGE, value);
  }
  getLanguage(): SupportLanguage {
    return (storage.getLocalStorage(AUTH_SERVICE_KEY.LANGUAGE) ||
      DEFAULT_LANGUAGE) as SupportLanguage;
  }

  // LOGIN USER
  setLoginUser(user: null | IUserProfile, role: IUserRole | null): void {
    if (!user) {
      storage.setLocalStorage(AUTH_SERVICE_KEY.USER, '');
    }
    if (!isStringify(user)) {
      return;
    }
    storage.setLocalStorage(AUTH_SERVICE_KEY.USER, JSON.stringify(user));
    storage.setLocalStorage(AUTH_SERVICE_KEY.ROLE, JSON.stringify(role));
  }
  getLoginUser(): IUserProfile {
    return storage.getObjectFromKey(AUTH_SERVICE_KEY.USER) as IUserProfile;
  }
  setUserRole( role: string):void{
      storage.setLocalStorage(AUTH_SERVICE_KEY.ROLE, role);
  }
    resetUserRole():void{
  storage.setLocalStorage(AUTH_SERVICE_KEY.ROLE,'')
  }

  // getUserRole() {
  //   return storage.getObjectFromKey(AUTH_SERVICE_KEY.ROLE) as IUserRole;
  // }
  getUserRole() {
    return storage.getLocalStorage(AUTH_SERVICE_KEY.ROLE) as IUserRole;
  }
  getHeader() {
    return {
      Authorization: `Bearer ${this.getAccessToken()}`,
    };
  }

  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.getAccessToken()}`,
    };
  }



  resetAll(): void {
    this.resetAccessToken();
    this.resetAccessTokenExpiredAt();
    // this.setLoginUser(null, null);
    this.resetUserRole();
    storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN,'');
    storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN_EXPIRED_AT,'');
    storage.setLocalStorage(AUTH_SERVICE_KEY.USER, '');
    storage.setLocalStorage(AUTH_SERVICE_KEY.AVATAR,'');
  }
}

export const localStorageAuthService = new LocalStorageAuthService();
export default localStorageAuthService;
