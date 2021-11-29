import Image from "next/image";

type IconProps = {
  source: string;
  description: string;
  width: number;
  height: number;
};

export const ButtonIcon = ({
  source,
  description,
  width,
  height,
}: IconProps) => {
  return <Image src={source} alt={description} width={width} height={height} />;
};
