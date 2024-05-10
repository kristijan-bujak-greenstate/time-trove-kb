import { useQuery, useQueryClient } from 'react-query';

import { axiosInstance } from '../api/axiosInstance';
import { endpoints } from '../api/endpoints/endpoints';
import { TasksResponse } from '../api/types/responses/getTasksResponse';
import { usePaginationContext } from '../context/PaginationContext';
import { QueryKeys } from '../shared/enums/queryKeys';

import { getQueryKey } from './../helpers/getQueryKey';

export const usePagination = () => {
  const { setCurrentPage, limit, currentPage } = usePaginationContext();
  const queryClient = useQueryClient();

  const offset = (currentPage - 1) * limit;

  const cachedTasks = queryClient.getQueryData(getQueryKey(QueryKeys.TASKS, currentPage)) as TasksResponse;

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
    refetch,
  } = useQuery<TasksResponse>({
    queryKey: getQueryKey(QueryKeys.TASKS, currentPage),
    queryFn: () => axiosInstance.get(endpoints.tasks, { params: { offset, limit } }),
  });

  const handlePaginationCreate = () => {
    if (cachedTasks && cachedTasks.totalItems % limit === 0) {
      queryClient.removeQueries(getQueryKey(QueryKeys.TASKS));
      setCurrentPage(cachedTasks.totalPages + 1);
    } else {
      setCurrentPage(cachedTasks.totalPages);
    }
  };

  const handlePaginationDelete = () => {
    if (cachedTasks.totalItems % limit === 1) {
      queryClient.removeQueries(getQueryKey(QueryKeys.TASKS));
      if (cachedTasks.totalPages > 1) setCurrentPage(cachedTasks.totalPages - 1);
    }
  };

  return {
    setCurrentPage,
    currentPage,
    handlePaginationCreate,
    handlePaginationDelete,
    tasks,
    isLoadingTasks,
    isErrorTasks,
    refetch,
    queryClient,
    totalPages: tasks?.totalPages || 1,
    totalItems: tasks?.totalItems,
    taskItems: tasks?.items,
  };
};
