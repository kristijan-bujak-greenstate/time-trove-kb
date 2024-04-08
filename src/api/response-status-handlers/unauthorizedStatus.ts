import { removeToken } from '../../helpers/tokenHelpers';

export const handleUnauthorizedStatus = () => {
  removeToken();
};
