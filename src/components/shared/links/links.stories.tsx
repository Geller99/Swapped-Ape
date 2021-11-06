
import { Links } from './links';
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  component: Links,
  title: "System/Molecules/Links",
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Links>;


export const Template: ComponentStory<typeof Links> = (args) => (
  <Links {...args} />
);

export const Github = Template.bind({});
Github.args = {
  label: "Github",
  href: "G"
}

export const Facebook = Template.bind({});
Facebook.args = {
  label: "Facebook",
  href: "F"
}

