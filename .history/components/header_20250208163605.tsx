import * as React from "react";
import { DrupalMenuLinkContent } from "next-drupal";
import { MenuMain } from "components/menu-main";

interface HeaderProps {
  menus: {
    main: DrupalMenuLinkContent[];
  };
}

export default function Header({ menus }: HeaderProps) {
  return (
    <div
      className={`transition-all overflow-hidden md:max-h-screen max-h-screen`}
    >
      {/* <MenuMain items={menus.main} /> */}
    </div>
  );
}
