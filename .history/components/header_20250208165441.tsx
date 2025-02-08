import * as React from "react";
import { DrupalMenuLinkContent } from "next-drupal";
import { MenuMain } from "components/menu-main";

interface HeaderProps {
  items: DrupalMenuLinkContent[];
}

export default function Header({ items }: HeaderProps) {
  return (
    <header id="site-header" className="fixed top-2 z-50 w-full md:top-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <MenuMain items={items} />
      </div>
    </header>
  );
}
