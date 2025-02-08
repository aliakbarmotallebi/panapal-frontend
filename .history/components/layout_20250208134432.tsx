import Link from "next/link";

import { PreviewAlert } from "components/preview-alert";

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <main className="overflow-hidden">
        <header id="site-header" className="fixed top-2 z-50 w-full md:top-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6"></div>
        </header>
        {children}
      </main>
    </>
  );
}
