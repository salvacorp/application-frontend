import { Link } from "react-router-dom";

import { Icon } from '../Icon';

import styles from "./Layout.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Icon name="apps" />
        <Link className={styles.header__link} to="/">Home</Link>
        <Link className={styles.header__link} to="/candidates">Candidates</Link>
      </header>

      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export { Layout };
