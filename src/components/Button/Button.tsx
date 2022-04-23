import { Icon, IconName } from "../Icon";
import styles from './Button.module.scss';
import cn from 'classnames';

type Props = {
  title?: string;
  onClick?: () => void;
  icon?: IconName | undefined;
  rightIcon?: boolean;
  className?: string;
  iconClassName?: string;
};

const Button = ({ title, onClick, icon, rightIcon = false, className, iconClassName }: Props): JSX.Element => {
  const elements = [
    icon && <Icon name={icon} className={iconClassName} />,
    title && <span className={cn(styles.title, {
      [styles['title--right-icon']]: rightIcon,
    })}>{title}</span>,
  ]

  return (
    <button onClick={onClick} className={cn(styles.button, className)}>
      {rightIcon ? elements.reverse() : elements}
    </button>
  )
};

export { Button };
