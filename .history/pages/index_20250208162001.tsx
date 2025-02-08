import Head from "next/head";
import { DrupalNode } from "next-drupal";

import { Layout, LayoutProps } from "components/layout";
import HeroSection from "components/HeroSection";
import Image from "next/image";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { drupal } from "lib/drupal";

interface IndexPageProps extends LayoutProps {
  // node: DrupalNode;
}

export default function IndexPage({
  // node,
  menus,
}: IndexPageProps) {
  console.log("IndexPage");
  return (
    <Layout menus={menus}>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <HeroSection />
      <section id="partners" className="flex w-full justify-center">
        <div className="mx-auto max-w-7xl sm:px-6 relative flex flex-col items-center px-8 pt-20 pb-16 text-gray-700 md:pt-24 md:pb-20">
          <div className="flex flex-wrap">
            <div className="w-full max-w-full flex-shrink-0 lg:mt-2 lg:w-1/3 lg:flex-none">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500 xl:text-base">
                مشتریان ما
              </h2>
              <h3 className="mb-3 sm:text-2xl xl:text-5xl font-extrabold text-blue-900">
                مورد اعتماد بیش از 300+ مشتری
              </h3>
              <p className="mt-4 text-gray-800 font-normal">
                ما راه‌حل‌هایی برای آسان‌تر کردن زندگی مشتریانمان ارائه می‌کنیم.
              </p>
            </div>
            <div className="w-full max-w-full py-10 lg:w-2/3 lg:flex-none lg:px-8 lg:py-0">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="w-32">
                  <Image
                    src="/images/logo/company-1.png"
                    alt=""
                    width="100"
                    height="100"
                    className="grayscale transition-all duration-300 ease-out hover:grayscale-0"
                  />
                </div>
                <div className="w-32">
                  <Image
                    src="/images/logo/company-2.png"
                    alt=""
                    width="100"
                    height="100"
                    className="grayscale transition-all duration-300 ease-out hover:grayscale-0"
                  />
                </div>
                <div className="w-32">
                  <Image
                    src="/images/logo/company-3.png"
                    alt=""
                    width="100"
                    height="100"
                    className="grayscale transition-all duration-300 ease-out hover:grayscale-0"
                  />
                </div>
                <div className="w-32">
                  <Image
                    src="/images/logo/company-4.png"
                    alt=""
                    width="100"
                    height="100"
                    className="grayscale transition-all duration-300 ease-out hover:grayscale-0"
                  />
                </div>
                <div className="w-32">
                  <Image
                    src="/images/logo/company-5.png"
                    alt=""
                    width="100"
                    height="100"
                    className="grayscale transition-all duration-300 ease-out hover:grayscale-0"
                  />
                </div>
                <div className="w-32">
                  <Image
                    src="/images/logo/company-6.png"
                    alt=""
                    width="100"
                    height="100"
                    className="grayscale transition-all duration-300 ease-out hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexPageProps>> {
  console.log("getStaticProps");
  try {
    console.log("Fetching main menu...");
    const menus = await drupal.getResourceCollection(
      "menu_link_content--menu_link_content",
      {
        params: { "filter[menu-name]": "primary-menu" },
      }
    );

    // const primaryMenu = menus.find((menu) => menu.id === "primary-menu");

    console.log("Main Menu:", menus);

    return {
      props: {
        menus: {
          main: null,
          footer: [],
        },
      },
    };
  } catch (error) {
    console.error("Error fetching menus:", error);
    return {
      props: {
        menus: {
          main: [],
          footer: [],
        },
      },
    };
  }
}
