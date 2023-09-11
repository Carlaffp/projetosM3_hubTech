import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.4s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  font-family: var(--font-primary);
  font-size: 0.75rem;
  ${({ fontWeight }) => {
    switch (fontWeight) {
      case "lg":
        return css`
          font-weight: 600;
        `;
      case "md":
        return css`
          font-weight: 500;
        `;
    }
  }};
  border-radius: 4px;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "lg":
        return css`
          width: 100%;
          padding: 0 1.375rem;
          height: 2.375rem;
        `;
      case "md":
        return css`
          width: 4.875rem;
          padding: 0 1rem;
          height: 2rem;
        `;
      case "sm":
        return css`
          width: 2rem;
          padding: 0 1rem;
          height: 2rem;
          font-size: 1rem;
        `;
    }
  }}

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "primary":
        return css`
          background: var(--color-primary);
          border: 0.0625rem solid var(--color-primary);
          color: var(--color-white);

          &:hover {
            background: var(--color-primary-focus);
            border: 0.0625rem solid var(--color-primary-focus);
          }
        `;

      case "disabled":
        return css`
          background: var(--color-gray-1);
          border: 0.0625rem solid var(--color-gray-1);
          color: var(--color-gray-0);

          &:hover {
            background: var(--color-gray-2);
            border: 0.0625rem solid var(--color-gray-2);
          }
        `;

      case "negative":
        return css`
          background: var(--color-primary-negative);
          color: var(--color-white);
          border: 0.0625rem solid var(--color-primary-negative);

          &:hover {
            background: var(--color-primary-focus);
            border: 0.0625rem solid var(--color-primary-focus);
          }
        `;
      case "black":
        return css`
          background: var(--color-gray-3);
          color: var(--color-gray-0);
          border: 0.0625rem solid var(--color-gray-3);

          &:hover {
            background: var(--color-gray-2);
            border: 0.0625rem solid var(--color-gray-2);
          }
        `;
    }
  }}
`;

export const StyledButton = styled.button`
  ${ButtonStyles};
`;

export const StyledButtonUpdateModal = styled.button`
  ${ButtonStyles};
  height: 3rem;
  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "lg":
        return css`
          width: 12.75rem;
          padding: 0 1.375rem;
        `;
      case "md":
        return css`
          width: 6.125rem;
          padding: 0 1rem;
        `;
    }
  }}
`;
export const StyledLink = styled(Link)`
  ${ButtonStyles};
`;
