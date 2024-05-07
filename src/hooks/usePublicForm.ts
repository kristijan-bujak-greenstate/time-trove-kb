import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { LoginSignUpRequest } from '../api/types/requests/loginSignup';
import { ErrorData } from '../api/types/responses/errorResponse';
import { LoginResponse } from '../api/types/responses/loginResponse';
import { extractKey } from '../helpers/extractKeyFromServer';
import { AuthData } from '../shared/schemas/authSchema';

import { useToastQueue } from './useToastQueue';
import { useTranslation } from './useTranslation';

type UsePublicFormProps = {
  mutationFn: (requestData: LoginSignUpRequest) => Promise<LoginResponse>;
  action: 'login' | 'signup';
  onSuccessFunction: (accessToken: string) => void;
};

export const usePublicForm = ({ mutationFn, action, onSuccessFunction }: UsePublicFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    getValues,
  } = useFormContext<AuthData>();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const navigate = useNavigate();

  const { addToQueue, toastComponents } = useToastQueue();

  const { t } = useTranslation();

  const { mutate: mutation, isLoading } = useMutation<LoginResponse, ErrorData, LoginSignUpRequest>({
    mutationFn: mutationFn,

    onSuccess: ({ accessToken }) => {
      onSuccessFunction(accessToken);
    },

    onError: ({ code: responseKeyCode }) => {
      addToQueue({
        status: 'error',
        titleKey: 'loginToastTitle',
        descriptionKey: action + extractKey(responseKeyCode!),
      });
      reset(getValues());
      setIsButtonDisabled(true);
    },
  });

  const onSubmit = ({ email, password }: AuthData) => {
    mutation({ username: email, password });
  };

  useEffect(() => {
    if (isDirty) {
      setIsButtonDisabled(false);
    }
  }, [isDirty]);

  return {
    toastComponents,
    t,
    navigate,
    errors,
    register,
    handleSubmit,
    isLoading,
    isButtonDisabled,
    addToQueue,
    reset,
    onSubmit,
    isDirty,
  };
};
