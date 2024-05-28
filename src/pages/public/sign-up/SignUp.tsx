import { axiosInstance } from '../../../api/axiosInstance';
import { endpoints } from '../../../api/endpoints/endpoints';
import { PublicForm } from '../../../components';
import { ControlledForm } from '../../../components/controlled-form/ControlledForm';
import { usePublicForm } from '../../../hooks/usePublicForm';
import { LogoutIcon } from '../../../icons';
import { routes } from '../../../router/routes';
import { authFieldNames, authSchema } from '../../../shared/schemas/authSchema';

const defaultValues = {
  email: '',
  password: '',
};

export const SignUp = () => {
  return (
    <ControlledForm schema={authSchema} defaultValues={defaultValues}>
      <SignUpForm />
    </ControlledForm>
  );
};

export const SignUpForm = () => {
  const handleOnSuccess = () => {
    addToQueue({
      status: 'success',
      titleKey: 'toast.success.registration.title',
      descriptionKey: 'toast.success.registration.description',
    });
    reset(defaultValues);
    navigate(routes.login);
  };

  const { addToQueue, navigate, t, errors, register, handleSubmit, isButtonDisabled, isLoading, reset, onSubmit } =
    usePublicForm({
      mutationFn: (requestData) => axiosInstance.post(endpoints.registration, requestData),
      action: 'registration',
      onSuccessFunction: handleOnSuccess,
    });

  return (
    <>
      <PublicForm
        title={t('publicForm.registration.title')}
        description={t('publicForm.registration.description')}
        buttonText={t('publicForm.registration.button')}
        footerDescriptionText={t('publicForm.registration.footerDescription')}
        footerButtonText={t('publicForm.registration.footerButton')}
        onFooterButtonClick={() => navigate(routes.login)}
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
