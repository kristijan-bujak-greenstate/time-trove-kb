import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { PublicForm } from '../../../components';
import { useLanguageFormValidation } from '../../../hooks/useLanguageFormValidation';
import { useTranslation } from '../../../hooks/useTranslation';
import { LogoutIcon } from '../../../icons';
import { routes } from '../../../router/routes';
import { AuthData, authFieldNames, authSchema } from '../../../shared/schemas/authSchema';

export const SignUp = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    trigger,
    formState: { errors },
  } = useForm<AuthData>({
    mode: 'onChange',
    resolver: zodResolver(authSchema(t)),
  });

  const onSubmit = (data: AuthData) => {
    alert('Email: ' + data.email + ', Password: ' + data.password);
  };

  const handleFooterButtonClick = () => {
    navigate(routes.login);
  };

  useLanguageFormValidation(errors, trigger);

  return (
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
    />
  );
};
