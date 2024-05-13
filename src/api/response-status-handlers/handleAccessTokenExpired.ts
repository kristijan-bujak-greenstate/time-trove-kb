import { AxiosError } from 'axios';

import { getRefreshToken, setAccessToken, setRefreshToken } from '../../helpers/tokenHelpers';
import { axiosInstance } from '../axiosInstance';
import { endpoints } from '../endpoints/endpoints';

import { handleUnauthorizedStatus } from './unauthorizedStatus';

export type RefreshTokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export const handleAccessTokenExpired = async (error: AxiosError) => {
  try {
    const refreshToken = getRefreshToken();

    if (refreshToken) {
      const response = await axiosInstance.post<string, RefreshTokenResponse>(endpoints.refreshToken, {
        refreshToken,
      });

      const { accessToken, refreshToken: newRefreshToken } = response;

      setAccessToken(accessToken);
      setRefreshToken(newRefreshToken);

      error!.config!.headers.Authorization = `Bearer ${accessToken}`;

      await axiosInstance(error!.config!);

      window.location.reload();
    } else {
      handleUnauthorizedStatus();
    }
  } catch {
    handleUnauthorizedStatus();
  }
};
