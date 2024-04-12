import styled from 'styled-components';

export const StyledSpinnerWrapperFullPage = styled.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFullPageWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  overflow: auto;
`;
