// TODO FRO-121: Expand custom internationalization
// this function needs to be deleted when the ticket is done
export const extractKey = (errorString: string) => {
  const parts = errorString.split('.');
  return parts.length > 1 ? parts[1] : '';
};
