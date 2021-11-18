import styled from "styled-components";
import Link from "next/link";
import { MouseEventHandler } from "react";

export type ButtonProps = {
  buttonUrl: string;
  content: string;
  icon?: string;
  id: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const LinkedButton = ({
  buttonUrl,
  content,
  icon,
  id,
  onClick,
}: ButtonProps) => {
  return (
    <Link href={`/${buttonUrl}`} passHref>
      <ButtonLink id={id} onClick={onClick}>
        {content}
        {icon}
      </ButtonLink>
    </Link>
  );
};

/*
########
STYLING
########
*/

const ButtonLink = styled.a`
  all: unset;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: var(--custom-color-blue);
  color: var(--custom-color-white);
  font-family: "Amatic SC";
  font-size: 30px;
  cursor: pointer;
`;
