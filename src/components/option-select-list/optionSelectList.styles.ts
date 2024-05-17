import styled from 'styled-components';

export const StyledOptionSelectList = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const StyledVerticalLine = styled.div`
  width: 1px;
  height: 2rem;
  background-color: ${({ theme }) => `${theme.colors.neutrals.hue100}`};
`;
