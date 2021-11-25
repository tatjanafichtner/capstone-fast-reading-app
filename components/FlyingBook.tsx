import styled from "styled-components";
import Image from "next/image";

export type FlyingBookProps = {
  imgLocation: "left" | "right";
  description: string;
  imageWidth: number;
  imageHeight: number;
  position: string;
};

export const FlyingBook = ({
  imgLocation,
  description,
  imageWidth,
  imageHeight,
}: FlyingBookProps) => {
  return (
    <FlyingBookStyle position={imgLocation}>
      <Image
        src={"/pics/flying-book-" + imgLocation + ".svg"}
        alt={description}
        width={imageWidth}
        height={imageHeight}
      />
    </FlyingBookStyle>
  );
};

const FlyingBookStyle = styled.div<{ position?: "left" | "right" }>`
  position: absolute;
  z-index: 1;
  ${(prop) => (prop.position === "left" ? "left:0; top:100px;" : "right:0;")}
`;
