import { Icon, IconName } from "../Icon";
import styles from './Button.module.scss';

type Props = {
  title: string;
  onClick?: () => void;
  icon: IconName;
};

const Button = ({ title, onClick, icon }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      { icon && <Icon name={icon} />}
      <button className={styles.button} onClick={onClick}>{title}</button>
    </div>
  )
};

export { Button };
