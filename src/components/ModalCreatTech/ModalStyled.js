import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 9.375rem;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
`;
export const StyledDivModal = styled.div`
  width: 100%;
  max-width: 18.5rem;
  height: 22.5rem;
  background: var(--color-gray-3);
  border-radius: 4px;

  @media (min-width: 768px) {
    max-width: 23.125rem;
  }
`;
export const StyledModalHeader = styled.div`
  width: 100%;
    height: 3.125rem;
    background: var(--color-gray-2);
    display flex;
    justify-content: space-between;
    text-align: center;
    padding:1rem;
`;
export const StyledModalmain = styled.div`
  width: 100%;
  padding: 1rem;
`;
export const StyledCloseButton = styled.button`
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-gray-1);
  font-family: var(--font-primary);
`;
