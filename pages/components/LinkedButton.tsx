import styled from "styled-components";
import Link from "next/link";
import { ComponentProps, MouseEventHandler, ReactPropTypes } from "react";

export type ButtonProps = {
  buttonUrl: string;
  content: string;
  icon: any;
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
    <>
      <Link href={`/${buttonUrl}`} passHref>
        <Button id={id} onClick={onClick}>
          {content}
          {icon}
        </Button>
      </Link>
    </>
  );
};

/*
########
STYLING
########
*/

const Button = styled.a`
  all: unset;
  padding: 3px;
  border-radius: 50;
  width: 1rem;
  background-color: hotpink;
  cursor: pointer;
`;
