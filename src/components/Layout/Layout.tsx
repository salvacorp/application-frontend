// import { Link } from "react-router-dom";

import { Button } from '../Button';

import styles from "./Layout.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles['header__first-col']}>
          <p className={styles['header__first-col__title']}>ATS</p>
          
          <span className={styles.divider}>|</span>
          
          <Button title="menu" icon="apps" />
        </div>

        <div><Button title="user" icon="angleDown" /></div>

        {/* <Link className={styles.header__link} to="/">Home</Link>
        <Link className={styles.header__link} to="/candidates">Candidates</Link> */}
      </header>

      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export { Layout };
