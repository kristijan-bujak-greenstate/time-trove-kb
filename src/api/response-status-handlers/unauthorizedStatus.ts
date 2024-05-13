import { removeAccessToken, removeRefreshToken } from '../../helpers/tokenHelpers';
import { useAuthStore } from '../../store/useAuthStore';

export const handleUnauthorizedStatus = () => {
  removeAccessToken();
  removeRefreshToken();
  useAuthStore.getState().setIsLogged(false);
};
