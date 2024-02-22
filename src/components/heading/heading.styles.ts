import styled from 'styled-components';

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  line-height: ${({ theme }) => theme.typography.lineHeight.large};
  color: ${({ theme }) => theme.colors.black};
`;
