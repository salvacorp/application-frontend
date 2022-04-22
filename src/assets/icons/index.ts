import { IconName } from '../../components';
import apps from './apps.svg';
import angleDown from './angle-down.svg';

type IconType = {
  [n in IconName]: any;
};

export const ICONS: IconType = { apps, angleDown };