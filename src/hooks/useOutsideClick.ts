import { RefObject, useEffect } from 'react';

export const useOutsideClick = <T extends HTMLElement>(refs: RefObject<T>[], onOutsideClick: () => void): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideClick = refs.every((ref) => {
        return ref.current && !ref.current.contains(event.target as Node);
      });

      if (isOutsideClick) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [refs, onOutsideClick]);
};
