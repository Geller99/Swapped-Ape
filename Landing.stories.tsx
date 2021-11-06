import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Landing } from "./src/pages/Landing";
import { GlobalForm } from './src/components/form/Form';


export default {
  component: Landing,
  title: "System/pages/landing",
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Landing>;

export const Template: ComponentStory<typeof Landing> = (args) => (
  <Landing {...args} />
);


export const LightMode = Template.bind({});
LightMode.args = {
  backgroundColor: '#F2F5FF',
  

}