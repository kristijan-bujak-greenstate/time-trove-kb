import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { axiosInstance } from '../api/axiosInstance';
import { endpoints } from '../api/endpoints/endpoints';
import { AuthResponse } from '../api/types/responses/getAuthResponse';
import { getQueryKey } from '../helpers/getQueryKey';
import { getAccessToken, removeToken } from '../helpers/tokenHelpers';
import { routes } from '../router/routes';
import { QueryKeys } from '../shared/enums/queryKeys';

export const useIsAuthenticated = () => {
  const accessToken = getAccessToken();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: loggedUser, isLoading } = useQuery<AuthResponse>({
    enabled: !!accessToken,
    retry: false,
    queryKey: getQueryKey(QueryKeys.AUTH),
    queryFn: () => axiosInstance.get(endpoints.auth),
    onError: () => {
      removeToken();
      queryClient.clear();
      navigate(routes.login);
    },
  });

  return { loggedUser, isLoading, queryClient };
};
