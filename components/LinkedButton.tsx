import styled from "styled-components";
import Link from "next/link";
import { MouseEventHandler } from "react";

export type ButtonProps = {
  buttonUrl: string;
  content: string;
  elementBefore?: any;
  elementAfter?: any;
  id: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const LinkedButton = ({
  buttonUrl,
  content,
  elementBefore,
  elementAfter,
  id,
  onClick,
}: ButtonProps) => {
  return (
    <Link href={`/${buttonUrl}`} passHref>
      <ButtonLink id={id} onClick={onClick}>
        {elementBefore}
        {content}
        {elementAfter}
      </ButtonLink>
    </Link>
  );
};

const ButtonLink = styled.a`
  all: unset;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
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
