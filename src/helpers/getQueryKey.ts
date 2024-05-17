import { QueryKeys } from '../shared/enums/queryKeys';

type QueryParam = string | number | (string | number)[] | Record<string, unknown>;

export const getQueryKey = (queryKey: QueryKeys, param?: QueryParam) => {
  if (param) {
    if (Array.isArray(param)) {
      return [queryKey, ...param];
    }
    return [queryKey, param];
  }
  return [queryKey];
};
