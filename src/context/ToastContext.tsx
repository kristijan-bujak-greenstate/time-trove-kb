import { nanoid } from 'nanoid';
import { ReactNode, createContext, useContext, useState } from 'react';

import { Toast, ToastProps } from '../components';
import { useTranslation } from '../hooks/useTranslation';

export type ToastQueueProp = {
  status: ToastProps['status'];
  titleKey: string;
  descriptionKey: string;
  id?: string;
};

type ToastContextProps = {
  addToQueue: (toast: ToastQueueProp) => void;
  clearQueue: () => void;
};

type ToastProviderProps = {
  children: ReactNode;
};

const ToastContext = createContext({} as ToastContextProps);

// eslint-disable-next-line react-refresh/only-export-components
export const useToastContext = () => useContext(ToastContext);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [queue, setQueue] = useState<ToastQueueProp[]>([]);
  const { t } = useTranslation();

  const addToQueue = (toast: ToastQueueProp) => {
    const id = nanoid();

    if (queue.length < 3) {
      setQueue((prevQueue) => [...prevQueue, { ...toast, id }]);
    }
  };

  const clearQueue = () => {
    setQueue([]);
  };

  const removeFromQueue = (idToRemove: string) => {
    setQueue((prevQueue) => prevQueue.filter((toast) => toast.id !== idToRemove));
  };

  const toastComponents = queue.map((toast) => (
    <Toast
      title={t(toast.titleKey)}
      description={t(toast.descriptionKey)}
      key={toast.id}
      status={toast.status}
      removeFromQueue={() => removeFromQueue(toast.id!)}
    />
  ));

  return (
    <ToastContext.Provider value={{ addToQueue, clearQueue }}>
      {children}
      {toastComponents}
    </ToastContext.Provider>
  );
};
