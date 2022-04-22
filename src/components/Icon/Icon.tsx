import { ICONS } from '../../assets/icons';
import styles from './Icon.module.scss';

export type IconName = 'apps' | 'angleDown';

type Props = {
  name: IconName;
};

const Icon = ({ name }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <img src={ICONS[name]} alt="" />
    </div>
  )
};

export { Icon };
