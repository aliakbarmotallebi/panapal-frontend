import * as React from "react";
import { DrupalMenuLinkContent } from "next-drupal";
import { MenuMain } from "components/menu-main";

interface HeaderProps {
  menu: {
    main: DrupalMenuLinkContent[];
  };
}

export default function Header({ menu }: HeaderProps) {
  return (
    <div
      className={`transition-all overflow-hidden md:max-h-screen max-h-screen`}
    >
      <MenuMain items={menu.main} />
    </div>
  );
}
