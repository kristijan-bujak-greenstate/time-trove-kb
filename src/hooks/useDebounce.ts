import { useEffect } from 'react';

type UseDebounceProps = {
  delay: number;
  callback: () => void;
};

export const useDebounce = ({ delay, callback }: UseDebounceProps) => {
  useEffect(() => {
    const handler = setTimeout(callback, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, callback]);
};
