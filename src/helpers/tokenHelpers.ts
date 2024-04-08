// eslint-disable-next-line @typescript-eslint/naming-convention
import Cookies from 'js-cookie';

import { ACCESS_TOKEN_KEY } from './../shared/enums/accessToken';

export const getToken = () => Cookies.get(ACCESS_TOKEN_KEY);

export const setToken = (accessToken: string) =>
  Cookies.set(ACCESS_TOKEN_KEY, accessToken, {
    secure: true,
  });

export const removeToken = () => Cookies.remove(ACCESS_TOKEN_KEY);
