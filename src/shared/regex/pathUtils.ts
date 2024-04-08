export const removeTrailingSlashes = (path: string) => {
  return path.replace(/\/+$/, '');
};
