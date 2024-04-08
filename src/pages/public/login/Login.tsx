import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { axiosInstance } from '../../../api/axiosInstance';
import { endpoints } from '../../../api/endpoints/endpoints';
import { LoginResponse } from '../../../api/responses/loginResponse';
import { PublicForm, Toast } from '../../../components';
import { setToken } from '../../../helpers/tokenHelpers';
import { useLanguageFormValidation } from '../../../hooks/useLanguageFormValidation';
import { useTranslation } from '../../../hooks/useTranslation';
import { LogoutIcon } from '../../../icons';
import { routes } from '../../../router/routes';
import { AuthData, authFieldNames, authSchema } from '../../../shared/schemas/authSchema';

export const Login = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

  const closeToast = () => {
    setIsToastOpen(false);
  };

  const {
    handleSubmit,
    register,
    trigger,
    formState: { errors },
  } = useForm<AuthData>({
    mode: 'onChange',
    resolver: zodResolver(authSchema(t)),
  });

  const { mutate: loginMutation } = useMutation<LoginResponse, unknown, AuthData>({
    mutationFn: (data) =>
      axiosInstance.post(endpoints.login, {
        username: data.email,
        password: data.password,
      }),

    onSuccess: ({ accessToken }) => {
      setToken(accessToken);
      navigate(routes.root);
    },
    onError: () => {
      setIsToastOpen(true);
    },
  });

  const onSubmit = (data: AuthData) => {
    loginMutation(data);
  };

  const handleFooterButtonClick = () => {
    navigate(routes.signUp);
  };

  useLanguageFormValidation(errors, trigger);

  return (
    <>
      <Toast
        isOpen={isToastOpen}
        title={t('loginToastTitle')}
        status={'error'}
        description={t('loginToastDescription')}
        onCloseClick={closeToast}
      />

      <PublicForm
        title={t('loginTitle')}
        description={t('loginDescription')}
        buttonText={t('loginButton')}
        footerDescriptionText={t('loginFooterDescription')}
        footerButtonText={t('loginFooterButton')}
        onFooterButtonClick={handleFooterButtonClick}
        firstInputProps={{
          label: t('emailLabel'),
          type: 'text',
          placeholder: t('emailPlaceholder'),
          error: errors[authFieldNames.email]?.message,
          ...register(authFieldNames.email),
        }}
        secondInputProps={{
          label: t('passwordLabel'),
          type: 'password',
          placeholder: t('passwordPlaceholder'),
          error: errors[authFieldNames.password]?.message,
          ...register(authFieldNames.password),
        }}
        onSubmit={handleSubmit(onSubmit)}
        icon={LogoutIcon}
      />
    </>
  );
};
