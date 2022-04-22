import { Icon, IconName } from "../Icon";
import styles from './Button.module.scss';

type Props = {
  title: string;
  onClick?: () => void;
  icon: IconName;
  rightIcon?: boolean;
};

const Button = ({ title, onClick, icon, rightIcon = false }: Props): JSX.Element => {
  const elements = [
    icon && <Icon name={icon} />,
    <button className={styles.button}>{title}</button>
  ]

  return (
    <div className={styles.wrapper} onClick={onClick}>
      {rightIcon ? elements.reverse() : elements}
    </div>
  )
};

export { Button };
