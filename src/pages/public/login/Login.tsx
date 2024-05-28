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

  const { navigate, errors, register, handleSubmit, onSubmit, isButtonDisabled, isLoading, t } = usePublicForm({
    mutationFn: (requestData) => axiosInstance.post(endpoints.login, requestData),
    action: 'login',
    onSuccessFunction: handleOnSuccess,
  });

  return (
    <>
      <PublicForm
        title={t('publicForm.login.title')}
        description={t('publicForm.login.description')}
        buttonText={t('publicForm.login.button')}
        footerDescriptionText={t('publicForm.login.footerDescription')}
        footerButtonText={t('publicForm.login.footerButton')}
        onFooterButtonClick={() => navigate(routes.signUp)}
        firstInputProps={{
          label: t('publicForm.base.emailLabel'),
          type: 'text',
          placeholder: t('publicForm.base.emailPlaceholder'),
          error: errors[authFieldNames.email]?.message,
          ...register(authFieldNames.email),
        }}
        secondInputProps={{
          label: t('publicForm.base.passwordLabel'),
          type: 'password',
          placeholder: t('publicForm.base.passwordPlaceholder'),
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
