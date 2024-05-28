import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { LoginSignUpRequest } from '../api/types/requests/loginSignup';
import { ErrorData } from '../api/types/responses/errorResponse';
import { LoginResponse } from '../api/types/responses/loginResponse';
import { useToastContext } from '../context/ToastContext';
import { AuthData } from '../shared/schemas/authSchema';

import { TranslationKey, useTranslation } from './useTranslation';

type UsePublicFormProps = {
  mutationFn: (requestData: LoginSignUpRequest) => Promise<LoginResponse>;
  action: 'login' | 'registration';
  onSuccessFunction: (accessToken: string, refreshToken: string) => void;
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

  const { addToQueue } = useToastContext();

  const { t } = useTranslation();

  const { mutate: mutation, isLoading } = useMutation<LoginResponse, ErrorData, LoginSignUpRequest>({
    mutationFn: mutationFn,

    onSuccess: ({ accessToken, refreshToken }) => {
      onSuccessFunction(accessToken, refreshToken);
    },

    onError: ({ code }) => {
      addToQueue({
        status: 'error',
        titleKey: 'toast.error.login.title',
        descriptionKey: ('server' + '.' + action + '.' + code) as TranslationKey,
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
    navigate,
    t,
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
