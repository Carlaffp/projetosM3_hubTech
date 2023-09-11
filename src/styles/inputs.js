import styled from "styled-components";

export const StyledFildBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  .div {
    width: 100%;
    position: relative;
  }
`;
export const StyledInputs = styled.input`
  width: 100%;
  height: 2.4375rem;

  font-family: var(--font-primary);
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--color-gray-0);
  padding: 0 0.8125rem;
  background: var(--color-gray-2);
  border-radius: 0.1875rem;
  border: 1px solid var(--color-grey-2);
`;
export const StyledLaabel = styled.label`
  font-family: var(--font-primary);
  font-size: 0.625rem;
  font-weight: 400;
  color: var(--color-gray-0);
  
`;
