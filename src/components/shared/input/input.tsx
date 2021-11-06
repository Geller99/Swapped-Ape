import styled from "styled-components";

interface InputProps {
  size?: string;
  onFocus?: (e: any) => void;
  placeholder?: string;
  backgroundColor?: string;
  type?: string;
  color?: string;
  required?: boolean;
}

const GlobalTextInput = styled.input<InputProps>`
  font-size: ${(props) => props.size};
  padding: 10px 10px 10px 5px;
  display: block;
  width: 200px;
  border-radius: 6px;
  border: none;
  border-bottom: 2px solid #277FFE;
  background-color: ${(props) => props.backgroundColor};

  &:focus {
    outline: none;
  }
`;

export const GlobalInput = ({
  placeholder,
  size,
  backgroundColor,
  onFocus,
  type,
  required,
}: InputProps) => {
  onFocus = (e) => {
    e.target.style.width = '300px' ;
  };
  return (
    <GlobalTextInput
      onChange={onFocus}
      backgroundColor={backgroundColor}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};

