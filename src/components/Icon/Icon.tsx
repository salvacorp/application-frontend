import { ICONS } from '../../assets/icons';

type Props = {
  name: 'apps'
};

const Icon = ({ name }: Props): JSX.Element => {
  return (
    <div>
      <img src={ICONS[name]} alt="" />
    </div>
  )
};

export { Icon };
