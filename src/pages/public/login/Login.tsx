import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { axiosInstance } from '../../../api/axiosInstance';
import { endpoints } from '../../../api/endpoints/endpoints';
import { LoginResponse } from '../../../api/responses/loginResponse';
import { PublicForm } from '../../../components';
import { setToken } from '../../../helpers/tokenHelpers';
import { useLanguageFormValidation } from '../../../hooks/useLanguageFormValidation';
import { useToastQueue } from '../../../hooks/useToastQueue';
import { useTranslation } from '../../../hooks/useTranslation';
import { LogoutIcon } from '../../../icons';
import { routes } from '../../../router/routes';
import { AuthData, authFieldNames, authSchema } from '../../../shared/schemas/authSchema';

export const Login = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { addToQueue, toastComponents } = useToastQueue();

  const {
    handleSubmit,
    register,
    trigger,
    formState: { errors },
  } = useForm<AuthData>({
    mode: 'onChange',
    resolver: zodResolver(authSchema(t)),
  });

  const { mutate: loginMutation, isLoading } = useMutation<LoginResponse, unknown, AuthData>({
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
      addToQueue({
        status: 'error',
        titleKey: 'loginToastTitle',
        descriptionKey: 'loginToastDescription',
      });
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
      {toastComponents}

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
        isLoadingButton={isLoading}
      />
    </>
  );
};
