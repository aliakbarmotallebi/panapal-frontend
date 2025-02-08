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
      <header id="site-header" className="fixed top-2 z-50 w-full md:top-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6"></div>
      </header>
      <main className="overflow-hidden">{children}</main>
      <Footer links={menus.footer} />
    </>
  );
}
