import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axiosRetry from 'axios-retry';

import { environmentVariables } from '../env/environmentVariables';
import { getToken } from '../helpers/tokenHelpers';

import { handleServiceUnavailable } from './response-status-handlers/serviceUnavailableStatus';
import { handleUnauthorizedStatus } from './response-status-handlers/unauthorizedStatus';

export const axiosInstance: AxiosInstance = axios.create({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  baseURL: environmentVariables.baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getToken();

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

  (error: AxiosError) => {
    const response = error.response!;

    if (response.status === 401) {
      handleUnauthorizedStatus();
    }
    if (response.status === 503) {
      handleServiceUnavailable();
    }

    return Promise.reject(response.data);
  }
);

axiosRetry(axiosInstance, {
  retries: 3,
});
