/* eslint-disable check-file/filename-naming-convention */
import { nanoid } from 'nanoid';
import { useState } from 'react';

import { Toast, ToastProps } from '../components';

import { useTranslation } from './useTranslation';

export type ToastQueueProp = {
  status: ToastProps['status'];
  titleKey: string;
  descriptionKey: string;
  id?: string;
};

export const useToastQueue = () => {
  const [queue, setQueue] = useState<ToastQueueProp[]>([]);

  const { t } = useTranslation();

  const addToQueue = (toast: ToastQueueProp) => {
    const id = nanoid();

    if (queue.length < 3) {
      setQueue((prevQueue) => [...prevQueue, { ...toast, id }]);
    }
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

  return { addToQueue, toastComponents };
};
