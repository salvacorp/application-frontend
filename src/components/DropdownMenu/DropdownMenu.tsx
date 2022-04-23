import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { Button } from "../Button";
import { IconName } from "../Icon";

import styles from './DropdownMenu.module.scss';

type Props = {
  title?: string;
  icon?: IconName;
  links: { title: string; to: string }[];
  rightIcon?: boolean;
  className?: string;
};

const DropdownMenu = ({ title, icon, links, rightIcon, className }: Props): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleApps = (): void => setShowMenu(!showMenu);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className={cn(styles.wrapper, className)}>
      <Button
        title={title}
        icon={icon}
        onClick={toggleApps}
        rightIcon={rightIcon}
        className={cn({
          [styles["button--selected"]]: showMenu,
        })}
        iconClassName={cn({
          [styles["icon--selected"]]: showMenu,
        })}
      />
      {showMenu && (
        <div ref={dropdownRef} className={styles["menu-box"]}>
          {links.map(({ title, to }, index) => (
            <Link key={index} className={styles.link} to={to}>
              {title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export { DropdownMenu };
