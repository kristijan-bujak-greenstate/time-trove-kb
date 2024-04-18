import { Outlet } from 'react-router-dom';

import { Dropdown } from '../../components';
import { ControlledForm } from '../../components/controlled-form/ControlledForm';
import { DropdownOption } from '../../components/dropdown/types';
import { useLanguageContext } from '../../context/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import { languageOptions } from '../../shared/data/languageOptions';
import { authSchema } from '../../shared/schemas/authSchema';

import { StyledDropdownWrapper, StyledOutletWrapper, StyledPublicLayout } from './publicLayout.styles';

export const PublicLayout = () => {
  const { currentLanguage, setCurrentLanguage } = useLanguageContext();

  const handleDropdownSelectClick = (option: DropdownOption) => {
    setCurrentLanguage(option);
  };

  const { t } = useTranslation();

  const defaultValues = {
    email: '',
    password: '',
  };

  return (
    <StyledPublicLayout>
      <StyledDropdownWrapper>
        <Dropdown
          selectedOption={currentLanguage}
          type={'textWithImage'}
          dropdownOptions={languageOptions}
          onOptionClick={handleDropdownSelectClick}
        />
      </StyledDropdownWrapper>
      <StyledOutletWrapper>
        <ControlledForm schema={authSchema(t)} defaultValues={defaultValues}>
          <Outlet />
        </ControlledForm>
      </StyledOutletWrapper>
    </StyledPublicLayout>
  );
};
