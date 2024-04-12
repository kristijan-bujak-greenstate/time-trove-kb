import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { axiosInstance } from '../../../api/axiosInstance';
import { endpoints } from '../../../api/endpoints/endpoints';
import { PublicForm } from '../../../components';
import { useLanguageFormValidation } from '../../../hooks/useLanguageFormValidation';
import { useToastQueue } from '../../../hooks/useToastQueue';
import { useTranslation } from '../../../hooks/useTranslation';
import { LogoutIcon } from '../../../icons';
import { routes } from '../../../router/routes';
import { AuthData, authFieldNames, authSchema } from '../../../shared/schemas/authSchema';

export const SignUp = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { addToQueue, toastComponents } = useToastQueue();

  const {
    handleSubmit,
    register,
    trigger,
    reset,
    formState: { errors },
  } = useForm<AuthData>({
    mode: 'onChange',
    resolver: zodResolver(authSchema(t)),
  });

  const { mutate: registrationMutation, isLoading } = useMutation({
    mutationFn: (data: AuthData) =>
      axiosInstance.post(endpoints.registration, {
        username: data.email,
        password: data.password,
      }),

    onSuccess: () => {
      addToQueue({
        status: 'success',
        titleKey: 'signupToastTitleSuccess',
        descriptionKey: 'signupToastDescriptionSuccess',
      });

      reset();
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
    registrationMutation(data);
  };

  const handleFooterButtonClick = () => {
    navigate(routes.login);
  };

  useLanguageFormValidation(errors, trigger);

  return (
    <>
      {toastComponents}

      <PublicForm
        title={t('signupTitle')}
        description={t('signupDescription')}
        buttonText={t('signupButton')}
        footerDescriptionText={t('signupFooterDescription')}
        footerButtonText={t('signupFooterButton')}
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
