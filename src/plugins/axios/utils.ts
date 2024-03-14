import localStorageAuthService from '@/common/storages/authStorage';
import axios from 'axios';
import router from '@/router';
import { showWarningsNotification, showErrorNotification } from '@/common/helpers';
import { HttpStatus, PageName } from '@/common/constants';

export const logout = (redirectToLogin = true) => {
  localStorageAuthService.resetAll();
  const currentPage = router.currentRoute;
  if (redirectToLogin && currentPage.value.name !== PageName.LOGIN_PAGE) {
    sessionStorage.setItem('redirect', currentPage.value.fullPath);
    router
      .push({ name: PageName.LOGIN_PAGE })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  }
};

export const sendRefreshToken = async () => {
  let response;
  // alert('refresh_token 2');
  try {
    const API_URL = process.env.VUE_APP_API_URL;
    const formData=new FormData()
    formData.append("refresh_token",localStorageAuthService.getRefeshToken())
    response = await axios.post(
      `${API_URL}/auth/refresh`,
      formData,
      { 
        // withCredentials: true,
        headers: {
          'Content-Type': 'application/json' 
        }
      }
    );
    if (response?.status === HttpStatus.CREATA_AT) {
      localStorageAuthService.resetAll();
      localStorageAuthService.setAccessToken(response.data?.data.data.accessToken);
      localStorageAuthService.setAccessTokenExpiredAt(response.data?.data.data.expiresIn);
      localStorageAuthService.setRefeshToken(response.data?.data.data.refresh_token);
      localStorageAuthService.setRefeshTokenExpiredAt(response.data?.data.data.refresh_expiresIn);
      localStorageAuthService.setUserRole(response.data?.data.data.profile.role);
      return;
    }
    logout(true);
    return;
  } catch (error) {
    showErrorNotification('Vui lòng đăng nhập lại');
    logout(true);
    return;
  }
};