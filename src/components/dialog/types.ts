export type DialogBaseProps = {
  isOpen: boolean;
  onOverlayClick: () => void;
  status: 'warning' | 'error' | 'success';
  onPrimaryButtonClick: () => void;
  primaryButtonText: string;
  description: string;
  title: string;
};

export type DialogWithSecondaryButtonProps = DialogBaseProps & {
  showSecondaryButton?: true;
  onSecondaryButtonClick: () => void;
  secondaryButtonText: string;
};

export type DialogWithoutSecondaryButtonProps = DialogBaseProps & {
  showSecondaryButton?: false;
};

export type DialogProps = DialogWithSecondaryButtonProps | DialogWithoutSecondaryButtonProps;
