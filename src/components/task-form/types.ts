import { ComponentType } from 'react';

import { InputProps } from '../input/Input';
import { OptionSelectPriority } from '../option-select-list/OptionSelectList';
import { TextAreaProps } from '../text-area/TextArea';

export type TaskFormProps = {
  headerIcon: ComponentType;
  headerTitle: string;
  description?: string;
  formTitle: string;
  inputProps: InputProps;
  textAreaProps: TextAreaProps;
  buttonText: string;
  selectOptionList: OptionSelectPriority[];
  hasErrorOptionSelectList?: boolean;
  selectedOption?: OptionSelectPriority;
  handleOptionSelectClick: (option: OptionSelectPriority) => void;
  isDisabledOptionSelectList?: boolean;
  isButtonDisabled?: boolean;
  onSubmitForm: () => void;
  optionSelectTitle: string;
};
