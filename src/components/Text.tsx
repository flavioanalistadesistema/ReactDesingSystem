import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

export function Text({ size = "md", color, children, asChild }: TextProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
        "text-black-900": color === "black-900",
      })}
    >
      {children}
    </Comp>
  );
}
