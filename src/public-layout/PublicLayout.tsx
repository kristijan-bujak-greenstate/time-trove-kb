import { Outlet } from 'react-router-dom';

import { Dropdown } from '../components';
import { DropdownOption } from '../components/dropdown/types';
import { useLanguageContext } from '../context/LanguageContext';
import { languageOptions } from '../shared/data/languageOptions';

import { StyledDropdownWrapper, StyledOutletWrapper, StyledPublicLayout } from './publicLayout.styles';

export const PublicLayout = () => {
  const { currentLanguage, setCurrentLanguage } = useLanguageContext();

  const handleDropdownSelectClick = (option: DropdownOption) => {
    setCurrentLanguage(option);
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
        <Outlet />
      </StyledOutletWrapper>
    </StyledPublicLayout>
  );
};
