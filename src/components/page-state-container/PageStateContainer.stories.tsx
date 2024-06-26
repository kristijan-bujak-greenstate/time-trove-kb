import type { Meta, StoryObj } from '@storybook/react';

import { DataStatus } from '..';
import { useTranslation } from '../../hooks/useTranslation';
import { Error404Icon } from '../../icons';

import { PageStateContainer } from './PageStateContainer';
import { StateProps } from './types';

const meta = {
  title: 'Example/Page State Container',
  component: PageStateContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageStateContainer>;

export default meta;
type Story = StoryObj<typeof PageStateContainer>;

const StatefulPageStateContainer = ({ ...args }: StateProps) => {
  const { t } = useTranslation();

  return <PageStateContainer {...args} t={t} />;
};

export const Loading: Story = {
  args: {
    isLoading: true,
    isEmpty: false,
    isError: false,
    children: <></>,
  },
  render: (args) => <StatefulPageStateContainer {...(args as StateProps)} />,
};

export const Empty: Story = {
  args: {
    ...Loading.args,
    isLoading: false,
    isEmpty: true,
  } as StateProps,
  render: (args) => <StatefulPageStateContainer {...(args as StateProps)} />,
};

export const SomethingWentWrong: Story = {
  args: {
    ...Loading.args,
    isLoading: false,
    isError: true,
    children: <></>,
  } as StateProps,
  render: (args) => <StatefulPageStateContainer {...(args as StateProps)} />,
};

export const CustomNotFoundPage: Story = {
  args: {
    children: (
      <DataStatus
        icon={Error404Icon}
        onClick={() => console.log('Button clicked')}
        title={'Page not found'}
        description={
          'We apologize for the inconvenience, but it appears that the page you are attempting to access is currently unavailable. This might be due to a temporary technical issue or an outdated link.'
        }
        buttonText={'Back home'}
      />
    ),
    isFullPage: true,
  },
};
