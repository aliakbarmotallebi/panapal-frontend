import { DrupalMenuLinkContent } from "next-drupal";
import { Footer } from "./footer";
import Header from "./header";

export interface LayoutProps {
  menus: {
    main: DrupalMenuLinkContent[];
    footer: DrupalMenuLinkContent[];
  };
  children?: React.ReactNode;
}

export function Layout({ menus, children }: LayoutProps) {
  return (
    <>
      <Header items={menus} />
      <main className="overflow-hidden">{children}</main>
      <Footer links={menus.footer} />
    </>
  );
}
