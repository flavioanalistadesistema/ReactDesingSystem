import { themes } from "@storybook/theming";
import type { Preview } from "@storybook/react";

import "../src/styles/global.css";

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};
