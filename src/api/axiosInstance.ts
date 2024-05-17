import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axiosRetry from 'axios-retry';

import { environmentVariables } from '../env/environmentVariables';
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '../helpers/tokenHelpers';
import { useAuthStore } from '../store/useAuthStore';
import { useMaintenanceStore } from '../store/useMaintenanceStore';

import { endpoints } from './endpoints/endpoints';
import { RefreshTokenResponse } from './types/responses/refreshTokenResponse';

export const axiosInstance: AxiosInstance = axios.create({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  baseURL: environmentVariables.baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,

  async (error: AxiosError) => {
    const response = error.response!;

    if (response.status === 401) {
      try {
        const refreshToken = getRefreshToken();

        if (!refreshToken) throw new Error();

        const response = await axiosInstance.post<string, RefreshTokenResponse>(endpoints.refreshToken, {
          refreshToken,
        });

        const { accessToken, refreshToken: newRefreshToken } = response;

        setAccessToken(accessToken);
        setRefreshToken(newRefreshToken);

        error!.config!.headers.Authorization = `Bearer ${accessToken}`;
        return axiosInstance(error!.config!);
      } catch {
        removeAccessToken();
        removeRefreshToken();
        useAuthStore.getState().setIsLogged(false);
      }
    }
    if (response.status === 503) {
      useMaintenanceStore.getState().setIsMaintenance(true);
    }

    return Promise.reject(response.data);
  }
);

axiosRetry(axiosInstance, {
  retries: 3,
});
