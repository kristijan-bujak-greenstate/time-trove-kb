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
      titleKey: 'signupToastTitleSuccess',
      descriptionKey: 'signupToastDescriptionSuccess',
    });
    reset(defaultValues);
  };

  const {
    addToQueue,
    toastComponents,
    navigate,
    t,
    errors,
    register,
    handleSubmit,
    isButtonDisabled,
    isLoading,
    reset,
    onSubmit,
  } = usePublicForm({
    mutationFn: (requestData) => axiosInstance.post(endpoints.registration, requestData),
    action: 'signup',
    onSuccessFunction: handleOnSuccess,
  });

  return (
    <>
      {toastComponents}

      <PublicForm
        title={t('signupTitle')}
        description={t('signupDescription')}
        buttonText={t('signupButton')}
        footerDescriptionText={t('signupFooterDescription')}
        footerButtonText={t('signupFooterButton')}
        onFooterButtonClick={() => navigate(routes.login)}
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
