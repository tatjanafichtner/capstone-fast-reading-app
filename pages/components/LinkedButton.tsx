import styled from "styled-components";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonURL = { buttonUrl: string; children: ReactNode };

export const LinkedButton = ({ buttonUrl, children }: ButtonURL) => {
  return (
    <>
      <Link href={`/${buttonUrl}`} passHref>
        <Button>{children}</Button>
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
