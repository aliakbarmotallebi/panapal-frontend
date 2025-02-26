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
    <nav {...props}>
      <ul className="flex flex-col items-center justify-center w-full pt-8 space-y-6 md:pt-0 md:space-y-0 md:flex-row md:space-x-14">
        {items.map((item) => {
          const isActive =
            router.asPath === item.url ||
            `/${router.asPath === "/" ? "" : router.asPath}` === item.url ||
            (item.url !== "/" ? router.asPath.indexOf(item.url) === 0 : false);
          return (
            <li key={item.id}>
              <Link
                href={item.url}
                passHref
                className={clsx(
                  "regular-16 border-b-[3px] flex border-b-transparent transition-colors hover:text-primary",
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
    </nav>
  );
}
