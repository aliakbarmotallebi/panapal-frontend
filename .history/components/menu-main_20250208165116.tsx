import clsx from "clsx";
import { DrupalMenuLinkContent } from "next-drupal";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuMainProps {
  items: DrupalMenuLinkContent[];
}

export function MenuMain({ items, ...props }: MenuMainProps) {
  const router = useRouter();

  return (
    <>
      <nav {...props}>
        <div class="flex h-14 items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-blue-300/30 px-3 backdrop-blur-sm">
          <div>
            <a class="block" href="" rel="home">
              <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M28 14a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0"
                    fill="#D1D5DB"
                  ></path>
                  <path
                    d="M23.865 23.9a13.932 13.932 0 01-6.377 3.66c-1.115.286-2.284.44-3.488.44a13.893 13.893 0 01-10.512-4.797A13.968 13.968 0 01.048 14c0-3.523 1.298-6.742 3.44-9.203A13.893 13.893 0 0114 0c1.204 0 2.373.154 3.488.44a13.932 13.932 0 016.377 3.66l-4.933 4.95A6.942 6.942 0 0014 7c-3.852 0-6.976 3.134-6.976 7l.002.18C7.122 17.964 10.208 21 14 21c1.926 0 3.67-.784 4.932-2.05l4.933 4.95z"
                    fill="#7E5FFB"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <div class="inline-flex items-center">
            <div class="hidden sm:flex sm:grow" id="navbar-default">
              <ul class="font-light flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                <li class="mr-6"></li>
              </ul>
            </div>
          </div>
          <div class="mr-6">
            <a
              href=""
              class="inline-flex items-center rounded-lg bg-blue-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-300"
              href="https://cruip.com/unlimited-access/"
              style="outline: none"
            >
              <span>ورود به حساب کاربری</span>
              <span class="mr-2 -rotate-180 text-white/60 transition-transform group-hover:translate-x-0.5">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                >
                  <path d="M5.977 10.368 4.953 9.354 8.02 6.286H.568V4.805H8.02L4.953 1.742 5.977.723 10.8 5.546z"></path>
                </svg>
              </span>
            </a>
          </div>
          <div class="ml-2 flex sm:hidden">
            <button
              id="header-nav-toggle"
              class="group inline-flex h-8 w-8 items-center justify-center text-center text-neutral-800 transition"
              aria-controls="header-nav"
              aria-expanded="false"
              style="outline: none"
            >
              <span class="sr-only">Menu</span>
              <svg
                class="pointer-events-none fill-current"
                width="16"
                height="16"
                viewbox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  class="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-expanded=true]]:translate-x-0 group-[[aria-expanded=true]]:translate-y-0 group-[[aria-expanded=true]]:rotate-[315deg]"
                  y="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-expanded=true]]:rotate-45"
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  class="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-expanded=true]]:translate-y-0 group-[[aria-expanded=true]]:rotate-[135deg]"
                  y="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
              </svg>
            </button>
            <nav
              id="header-nav"
              class="[&amp;.menu-is-open]:grid-rows-[1fr] [&amp;.menu-is-open]:visible [&amp;.menu-is-open]:bg-white [&amp;.menu-is-open]:shadow-lg [&amp;>div]:opacity-0 [&amp;.menu-is-open>div]:opacity-100 absolute inset-x-0 top-full z-50 mt-1 grid grid-rows-[0fr] rounded-xl shadow-black/[.04] transition-all duration-300"
            >
              <div class="overflow-hidden transition-opacity duration-300">
                <ul class="divide-y divide-neutral-100 px-3 py-1.5 text-sm">
                  <li>
                    <a
                      href="https://cruip.com/docs/"
                      class="flex px-2 py-2 text-neutral-800 hover:underline"
                      style="outline: none"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      class="flex px-2 py-2 text-neutral-800 hover:underline"
                      href="https://cruip.com/login/"
                      style="outline: none"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}
