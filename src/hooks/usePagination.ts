import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { axiosInstance } from '../api/axiosInstance';
import { endpoints } from '../api/endpoints/endpoints';
import { TasksResponse } from '../api/types/responses/getTasksResponse';
import { usePaginationContext } from '../context/PaginationContext';
import { PriorityLevel } from '../shared/enums/priorityLevel';
import { QueryKeys } from '../shared/enums/queryKeys';

import { getQueryKey } from './../helpers/getQueryKey';

export const usePagination = () => {
  const { setCurrentPage, limit, currentPage, priority, setPriority } = usePaginationContext();

  const [isNewTaskCreated, setIsNewTaskCreated] = useState<boolean>(false);
  const [isTaskDeleted, setIsTaskDeleted] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const offset = (currentPage - 1) * limit;

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
    refetch,
  } = useQuery<TasksResponse>({
    queryKey: getQueryKey(QueryKeys.TASKS, [currentPage, priority!]),
    queryFn: () =>
      axiosInstance.get(endpoints.tasks, {
        params: { offset, limit, priority: priority === PriorityLevel.ALL_OPTIONS ? undefined : priority },
      }),

    onSuccess: ({ totalPages, page }) => {
      if (isNewTaskCreated || isTaskDeleted) {
        if (isNewTaskCreated || page > totalPages) setCurrentPage(totalPages);
        isNewTaskCreated ? setIsNewTaskCreated(false) : setIsTaskDeleted(false);
        queryClient.removeQueries(getQueryKey(QueryKeys.TASKS));
      }
    },
  });

  const handlePaginationCreate = () => {
    setIsNewTaskCreated(true);
    queryClient.invalidateQueries(getQueryKey(QueryKeys.TASKS));
    setPriority(PriorityLevel.ALL_OPTIONS);
  };

  const handlePaginationDelete = () => {
    setIsTaskDeleted(true);
    queryClient.invalidateQueries(getQueryKey(QueryKeys.TASKS));
  };

  return {
    setCurrentPage,
    currentPage,
    handlePaginationCreate,
    handlePaginationDelete,
    isLoadingTasks,
    isErrorTasks,
    refetch,
    queryClient,
    totalPages: tasks?.totalPages || 1,
    totalItems: tasks?.totalItems,
    taskItems: tasks?.items,
    priority,
    setPriority,
  };
};
