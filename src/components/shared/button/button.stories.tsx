import { GlobalButton } from "./button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "System/Atoms/Button",
  component: GlobalButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GlobalButton>;

export const Template: ComponentStory<typeof GlobalButton> = (args) => (
  <GlobalButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Join us!",
  size: "0.7rem",
  width: '100px',
  backgroundColor: '#F8EBC2'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Login",
  size: "0.7rem",
  backgroundColor: "blanchedalmond",
  color: 'black',
  width: '200px',
};

export const Signup = Template.bind({});
Signup.args = {
  label: "Signup",
  size: "0.7rem",
  backgroundColor: "#277FFE",
  color: 'white',
  width: '400px'
}

export const Logout = Template.bind({});
Logout.args = {
  label: "Logout",
  size: "0.7rem",
  backgroundColor: "blanchedalmond",
  width: '100px',
}