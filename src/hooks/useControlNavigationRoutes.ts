import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { removeTrailingSlashes } from '../shared/regex/pathUtils';

export const useControlNavigationRoutes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.endsWith('/') && pathname !== '/') {
      const pathnameWithoutTrailingSlashes = removeTrailingSlashes(pathname);
      pathnameWithoutTrailingSlashes ? navigate(pathnameWithoutTrailingSlashes) : (location.href = '/');
    }
  }, [pathname, navigate]);
};
