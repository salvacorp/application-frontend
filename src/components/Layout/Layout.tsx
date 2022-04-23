import { Link } from "react-router-dom";

import { Divider } from "../Divider";
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
            links={[
              { title: "Candidates", to: "/candidates" },
              { title: "Requisitions", to: "/" },
              { title: "Interviews", to: "/" },
            ]}
          />
        </div>

        <div className={styles["header__second-col"]}>
          <DropdownMenu
            icon="bell"
            links={[{ title: "Send Feedback", to: "/" }]}
          />

          <Divider />

          <DropdownMenu
            icon="interrogation"
            links={[{ title: "Help", to: "/" }]}
          />

          <Divider />

          <DropdownMenu
            title="s@salva.io" icon="angleDown" rightIcon
            links={[
              { title: "Settings", to: "/" },
              { title: "Account", to: "/" },
              { title: "LogOut", to: "/" },
            ]}
          />
        </div>
      </header>

      <div className={styles.container}>{children}</div>
    </div>
  );
};

export { Layout };
