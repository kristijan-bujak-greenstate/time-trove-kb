import styled from 'styled-components';

export const StyledPageShell = styled.div`
  max-width: ${({ theme }) => theme.pageWidth};
  width: 100%;
  height: 100%;
  margin: auto;
  padding-top: 1.25rem;
`;
