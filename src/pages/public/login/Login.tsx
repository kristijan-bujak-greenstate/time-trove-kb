import { axiosInstance } from '../../../api/axiosInstance';
import { endpoints } from '../../../api/endpoints/endpoints';
import { PublicForm } from '../../../components';
import { ControlledForm } from '../../../components/controlled-form/ControlledForm';
import { setAccessToken, setRefreshToken } from '../../../helpers/tokenHelpers';
import { usePublicForm } from '../../../hooks/usePublicForm';
import { LogoutIcon } from '../../../icons';
import { routes } from '../../../router/routes';
import { authFieldNames, authSchema } from '../../../shared/schemas/authSchema';
import { useAuthStore } from '../../../store/useAuthStore';

const defaultValues = {
  email: '',
  password: '',
};

export const Login = () => {
  return (
    <ControlledForm schema={authSchema} defaultValues={defaultValues}>
      <LoginForm />
    </ControlledForm>
  );
};

export const LoginForm = () => {
  const handleOnSuccess = (accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    useAuthStore.getState().setIsLogged(true);
    navigate(routes.root);
  };

  const { navigate, t, errors, register, handleSubmit, onSubmit, isButtonDisabled, isLoading } = usePublicForm({
    mutationFn: (requestData) => axiosInstance.post(endpoints.login, requestData),
    action: 'login',
    onSuccessFunction: handleOnSuccess,
  });

  return (
    <>
      <PublicForm
        title={t('loginTitle')}
        description={t('loginDescription')}
        buttonText={t('loginButton')}
        footerDescriptionText={t('loginFooterDescription')}
        footerButtonText={t('loginFooterButton')}
        onFooterButtonClick={() => navigate(routes.signUp)}
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
        isButtonDisabled={isButtonDisabled}
      />
    </>
  );
};
