import { Link } from "react-router-dom";
import cn from 'classnames';

import { Divider } from "../Divider";
import { DropdownMenu } from "../DropdownMenu";

import styles from "./Navbar.module.scss";

type Props = {};

const Navbar = ({}: Props): JSX.Element => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles["first-col"]}>
        <Link className={cn(styles["first-col__title"], styles['hide-on-mobile'])} to="/">
          ATS
        </Link>

        <Divider className={styles['hide-on-mobile']} />

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

      <div className={styles["second-col"]}>
        <DropdownMenu
          icon="bell"
          links={[{ title: "Send Feedback", to: "/" }]}
          className={styles['hide-on-mobile']}
        />

        <Divider className={styles['hide-on-mobile']} />

        <DropdownMenu
          icon="interrogation"
          links={[{ title: "Help", to: "/" }]}
          className={styles['hide-on-mobile']}
        />

        <Divider className={styles['hide-on-mobile']} />

        <DropdownMenu
          title="s@salva.io"
          icon="angleDown"
          rightIcon
          links={[
            { title: "Settings", to: "/" },
            { title: "Account", to: "/" },
            { title: "LogOut", to: "/" },
          ]}
        />
      </div>
    </nav>
  );
};

export { Navbar };
