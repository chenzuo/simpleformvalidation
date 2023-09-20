import { FormEvent, useState } from "react";
import React from "react";
import classNames from "classnames";
import styles from "./textInput.module.css";

interface Props extends React.HTMLProps<HTMLInputElement> {
  id: string;
  name: string;
  className?: string;
  label?: string;
  errorText?: string;
  RhsComponent?: JSX.Element;
}

const TextInput = React.memo(
  ({ className, label, errorText, id, RhsComponent, ...rest }: Props) => {
    const [validationMessage, setValidationMessage] = useState<string>("");

    const onInvalid = (e: FormEvent) => {
      const target = e.target as HTMLInputElement;
      setValidationMessage(target.validationMessage);
    };

    const onBlur = (e: FormEvent) => {
      const target = e.target as HTMLInputElement;

      if (!!validationMessage) {
        setValidationMessage(target.validationMessage);
      }
    };

    const wrapperCn = classNames(className, styles.wrapper);

    return (
      <div className={wrapperCn}>
        <div>
          {label && (
            <div className={styles.label}>
              <label htmlFor={id}>{label}</label>
            </div>
          )}
        </div>
        <div className={styles.innerContent}>
          <input
            id={id}
            className={styles.input}
            onInvalid={onInvalid}
            onBlur={onBlur}
            {...rest}
          />

          {RhsComponent && (
            <div className={styles.rhsComponent}>{RhsComponent}</div>
          )}
        </div>

        {!!validationMessage && (
          <div className={styles.validationMessage}>
            {errorText || validationMessage}
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
export type { Props };
