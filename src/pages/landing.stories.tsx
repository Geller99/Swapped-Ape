import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Landing } from './Landing';
import { GlobalForm } from '../components/form/Form';


export default {
  component: Landing,
  title: "System/Pages/Landing",
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
  children: <GlobalForm label='Sign in' />
}

export const DarkMode = Template.bind({});
DarkMode.args = {
  backgroundColor: '#100C18',
  children: <GlobalForm label='Sign in' />
}

