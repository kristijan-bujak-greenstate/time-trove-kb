import styled from 'styled-components';

import { DropdownProps } from './Dropdown';

export const StyledSelect = styled.div<{ $type: DropdownProps['type']; $isDisabled: boolean }>`
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.neutrals.hue50};
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${({ theme, $isDisabled }) =>
    $isDisabled ? theme.colors.primary.hue250 : theme.colors.neutrals.hue0};
`;

export const StyledDropdownOptions = styled.div<{ $isOpen: boolean; $type: DropdownProps['type'] }>`
  border: 1px solid ${({ theme }) => theme.colors.neutrals.hue50};
  border-radius: 0.5rem;
  width: 100%;
  position: absolute;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.neutrals.hue0};
  transform-origin: top;
  transform: scale(${({ $isOpen }) => ($isOpen ? '1' : '0')});
  transition: transform 150ms ease-out;
`;

export const StyledOption = styled.div<{ $isSelected: boolean }>`
  background-color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.neutrals.hue50 : 'transparent')};
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, $isSelected }) => ($isSelected ? 'none' : theme.colors.primary.hue250)};
  }
  transform: translateY(0.5rem);
`;

export const StyledImageWrapper = styled.div`
  width: 2rem;
  height: 1.5rem;
  margin-right: 0.625rem;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const StyledSelectedOptionContainer = styled.div`
  display: flex;
`;

export const StyledTextWrapper = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const StyledDropdown = styled.div`
  position: relative;
`;

export const StyledArrowWrapper = styled.div<{ $isOpenDropdown: boolean }>`
  transform: ${({ $isOpenDropdown }) => ($isOpenDropdown ? 'rotate(0)' : 'rotate(-180deg)')};
  transition: transform 150ms ease-out;
`;
