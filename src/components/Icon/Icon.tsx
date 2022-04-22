import { ICONS } from '../../assets/icons';

export type IconName = 'apps' | 'angleDown';

type Props = {
  name: IconName;
};

const Icon = ({ name }: Props): JSX.Element => {
  return (
    <div>
      <img src={ICONS[name]} alt="" />
    </div>
  )
};

export { Icon };
