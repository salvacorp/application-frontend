import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

import { Divider } from "../Divider";
import { DropdownMenu } from "../DropdownMenu";

import styles from "./Navbar.module.scss";

type Props = {};

const Navbar = ({}: Props): JSX.Element => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles["first-col"]}>
        {!isMobile && (
          <>
            <Link className={styles["first-col__title"]} to="/">
              ATS
            </Link>

            <Divider />
          </>
        )}

        <DropdownMenu
          title={isMobile ? undefined : "menu"}
          icon="apps"
          links={[
            { title: "Candidates", to: "/candidates" },
            { title: "Requisitions", to: "/" },
            { title: "Interviews", to: "/" },
          ]}
        />

        <Divider />
      </div>

      <div className={styles["second-col"]}>
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
