import { Link } from "react-router-dom";

import { Button } from '../Button';
import { Divider } from "../Divider";
import { Icon } from "../Icon";
import { DropdownMenu } from "../DropdownMenu";

import styles from "./Layout.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles["header__first-col"]}>
          <Link className={styles["header__first-col__title"]} to="/">
            ATS
          </Link>

          <Divider />

          <DropdownMenu
            title="menu"
            icon="apps"
            links={[{ title: "Candidates", to: "/candidates" }]}
          />
        </div>

        <div className={styles["header__second-col"]}>
          {/* <Icon name="bell" /> */}
          <DropdownMenu
            icon="bell"
            links={[{ title: "Send Feedback", to: "/" }]}
          />

          <Divider />

          <Icon name="interrogation" />

          <Divider />

          <Button title="s@salva.io" icon="angleDown" rightIcon />
        </div>
      </header>

      <div className={styles.container}>{children}</div>
    </div>
  );
};

export { Layout };
