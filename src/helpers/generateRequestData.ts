type DirtyFields<T extends object> = Partial<
  Readonly<{
    [K in keyof T]?: T[K] extends object ? DirtyFields<T[K]> : boolean | undefined;
  }>
>;

export const getObjectByModifiedFormFields = <T extends object>(data: T, dirtyFields: DirtyFields<T>): Partial<T> => {
  const requestData: Partial<T> = {};

  const dataKeys = Object.keys(data) as Array<keyof T>;

  dataKeys.forEach((key) => {
    if (dirtyFields[key]) {
      requestData[key] = data[key];
    }
  });

  return requestData;
};
