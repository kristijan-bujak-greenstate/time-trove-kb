import { Button } from '../button/Button';
import { CircleIcon } from '../circle-icon/CircleIcon';
import { Heading } from '../heading/Heading';
import { Input } from '../input/Input';
import { OptionSelectList } from '../option-select-list/OptionSelectList';
import { Text } from '../text/Text';
import { TextArea } from '../text-area/TextArea';

import {
  StyledButtonWrapper,
  StyledDescriptionWrapper,
  StyledFormContainer,
  StyledFormTitleWrapper,
  StyledHeaderContainer,
  StyledHeadingWrapper,
  StyledInputTextAreaContainer,
  StyledOptionSelectWrapper,
  StyledTaskFormContainer,
} from './taskForm.styles';
import { TaskFormProps } from './types';

export const TaskForm = ({
  headerTitle,
  headerIcon,
  description,
  textAreaProps,
  inputProps,
  formTitle,
  buttonText,
  selectOptionList,
  hasErrorOptionSelectList,
  selectedOption,
  handleOptionSelectClick,
  isDisabledOptionSelectList,
  isButtonDisabled,
  onSubmitForm,
  optionSelectTitle,
  isLoadingButton = false,
}: TaskFormProps) => {
  return (
    <StyledTaskFormContainer>
      <StyledHeaderContainer>
        <CircleIcon icon={headerIcon} />
        <StyledHeadingWrapper>
          <Heading>{headerTitle}</Heading>
        </StyledHeadingWrapper>
      </StyledHeaderContainer>
      {description && (
        <StyledDescriptionWrapper>
          <Text lineHeight={'small'} fontSize={'small'} palette={'neutrals'} color={'hue300'}>
            {description}
          </Text>
        </StyledDescriptionWrapper>
      )}
      <StyledFormTitleWrapper>
        <Text lineHeight={'medium'} fontSize={'medium'} fontWeight={'extraBold'}>
          {formTitle}
        </Text>
      </StyledFormTitleWrapper>
      <StyledFormContainer onSubmit={onSubmitForm}>
        <StyledInputTextAreaContainer>
          <Input {...inputProps} />
          <TextArea {...textAreaProps} />
        </StyledInputTextAreaContainer>
        <StyledOptionSelectWrapper>
          <Text lineHeight={'medium'} fontSize={'medium'} fontWeight={'extraBold'}>
            {optionSelectTitle}
          </Text>
          <OptionSelectList
            selectOptionList={selectOptionList}
            handleOptionSelectClick={handleOptionSelectClick}
            isDisabled={isDisabledOptionSelectList}
            hasError={hasErrorOptionSelectList}
            selectedOption={selectedOption?.value}
          />
        </StyledOptionSelectWrapper>

        <StyledButtonWrapper>
          <Button
            isLoading={isLoadingButton}
            type={'submit'}
            size={'extraLarge'}
            disabled={isButtonDisabled}
            palette={'primary'}
            color={'hue100'}
          >
            {buttonText}
          </Button>
        </StyledButtonWrapper>
      </StyledFormContainer>
    </StyledTaskFormContainer>
  );
};
