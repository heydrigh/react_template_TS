module.exports = {
  stories: ["../src/components/**/stories.tsx", "../src/pages/**/stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs/register",
    "@storybook/preset-create-react-app"
  ]
};
