import { Button as ButtonNext } from "@nextui-org/react";

export default function Button({
  children,
  size = "md",
  color = "secondary",
  radius = "md",
  isLoading = false,
  isDisabled = true,
  title,
  ...props
}: {
  size?: "md" | "sm" | "lg";
  color?:
    | "secondary"
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger";
  radius?: "md" | "sm" | "lg" | "none" | "full";
  isLoading?: boolean;
  className?: string;
  title?: string;
  isDisabled?: boolean;
  [x: string]: any;
}) {
  return (
    <ButtonNext
      size={size}
      color={color}
      radius={radius}
      isDisabled={isDisabled}
      isLoading={isLoading}
      className="w-full"
      {...props}
    >
      {title ? title : children}
    </ButtonNext>
  );
}
