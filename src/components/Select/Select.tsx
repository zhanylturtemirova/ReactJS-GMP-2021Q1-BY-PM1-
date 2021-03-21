import React, { ReactElement, FC } from "react";
import {
  SelectWrapper,
  StyledLabel,
  StyledSelect,
  StyledOption,
} from "./Select.styles";

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  options: string[];
}
export const Select: FC<InputInterface> = ({
  label,
  name,
  options,
  ...props
}): ReactElement => {
  return (
    <SelectWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledSelect name={name}>
        {options.map((item) => (
          <StyledOption value={item}>{item}</StyledOption>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};
export default Select;