import { QueryKeys } from '../shared/enums/queryKeys';

export const getQueryKey = (queryKey: QueryKeys): QueryKeys[] => {
  return [queryKey];
};
