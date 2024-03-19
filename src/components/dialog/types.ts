type DialogBaseProps = {
  isOpen: boolean;
  onOverlayClick: () => void;
  status: 'warning' | 'error' | 'success';
  onPrimaryButtonClick: () => void;
  primaryButtonText: string;
  description: string;
  title: string;
};

type DialogWithSecondaryButtonProps = DialogBaseProps & {
  onSecondaryButtonClick: () => void;
  secondaryButtonText: string;
};

type DialogWithoutSecondaryButtonProps = DialogBaseProps & {
  onSecondaryButtonClick?: never;
  secondaryButtonText?: never;
};

export type DialogProps = DialogWithSecondaryButtonProps | DialogWithoutSecondaryButtonProps;
