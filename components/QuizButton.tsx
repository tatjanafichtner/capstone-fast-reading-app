import styled from "styled-components";
import { MouseEventHandler } from "react";

export type QuizButtonProps = {
  content: string;
  elementBefore?: any;
  elementAfter?: any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const QuizButton = ({
  onClick,
  content,
  elementBefore,
  elementAfter,
}: QuizButtonProps) => (
  <StyledButton onClick={onClick}>
    {elementBefore}
    {content}
    {elementAfter}
  </StyledButton>
);

const StyledButton = styled.button`
  all: unset;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: var(--custom-color-blue);
  color: var(--custom-color-white);
  font-family: "Amatic SC";
  font-size: 1.5rem;
  cursor: pointer;
  &:active {
    box-shadow: 5px 5px 5px lightslategrey;
  }
`;
