import cn from 'classnames';
import { ICONS } from '../../assets/icons';
import styles from './Icon.module.scss';

export type IconName = 'apps' | 'angleDown' | 'bell' | 'interrogation';

type Props = {
  name: IconName;
  className?: string;
};

const Icon = ({ name, className }: Props): JSX.Element => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <img src={ICONS[name]} alt="" />
    </div>
  )
};

export { Icon };
