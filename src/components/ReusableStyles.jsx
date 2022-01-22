import { css } from "styled-components";

export const applyCardStyles = css`
  background-color: var(--dark-background-color);
  border-radius: 1rem;
  padding: 1rem;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: max-content;
  }
`;
