import styles from './Divider.module.scss';

type Props = {};

const Divider = ({}: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>|</div>
  )
};

export { Divider };
