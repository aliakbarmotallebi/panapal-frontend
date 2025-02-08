import * as React from "react";
import { DrupalMenuLinkContent } from "next-drupal";
import { MenuMain } from "components/menu-main";

interface HeaderProps {
  items: DrupalMenuLinkContent[];
}

export default function Header({ items }: HeaderProps) {
  return (
    <div
      className={`transition-all overflow-hidden md:max-h-screen max-h-screen`}
    >
      <MenuMain items={items.menus} />
    </div>
  );
}
