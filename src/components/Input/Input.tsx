import { useRef } from "react";
import styles from "./Input.module.scss";

type Props = {
  label?: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, type = "text", placeholder, onChange }: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={inputRef.current?.id}>
        {label}
      </label>

      <input
        className={styles.input}
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export { Input };
