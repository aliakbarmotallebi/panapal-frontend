import * as React from "react";
import { DrupalMenuLinkContent } from "next-drupal";
import { MenuMain } from "components/menu-main";

interface HeaderProps {
  menus: {
    main: DrupalMenuLinkContent[];
  };
}

export default function Header({ menus }: HeaderProps) {
  const [showMenu, setShowMenu] = React.useState<Boolean>(false);
  return (
    <div
      className={`transition-all overflow-hidden md:max-h-screen ${
        showMenu ? "max-h-screen" : "max-h-0"
      }`}
    >
      <MenuMain items={menus.main} />
    </div>
  );
}
