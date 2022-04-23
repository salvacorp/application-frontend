import { Navbar } from "./Navbar";

import styles from "./Layout.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <header>
        <Navbar />
      </header> 

      <div className={styles.container}>{children}</div>
    </div>
  );
};

export { Layout };
