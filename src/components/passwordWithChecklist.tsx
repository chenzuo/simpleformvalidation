import React, { FormEvent } from "react";
import PasswordInput, { PasswordInputProps } from "./passwordInput";
import CheckList from "./checklist";

const PasswordWithChecklist = (props: PasswordInputProps) => {
  const { onChange, ...rest } = props;
  const [password, setPassword] = React.useState("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
    if (onChange) onChange(e);
  };

  return (
    <div>
      <PasswordInput {...rest} onChange={handleChange} />
      <CheckList value={password} />
    </div>
  );
};

export default PasswordWithChecklist;
