import { DataStatus, Dropdown, OptionSelectList, OptionSelectPriority } from '../../../../components';
import { Text } from '../../../../components';
import { DropdownOption } from '../../../../components/dropdown/types';
import { CreateTaskForm } from '../../../../components-logic/CreateTask';
import { useLanguageContext } from '../../../../context/LanguageContext';
import { useTranslatedOptions } from '../../../../hooks/useTranslatedOptions';
import { useTranslation } from '../../../../hooks/useTranslation';
import { NothingHereYetIcon } from '../../../../icons';
import { languageOptions } from '../../../../shared/data/languageOptions';
import { mockedSelectOptionsItemsForFiltering } from '../../../../shared/data/selectOptionsItems';
import { StyledDropdownWrapper, StyledTitleDropdownContainer, StyledTitlePriorityWrapper } from '../home.styles';

type CustomEmptyTaskProps = {
  closeCreateTaskModal: () => void;
  isEmptyAll: boolean;
  handleLanguageDropdownClick: (option: DropdownOption) => void;
  isOpenCreateTaskModal: boolean;
  onButtonEmptyTasksClick: () => void;
  handleOptionSelectClick: (option: OptionSelectPriority) => void;
  priority: string;
};

export const CustomEmptyTasks = ({
  closeCreateTaskModal,
  isEmptyAll,
  handleLanguageDropdownClick,
  isOpenCreateTaskModal,
  onButtonEmptyTasksClick,
  handleOptionSelectClick,
  priority,
}: CustomEmptyTaskProps) => {
  const { currentLanguage } = useLanguageContext();

  const translatedOptions = useTranslatedOptions(mockedSelectOptionsItemsForFiltering);

  const { t } = useTranslation();

  return (
    <>
      {isEmptyAll ? (
        <>
          <CreateTaskForm closeCreateTaskModal={closeCreateTaskModal} isOpen={isOpenCreateTaskModal} />
          <StyledDropdownWrapper>
            <Dropdown
              selectedOption={currentLanguage}
              type={'textWithImage'}
              dropdownOptions={languageOptions}
              onOptionClick={handleLanguageDropdownClick}
            />
          </StyledDropdownWrapper>
          <DataStatus
            icon={NothingHereYetIcon}
            onClick={onButtonEmptyTasksClick}
            title={t('emptyTasksTitle')}
            description={t('emptyTasksDescription')}
            buttonText={t('emptyTasksButtonText')}
            buttonPalette={'primary'}
          />
        </>
      ) : (
        <>
          <StyledTitlePriorityWrapper>
            <StyledTitleDropdownContainer>
              <Text fontWeight={'extraBold'} lineHeight={'extraSmall'}>
                {t('headerTitle')}
              </Text>
              <Dropdown
                selectedOption={currentLanguage}
                type={'textWithImage'}
                dropdownOptions={languageOptions}
                onOptionClick={handleLanguageDropdownClick}
              />
            </StyledTitleDropdownContainer>
            <OptionSelectList
              selectOptionList={translatedOptions}
              handleOptionSelectClick={handleOptionSelectClick}
              selectedOption={priority}
              showLine={true}
            />
          </StyledTitlePriorityWrapper>
          <DataStatus icon={NothingHereYetIcon} title={t('noResultsTitle')} description={t('noResultsDescription')} />
        </>
      )}
    </>
  );
};
