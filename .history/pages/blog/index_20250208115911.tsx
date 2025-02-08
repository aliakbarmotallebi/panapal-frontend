import { GetStaticProps } from "next";
import Link from "next/link";
import { getArticles } from "lib/api";
import Image from "next/image";

export default function Blog() {
  return (
    <>
      <header className="relative">
        <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-600 to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
        </div>
        <section className="max-w-7xl mx-auto relative pb-32 pt-16">
          <div className="pt-20 lg:pt-25 pb-15">
            <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
              <div className="mb-12.5 text-center">
                <h2 className="text-dark mb-3.5 text-2xl font-bold sm:text-6xl">
                  آموزش و مقالات
                </h2>
                <p className="text-lg">
                  در وبلاگ پاناپال شما به آرشیواخبار و آموزش های بروز و معتبر
                  دسترسی خواهید داشت
                </p>
              </div>
            </div>
          </div>
          <div className="w-full shadow p-7 pb-7 rounded-lg bg-white absolute -bottom-1/2">
            <div className="relative">
              <div className="absolute flex items-center mr-2 h-full">
                <svg
                  className="w-4 h-4 fill-current text-primary-gray-dark"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
                </svg>
              </div>

              <input
                type="text"
                placeholder="عبارت ویا کلمه مدنظر خودرا تایپ کنید..."
                className="px-8 py-3 w-full rounded-md border border-gray-200 focus:border-gray-500 focus:bg-white focus:ring-0"
              />
            </div>

            <div className="flex items-center justify-between my-4">
              <p className="font-medium">دسته بندی</p>

              <button className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium rounded-md">
                جستجو کن
              </button>
            </div>

            <div className="pt-4 w-full">
              <ul className="flex flex-wrap text-base font-medium text-center text-gray-500 gap-1 gap-y-8">
                <li>
                  <a
                    href="#"
                    className="py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 bg-blue-600"
                    aria-current="page"
                  >
                    دسته بندی 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    دسته بندی 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    دسته بندی 3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    دسته بندی 4
                  </a>
                </li>
                <li>
                  <a className="py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                    دسته بندی 5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 bg-blue-600"
                    aria-current="page"
                  >
                    دسته بندی 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    دسته بندی 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    دسته بندی 3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    دسته بندی 4
                  </a>
                </li>
                <li>
                  <a className="py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                    دسته بندی 5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    دسته بندی 4
                  </a>
                </li>
                <li>
                  <a className="py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                    دسته بندی 5
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div>
          <div className="absolute bottom-0 left-0 rounded-b-[50px] w-full h-full bg-gray"></div>
          <div className="hidden lg:block absolute bottom-0 left-0 rounded-b-[50px] w-full h-full"></div>
        </div>
      </header>
    </>
  );
}
