import styled from 'styled-components';

export const StyledPageStateContainer = styled.div<{ $isFullPage?: boolean }>`
  height: ${({ $isFullPage }) => ($isFullPage ? '100vh' : '100%')};
  padding: 2rem;
  z-index: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;