import Link from "next/link";

import { PreviewAlert } from "components/preview-alert";

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="max-w-screen-md px-6 mx-auto">
        <header id="site-header" className="fixed top-2 z-50 w-full md:top-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6"></div>
        </header>
        <main className="container py-10 mx-auto">{children}</main>
      </div>
    </>
  );
}
