import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GlobalInput } from "./input";

export default {
  component: GlobalInput,
  title: "System/Atoms/Input",
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GlobalInput>;

export const Template: ComponentStory<typeof GlobalInput> = (args) => (
  <GlobalInput {...args} />
);

export const Email = Template.bind({});
Email.args = {
  placeholder: "enter your email",
  type: "email",
  required: true,
};

export const Password = Template.bind({});
Password.args = {
  placeholder: "heavilyEncrypted555",
  type: "password",
  required: true,
};

export const Name = Template.bind({});
Name.args = {
  placeholder: "Enter Your Name",
  type: 'text',
  required: false,
}
