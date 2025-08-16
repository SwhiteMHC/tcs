import CustomIcon from "../CustomIcon/CustomIcon";

interface OutlinedStarProps {
  color: string;
  size: number;
}

export default function OutlinedStar({ color, size }: OutlinedStarProps) {
  return (
    <CustomIcon
      name="starOutline"
      width={size}
      height={size}
      strokeWidth={1}
      stroke={color}
    />
  );
}
