import { PASSWORD_VALID_REGEX } from "../utils/validationRules";
import React from "react";
import { useState } from "react";
import TextInput, { Props } from "./textInput";
import styles from "./passwordInput.module.css";

interface PasswordInputProps extends Omit<Props, "pattern" | "type" | "ref"> {
  skipValidation?: boolean;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

const PlainTextToggle = ({
  setIsPlainText,
  isPlainText
}: {
  setIsPlainText: React.Dispatch<React.SetStateAction<boolean>>;
  isPlainText: boolean;
}) => {
  return (
    <button
      className={styles.rhsComponent}
      type="button"
      onClick={() => setIsPlainText(!isPlainText)}
    >
      <span className="flex items-center flex-nowrap gap-2">
        {isPlainText ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <g data-name="eye-off">
                  <path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56z" />
                  <path d="M12.22 17c-4.3.1-7.12-3.59-8-5a13.7 13.7 0 0 1 2.24-2.72L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67l-1.58-1.58a7.74 7.74 0 0 1-1.7.25zm9.65-5.5c-.64-1.11-4.17-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67l1.58 1.58a7.74 7.74 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.7 13.7 0 0 1-2.29 2.72L19 16.13a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0-.04-1z" />
                </g>
              </g>
            </svg>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <g data-name="eye">
                  <path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z" />
                  <path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z" />
                </g>
              </g>
            </svg>
          </svg>
        )}
      </span>
    </button>
  );
};

const PasswordInput = React.memo(
  ({ skipValidation = false, ...rest }: PasswordInputProps) => {
    const [isPlainText, setIsPlainText] = useState(false);

    return (
      <TextInput
        type={isPlainText ? "text" : "password"}
        pattern={skipValidation ? undefined : PASSWORD_VALID_REGEX.source}
        RhsComponent={PlainTextToggle({ setIsPlainText, isPlainText })}
        {...rest}
      />
    );
  }
);

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;
export type { PasswordInputProps };
