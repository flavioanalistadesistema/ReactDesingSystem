import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    size: "sm",
    children: "Lorem Ipsum",
    color: "black-900",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
    color: {
      options: ["black-900", "gray-100"],
      control: { type: "inline-radio" },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
export const Md: StoryObj<TextProps> = {
  args: {
    size: "md",
  },
};
export const Lg: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p className="lg" color="black-900">
        Lorem Ipsum
      </p>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
