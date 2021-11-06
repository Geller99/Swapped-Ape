import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GlobalForm } from "../Form";

export default {
  component: GlobalForm,
  title: "System/Molecules/Form",
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GlobalForm>;

export const Template: ComponentStory<typeof GlobalForm> = (args) => (
  <GlobalForm {...args} />
);


export const Register = Template.bind({});
Register.args = {
  label: 'Register'
}

export const Login = Template.bind({});
Login.args = {
  label: 'Sign in'
}