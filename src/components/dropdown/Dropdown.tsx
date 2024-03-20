import { useRef, useState } from 'react';

import { useOutsideClick } from '../../hooks/useOutsideClick';
import { ArrowDown } from '../../icons/ArrowDown';
import { ArrowUp } from '../../icons/ArrowUp';
import { Success } from '../../icons/Success';
import { Text } from '../text/Text';
import { ThemedIcon } from '../themed-icon/ThemedIcon';

import {
  StyledDropdown,
  StyledDropdownOptions,
  StyledImage,
  StyledImageWrapper,
  StyledOption,
  StyledSelectedOptionContainer,
  StyledSelect,
} from './dropdown.styles';
import { DropdownOption } from './types';

export type DropdownProps = {
  selectedOption?: DropdownOption;
  type: 'text' | 'textWithImage';
  onOptionClick: (option: DropdownOption) => void;
  defaultText?: string;
  dropdownOptions: DropdownOption[];
  isDisabled?: boolean;
};

export const Dropdown = ({
  type = 'textWithImage',
  selectedOption,
  onOptionClick,
  defaultText = '',
  dropdownOptions,
  isDisabled = false,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

  const toggleIsOpenDropdown = () => {
    setIsOpenDropdown((isOpenDropdown) => !isOpenDropdown);
  };

  const closeDropdown = () => {
    setIsOpenDropdown(false);
  };

  useOutsideClick([dropdownRef], closeDropdown);

  return (
    <StyledDropdown ref={dropdownRef}>
      <StyledSelect $type={type} $isDisabled={isDisabled} onClick={!isDisabled ? toggleIsOpenDropdown : undefined}>
        <StyledSelectedOptionContainer>
          {selectedOption?.imageUrl && type === 'textWithImage' && (
            <StyledImageWrapper>
              <StyledImage src={selectedOption.imageUrl} />
            </StyledImageWrapper>
          )}
          <Text
            palette={'neutrals'}
            color={isDisabled ? 'hue150' : 'hue400'}
            fontWeight={!selectedOption || isOpenDropdown ? 'regular' : 'bold'}
          >
            {selectedOption?.value || defaultText}
          </Text>
        </StyledSelectedOptionContainer>
        <ThemedIcon icon={isOpenDropdown ? ArrowUp : ArrowDown} size={'medium'} palette={'neutrals'} color={'hue400'} />
      </StyledSelect>

      <StyledDropdownOptions $isOpen={isOpenDropdown} $type={type}>
        {dropdownOptions.map((dropdownOption) => (
          <StyledOption
            $isSelected={selectedOption?.value === dropdownOption.value}
            key={dropdownOption.id}
            onClick={() => {
              onOptionClick(dropdownOption);
              toggleIsOpenDropdown();
            }}
          >
            <StyledSelectedOptionContainer>
              {dropdownOption.imageUrl && type == 'textWithImage' && (
                <StyledImageWrapper>
                  <StyledImage src={dropdownOption.imageUrl} />
                </StyledImageWrapper>
              )}
              <Text fontWeight={dropdownOption.value === selectedOption?.value ? 'bold' : 'regular'}>
                {dropdownOption.value}
              </Text>
            </StyledSelectedOptionContainer>
            {selectedOption?.value === dropdownOption.value && (
              <ThemedIcon icon={Success} size={'medium'} palette={'primary'} color={'hue300'} />
            )}
          </StyledOption>
        ))}
      </StyledDropdownOptions>
    </StyledDropdown>
  );
};
