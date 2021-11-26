import styled from "styled-components";
import Image from "next/image";

export type FlyingBookProps = {
  imgLocation: "left" | "right";
  description: string;
  imageWidth: number;
  imageHeight: number;
  top?: number;
};

export const FlyingBook = ({
  imgLocation,
  description,
  imageWidth,
  imageHeight,
  top,
}: FlyingBookProps) => {
  return (
    <FlyingBookStyle position={imgLocation} top={top ?? 0}>
      <Image
        src={"/pics/flying-book-" + imgLocation + ".svg"}
        alt={description}
        width={imageWidth}
        height={imageHeight}
      />
    </FlyingBookStyle>
  );
};

const FlyingBookStyle = styled.div<{
  position?: "left" | "right";
  top: number;
}>`
  position: absolute;
  z-index: 1;
  top: ${(props) => props.top}px;
  left: ${(props) => (props.position === "left" ? "-20px" : "auto")};
  right: ${(props) => (props.position === "right" ? "-20px" : "auto")};
`;
