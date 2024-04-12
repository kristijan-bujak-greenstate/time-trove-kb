import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { useTranslation } from '../../hooks/useTranslation';
import { LogoutIcon } from '../../icons/LogoutIcon';
import { AuthData, authFieldNames, authSchema } from '../../shared/schemas/authSchema';

import { PublicForm, PublicFormProps } from './PublicForm';

const meta = {
  title: 'Example/Public Form',
  component: PublicForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PublicForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const StatefulPublicForm = ({ firstInputProps, secondInputProps, ...props }: PublicFormProps) => {
  const { t } = useTranslation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthData>({
    mode: 'onChange',
    resolver: zodResolver(authSchema(t)),
  });

  const onSubmit = (data: AuthData) => {
    alert('Email: ' + data.email + ', Password: ' + data.password);
  };

  return (
    <PublicForm
      {...props}
      firstInputProps={{
        ...firstInputProps,
        error: errors[authFieldNames.email]?.message,
        ...register(authFieldNames.email),
      }}
      secondInputProps={{
        ...secondInputProps,
        error: errors[authFieldNames.password]?.message,
        ...register(authFieldNames.password),
      }}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export const Base: Story = {
  args: {
    icon: LogoutIcon,
    title: 'Log in',
    description: 'Use your email to log in to your TimeTrove Dashboard.',
    buttonText: 'Log in',
    footerDescriptionText: 'Don’t have an account yet?',
    footerButtonText: 'Sign up',
    onFooterButtonClick: () => console.log('Bottom button clicked!'),
    firstInputProps: {
      label: 'Email',
      type: 'text',
      placeholder: 'Email',
    },
    secondInputProps: {
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
    },
    isLoadingButton: false,
  },
  render: ({ ...args }) => <StatefulPublicForm {...args} />,
};
