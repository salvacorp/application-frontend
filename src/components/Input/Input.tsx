import { useRef } from 'react';
import styles from './Input.module.scss';

type Props = {
  label?: string;
};

const Input = ({ label }: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={inputRef.current?.id}>{label}</label>
      <input className={styles.input} ref={inputRef} />
    </div>
  )
};

export { Input };
