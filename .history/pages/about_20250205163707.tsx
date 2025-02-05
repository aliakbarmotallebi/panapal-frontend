import { Layout } from "components/layout";
import { DrupalNode } from "next-drupal";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Layout>
      <div className="page page-front relative">
        <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-600 to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
        </div>
        <section className="py-8 antialiased md:py-16">
          <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
            <div className="content-center justify-self-start md:col-span-7 md:text-start">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-6xl">
                درباره پاناپال,
                <div>رها تجارت فرا اثر مرکب</div>
              </h1>
              <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">
                پاناپال؛ پرداختن به روش های نوین
              </p>
            </div>
            <div className="hidden md:col-span-5 md:mt-0 md:flex overflow-hidden">
              <Image
                src="/images/girl-shopping-list.svg"
                className="w-full h-full"
                alt="shopping"
                width="100"
                height="100"
              />
            </div>
          </div>
        </section>
        <section className="relative pt-12 pb-5">
          <div className="mb-10 mx-auto max-w-7xl text-lg text-justify space-y-5 space-y-reverse">
            <h3 className="text-3xl font-bold mb-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت لورم ایپسوم
              متن ساختگی با
            </h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای
            </p>
            <div className="bg-zinc-300 h-px w-full"></div>
            <h3 className="text-3xl font-bold">لورم ایپسوم متن ساختگی با</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با
            </p>
          </div>
        </section>

        <div className="relative mx-auto my-10 flex max-w-md flex-col px-10 lg:max-w-7xl lg:flex-row">
          <div className="bg-slate-100 absolute left-0 h-full w-full lg:w-5/6 rounded-md border border-blue-200"></div>
          <div className="relative h-72 lg:w-72">
            <div className="bg-slate-50 shadow-slate-200 absolute h-56 w-56 translate-x-6 translate-y-6 rounded-2xl shadow-lg backdrop-blur-lg lg:h-60 lg:w-60"></div>
            <div className="shadow-slate-200 absolute flex h-56 w-56 translate-x-3 translate-y-3 flex-col items-center justify-center rounded-2xl bg-white shadow backdrop-blur-lg lg:h-60 lg:w-60">
              <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-dashed">
                <div className="text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434ZM13 10H16L11 17V12H8L13 5V10Z"></path>
                  </svg>
                </div>
                <span className="text-center text-base uppercase leading-4 text-blue-500 font-medium pt-2">
                  اعتماد مشتریان ما
                </span>
              </div>
            </div>
          </div>
          <div className="relative py-10 ">
            <h2 className="text-slate-900 text-3xl font-bold lg:text-5xl">
              از ابتدا آماده برای فردا
            </h2>
            <p className="text-slate-700 mt-4 max-w-lg">
              صورت رسمی ۳۰ اردیبهشت ۱۳۹۸ به عنوان یک شرکت ثبت شد و کار خود را با
              ارائه محصول «تسویه حساب به حساب» برای الوپیک شروع کرد. رشد سریع
              استارت‌آپ‌ها و نیاز به ارائه راهکارهایی همگام با توسعه اینترنت و
              کسب‌وکارها بر بستر آن، نیاز داشت تا تفکر آینده‌نگر در وندار به
              عنوان ارزشی اصلی تعریف شود. در ادامه راه وندار محصولاتی مثل «فرم
              پرداخت»، «تسهیم» و «وب‌سرویس‌ها» با توجه به نیاز مشتریان و هدف حل
              مشکلات سنتی پرداخت، خلق شدند.
            </p>
          </div>
        </div>
        <div className="main-content flex flex-col justify-center items-center w-full">
          <div className="lg:px-8 mx-auto max-w-7xl ">
            <ul className="flex flex-wrap items-center justify-between">
              <li className="dir-ltr flex w-1/2 flex-col items-center justify-center gap-4 p-3 lg:w-auto lg:p-6">
                <span className="text-4xl font-bold text-main-600 sm:text-7xl">
                  +246
                </span>
                <span className="text-2xl font-semibold text-slate-600 sm:text-3xl">
                  پذیرنده فعال
                </span>
              </li>
              <li className="dir-ltr flex w-1/2 flex-col items-center justify-center gap-4 p-3 lg:w-auto lg:p-6">
                <span className="text-4xl font-bold text-main-600 sm:text-7xl">
                  +16000
                </span>
                <span className="text-2xl font-semibold text-slate-600 sm:text-3xl">
                  تراکنش در روز
                </span>
              </li>
              <li className="dir-ltr flex w-1/2 flex-col items-center justify-center gap-4 p-3 lg:w-auto lg:p-6">
                <span className="text-4xl font-bold text-main-600 sm:text-7xl">
                  5
                </span>
                <span className="text-2xl font-semibold text-slate-600 sm:text-3xl">
                  سالهای فعالیت
                </span>
              </li>
              <li className="dir-ltr flex w-1/2 flex-col items-center justify-center gap-4 p-3 lg:w-auto lg:p-6">
                <span className="text-4xl font-bold text-main-600 sm:text-7xl">
                  10
                </span>
                <span className="text-2xl font-semibold text-slate-600 sm:text-3xl">
                  همکاران
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-8 py-20">
          <div>
            <div className="mx-auto max-w-7xl">
              <h3 className="sm:text-xl xl:text-4xl font-bold text-zinc-800">
                چشم‌انداز و ارزش‌های ما در پاناپال
              </h3>
              <div className="mt-16 grid divide-x divide-y divide-x-reverse divide-y-reverse divide-gray-100 overflow-hidden  rounded-3xl border text-blue-600 border-gary-100 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4 xl:divide-y-0">
                <div className="group relative bg-white transition hover:z-[1] hover:shadow-xl  hover:shadow-gray-600/10  hover:bg-blue-50 ">
                  <div className="relative space-y-8 py-12 p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-600 w-20 h-20"
                      viewbox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M234.667 42.667c41.237 0 74.667 33.429 74.667 74.666c0 39.863-31.238 72.43-70.57 74.556l-4.097.111C193.43 192 160 158.571 160 117.333c0-39.862 31.238-72.43 70.57-74.556zm-149.334 384h187.791A127.2 127.2 0 0 1 257.77 384H128v-34.133l.111-4.142c2.057-38.365 32.515-68.392 69.222-68.392H272l3.908.114c3.809.223 7.54.769 11.168 1.612a128.5 128.5 0 0 1 38.566-30.345c-15.93-8.956-34.208-14.047-53.642-14.047h-74.667l-4.616.096c-59.715 2.49-107.384 53.071-107.384 115.104zm117.334-309.334c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32m118.636 331.629L384 410.667l62.697 38.295l-17.046-71.463l55.795-47.794l-73.232-5.871L384 256l-28.214 67.834l-73.232 5.871l55.795 47.794z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div className="space-y-2">
                      <h5 className="text-2xl font-semibold text-zinc-700 transition group-hover:text-blue-700 ">
                        مشتری مداری
                      </h5>
                      <p className="text-zinc-500">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10  hover:bg-blue-50">
                  <div className="relative space-y-8 py-12 p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-600 w-20 h-20"
                      viewbox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M8 13.5c1.63 0 3.094-.709 4.101-1.835A2.5 2.5 0 0 1 10.25 9.25V9a.75.75 0 0 0-.75-.75a2.25 2.25 0 0 1 0-4.5a.75.75 0 0 0 .75-.75v-.02a5.5 5.5 0 0 0-7.471 3.287A2.25 2.25 0 0 1 4.75 8.5c0 .414.336.75.75.75a2.25 2.25 0 0 1 1.265 4.11q.597.139 1.235.14m-3.491-1.25H5.5a.75.75 0 0 0 0-1.5A2.25 2.25 0 0 1 3.25 8.5a.75.75 0 0 0-.744-.75a5.49 5.49 0 0 0 2.003 4.5m8.241-2h.27A5.5 5.5 0 0 0 13.5 8c0-1.665-.74-3.158-1.91-4.166A2.25 2.25 0 0 1 9.5 5.25a.75.75 0 1 0 0 1.5A2.25 2.25 0 0 1 11.75 9v.25a1 1 0 0 0 1 1M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div className="space-y-2">
                      <h5 className="text-2xl font-semibold text-zinc-700 transition group-hover:text-blue-700">
                        نوآوری
                      </h5>
                      <p className="text-zinc-500">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10  hover:bg-blue-50">
                  <div className="relative space-y-8 py-12 p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-600 w-20 h-20"
                      width="24"
                      height="24"
                      viewbox="0 0 14 14"
                    >
                      <g
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      >
                        <path d="M7 2.75a.75.75 0 0 1 .75.75v3.575l2.136 1.282a.75.75 0 1 1-.772 1.286l-2.5-1.5A.75.75 0 0 1 6.25 7.5v-4A.75.75 0 0 1 7 2.75" />
                        <path d="M1.5 7a5.5 5.5 0 0 1 9.82-3.405l-.966.965a.5.5 0 0 0 .353.854H13.5a.5.5 0 0 0 .5-.5V2.12a.5.5 0 0 0-.854-.354l-.76.761a7 7 0 1 0 1.427 6.086a.75.75 0 0 0-1.46-.344A5.5 5.5 0 0 1 1.5 7" />
                      </g>
                    </svg>
                    <div className="space-y-2">
                      <h5 className="text-2xl font-semibold text-zinc-700 transition group-hover:text-blue-700">
                        سرعت
                      </h5>
                      <p className="text-zinc-500">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10  hover:bg-blue-50">
                  <div className="relative space-y-8 py-12 p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-600 w-20 h-20"
                      viewbox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m2.8-10V9.5C14.8 8.1 13.4 7 12 7S9.2 8.1 9.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z"
                      />
                    </svg>
                    <div className="space-y-2">
                      <h5 className="text-2xl font-semibold text-zinc-700 transition group-hover:text-blue-700">
                        امنیت
                      </h5>
                      <p className="text-zinc-500">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
