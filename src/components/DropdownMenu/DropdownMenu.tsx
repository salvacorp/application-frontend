import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { IconName } from "../Icon";

import styles from './DropdownMenu.module.scss';

type Props = {
  title?: string;
  icon?: IconName;
  links: { title: string; to: string }[];
};

const DropdownMenu = ({ title, icon, links }: Props): JSX.Element => {
  const [showApps, setShowApps] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleApps = (): void => setShowApps(!showApps);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setShowApps(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Button title={title} icon={icon} onClick={toggleApps} />
      {
        showApps && (
          <div ref={dropdownRef} className={styles['apps-box']}>
            {
              links.map(({title, to}, index) => (
                <Link key={index} className={styles.link} to={to}>{title}</Link>
              ))
            }
          </div>
        )
      }
    </div>
  )
};

export { DropdownMenu };
