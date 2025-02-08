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
      <nav {...props} class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              class="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </a>
            <a
              href="#"
              class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {items.map((item) => {
                const isActive =
                  router.asPath === item.url ||
                  `/${router.asPath === "/" ? "" : router.asPath}` ===
                    item.url ||
                  (item.url !== "/"
                    ? router.asPath.indexOf(item.url) === 0
                    : false);
                return (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      passHref
                      className={clsx(
                        "text-gray-900 dark:text-white hover:underline",
                        {
                          "border-b-primary": isActive,
                        }
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
