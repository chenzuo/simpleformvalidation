import styles from "./checklist.module.css";

// Importing the validation rules
import {
  UPPERCASE_REGEX,
  NUMBER_REGEX,
  LENGTH_REGEX,
  SPECIAL_CHARS_REGEX
} from "../utils/validationRules";

interface Props {
  value: string | undefined;
  className?: string;
}

const rules = [
  { label: "One uppercase", pattern: UPPERCASE_REGEX },
  { label: "One number", pattern: NUMBER_REGEX },
  { label: "Min 8 characters", pattern: LENGTH_REGEX },
  { label: "One special char", pattern: SPECIAL_CHARS_REGEX }
];

const CheckList = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      {rules.map((rule) => {
        const cn =
          props.value && props.value.match(rule.pattern) ? styles.passed : "";
        return <p className={cn}>{rule.label}</p>;
      })}
    </div>
  );
};

export default CheckList;
