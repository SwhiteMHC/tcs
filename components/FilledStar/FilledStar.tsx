import CustomIcon from "../CustomIcon/CustomIcon";

interface FilledStarProps {
  color: string;
  size: number;
}

export default function FilledStar({ color, size }: FilledStarProps) {
  return (
    <CustomIcon
      name="starOutline"
      width={size}
      height={size}
      strokeWidth={1}
      stroke={color}
      fill={color}
    />
  );
}
