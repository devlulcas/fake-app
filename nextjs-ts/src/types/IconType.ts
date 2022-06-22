interface IconTypeProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export type IconType = (props: IconTypeProps) => JSX.Element;
