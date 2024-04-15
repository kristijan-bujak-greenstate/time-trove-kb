// eslint-disable-next-line @typescript-eslint/naming-convention, import/order

import { useQuery } from 'react-query';

import { axiosInstance } from '../api/axiosInstance';
import { endpoints } from '../api/endpoints/endpoints';
import { TasksResponse } from '../api/types/responses/getTasksResponse';
import { getQueryKey } from '../helpers/getQueryKey';
import { getToken } from '../helpers/tokenHelpers';
import { QueryKeys } from '../shared/enums/queryKeys';

export const useIsAuthenticated = () => {
  const token = getToken();

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
  } = useQuery<TasksResponse>({
    enabled: !!token,
    queryKey: getQueryKey(QueryKeys.TASKS),
    queryFn: () => axiosInstance.get(endpoints.tasks),
  });

  return { tasks, isLoadingTasks, isErrorTasks, token };
};
