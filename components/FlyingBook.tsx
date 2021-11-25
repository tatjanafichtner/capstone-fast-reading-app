import styled from "styled-components";
import Image from "next/image";

export type FlyingBookProps = {
  imgLocation: "left" | "right";
  description: string;
  imageWidth: number;
  imageHeight: number;
};

export const FlyingBook = ({
  imgLocation,
  description,
  imageWidth,
  imageHeight,
}: FlyingBookProps) => {
  return (
    <FlyingBookStyle>
      <Image
        src={"/pics/flying-book-" + imgLocation + ".svg"}
        alt={description}
        className={"flying-book-" + imgLocation}
        width={imageWidth}
        height={imageHeight}
      />
    </FlyingBookStyle>
  );
};

const FlyingBookStyle = styled.div`
  position: fixed;
  .flying-book-left {
    top: 0px;
    left: 0px;
  }
  .flying-book-right {
    top: 0px;
    right: 0px;
  }
`;
