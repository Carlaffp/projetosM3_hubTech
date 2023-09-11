import styled, { css } from "styled-components";

export const TitleStyles = css`
  font-family: var(--font-primary);
  font-weight: 700;

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 1.125rem;
        `;
      case "md":
        return css`
          font-size: 1rem;
        `;
      case "sm":
        return css`
          font-size: 0.875rem;
        `;
    }
  }}
`;

export const StyledTitleOne = styled.h1`
  ${TitleStyles};
  color: var(--color-gray-0);
`;

export const StyledTitleTwo = styled.h2`
  ${TitleStyles};
  color: var(--color-white);
`;

export const StyledTitleThree = styled.h3`
  ${TitleStyles};
`;

export const StyledParagraph = styled.p`
  font-family: var(--font-primary);
  color: ${({ fontColor }) => (fontColor ? fontColor : "var(--color-gray-1)")};
  line-height: 1.6;

  ${({ fontSize }) => {
    switch (fontSize) {
      case "sm":
        return css`
          font-size: 0.625rem;
        `;
      default:
        return css`
          font-size: 0.75rem;
        `;
    }
  }};

  ${({ fontWeight }) => {
    switch (fontWeight) {
      case "sm":
        return css`
          font-weight: 400;
        `;
      case "lg":
        return css`
          font-weight: 600;
        `;
    }
  }}
`;
