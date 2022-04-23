import cn from "classnames";

import styles from './Divider.module.scss';

type Props = {
  className?: string;
};

const Divider = ({ className}: Props): JSX.Element => {
  return (
    <div className={cn(styles.wrapper, className)}>|</div>
  )
};

export { Divider };
