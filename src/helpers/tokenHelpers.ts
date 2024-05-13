// eslint-disable-next-line @typescript-eslint/naming-convention
import Cookies from 'js-cookie';

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../shared/constants/authTokens';

export const getAccessToken = () => Cookies.get(ACCESS_TOKEN_KEY);
export const getRefreshToken = () => Cookies.get(REFRESH_TOKEN_KEY);

export const setAccessToken = (accessToken: string) =>
  Cookies.set(ACCESS_TOKEN_KEY, accessToken, {
    secure: true,
  });

export const removeToken = () => Cookies.remove(ACCESS_TOKEN_KEY);
export const setRefreshToken = (refreshToken: string) =>
  Cookies.set(REFRESH_TOKEN_KEY, refreshToken, {
    secure: true,
  });

export const removeAccessToken = () => Cookies.remove(ACCESS_TOKEN_KEY);
export const removeRefreshToken = () => Cookies.remove(REFRESH_TOKEN_KEY);
