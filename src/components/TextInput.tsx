import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children?: ReactNode;
}

TextInputRoot.displayName = "TextInput.Root";
// eslint-disable-next-line react-refresh/only-export-components
function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full l focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

interface TextInputIconProps {
  children?: ReactNode;
}

TextInputIcon.displayName = "TextInput.Icon";
// eslint-disable-next-line react-refresh/only-export-components
function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

TextInputInput.displayName = "TextInput.Input";
// eslint-disable-next-line react-refresh/only-export-components
function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparente flex-1 text-gray-100 text-xl placeholder:text-gray-400 outline-none"
      {...props}
    ></input>
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
