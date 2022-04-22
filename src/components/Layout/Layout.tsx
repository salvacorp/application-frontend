import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from '../Button';

import styles from "./Layout.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props): JSX.Element => {
  const [showApps, setShowApps] = useState(false);

  const toggleApps = (): void => setShowApps(!showApps);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles['header__first-col']}>
          {/* <p className={styles['header__first-col__title']}>ATS</p> */}
            <Link className={styles['header__first-col__title']} to="/">ATS</Link>
          
          <span className={styles.divider}>|</span>

          <div>
            <Button title="menu" icon="apps" onClick={toggleApps} />
            {
              showApps && (
                <div className={styles['apps-box']}>
                  <Link className={styles.header__link} to="/candidates">Candidates</Link>
                </div>
              )
            }
          </div>
        </div>

        <div>
          <Button title="user name" icon="angleDown" rightIcon />
        </div>

      </header>

      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export { Layout };
