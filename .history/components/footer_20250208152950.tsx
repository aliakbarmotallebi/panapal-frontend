
import Link from "next/link"
import { DrupalMenuLinkContent } from "next-drupal"

interface FooterProps {
  links: DrupalMenuLinkContent[]
}

export function Footer({ links }: FooterProps) {
  return (
    <>
    <section class="bg-blue-800 relative overflow-hidden">
	<div class="absolute top-0 start-0 z-10 opacity-30 rotate-45">
		<div class="absolute -right-20 -top-10 z-10 w-40 rounded-3xl bg-white/30 shadow-2xl h-52"></div>
		<div class="absolute -right-15 -top-5 z-20 w-40 rounded-3xl bg-white/50 shadow-2xl h-52"></div>
		<div class="absolute -right-10 -top-5 z-20 w-40 rounded-3xl bg-white/50 shadow-2xl h-52"></div>
		<div class="absolute -right-5 -top-5 z-20 w-40 rounded-3xl bg-white/50 shadow-2xl h-52"></div>
		<div class="relative z-30 w-40 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl h-52"></div>
	</div>
	<div class="absolute end-0 bottom-0 z-10 opacity-30 rotate-45 -left-12">
		<div class="absolute -right-20 -top-10 z-10 w-52 rounded-3xl bg-white/30 shadow-2xl h-80"></div>
		<div class="absolute -right-15 -top-5 z-20 w-52 rounded-3xl bg-white/50 shadow-2xl h-80"></div>
		<div class="absolute -right-10 -top-5 z-20 w-40 rounded-3xl bg-white/50 shadow-2xl h-52"></div>
		<div class="absolute -right-5 -top-5 z-20 w-40 rounded-3xl bg-white/50 shadow-2xl h-52"></div>
		<div class="relative z-30 w-52 rounded-3xl border border-gray-200 bg-white shadow-2xl h-80"></div>
	</div>
	<div class="mx-auto max-w-7xl text-gray-700 flex flex-col items-center">
		<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
			<a href="#" class="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full">
				<span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">

					میخوام ثبت نام کنم
				</span>
				<span class="text-sm font-medium">
					همین حالا شروع کنید.
				</span>
				<svg class="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 6 10">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
				</svg>
			</a>
			<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">

				استفاده از سرویس‌های پاناپال

			</h1>
			<p class="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
				با ایجاد حساب کاربری از خدمات جیبیت برای رشد و ارتقا فرآیند و عملیات مالی کسب و کارتان استفاده کنید.
			</p>
		</div>
	</div>
</section>

<footer class="bg-white">
	<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
				<a href="https://flowbite.com/" class="flex flex-col items-start">
					<p class="mb-6 text-xl font-bold text-neutral-900 md:text-2xl">
						درباره پاناپال
					</p>
					<p class="text-justify text-base leading-9 text-stone-700">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													            استفاده از طراحان گرافیک است، چاپگرها و
					</p>
				</a>
				<div class="mr-2">
					<div>
						<ul class="inline-flex items-center gap-3 flex-row">
							<li>
								<div class="w-20 h-20 border hover:bg-blue-50 rounded-2xl bg-white shadow">
									<a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=283830&Code=48SB7qor0DjY6ksaf9W0">
										<img id="48SB7qor0DjY6ksaf9W0" referrerpolicy="origin" style="cursor: pointer; object-fit: cover" class="h-full p-2" src="/{{ directory ~ '/assets/images/namad/e-namad.png' }}"/>
									</a>
								</div>
							</li>
							<li>
								<div class="w-20 h-20 border hover:bg-blue-50 rounded-2xl bg-white shadow">
									<img alt="logo-samandehi" referrerpolicy="origin" style="cursor: pointer" src="/{{ directory ~ '/assets/images/namad/samandehi.png' }}" class="h-full p-2"/>
								</div>
							</li>
							<li>
								<div class="w-20 h-20 border hover:bg-blue-50 rounded-2xl bg-white shadow">
									<a href="https://logo.saramad.ir/verify.aspx?CodeShamad=1-2-767877-63-0-1">
										<img class="h-full p-2 w-full" src="/{{ directory ~ '/assets/images/namad/rasaneh2.svg' }}"/></a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
				{% if page.footer_top %}
					{{ page.footer_top }}
				{% endif %}
			</div>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
		<div class="sm:flex sm:items-center sm:justify-between">
			<div>
				<a title="پاناپال" href="#" rel="follow" class="cursor-pointer">
					پاناپال
				</a>
				- پلتفرم برتر پرداخت یار  © {new Date().getFullYear()} . تمامی حقوق متعلق به شرکت
				<span class="text-blue-500">
					پاناپال
				</span>
				است.
			</div>
			<section id="social-media" class="hidden flex-col gap-2 lg:flex">
				<div class="flex flex-row gap-2">
					<a href="#" class="hover:text-blue-600/90  hover:border-blue-600/90 delay-150 hover:-translate-y-1 relative flex items-center justify-center rounded-2xl border border-neutral-200 p-3 text-neutral-900 transition-all">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewbox="0 0 16 16">
							<g clip-path="url(#a)">
								<path d="M8 1.441c2.136 0 2.39.008 3.233.047.872.04 1.77.239 2.405.874.641.641.834 1.53.874 2.405.039.844.047 1.097.047 3.233s-.008 2.39-.047 3.233c-.04.867-.243 1.774-.874 2.405-.641.641-1.53.834-2.405.874-.844.039-1.097.047-3.233.047s-2.39-.008-3.233-.047c-.86-.04-1.779-.247-2.405-.874-.638-.638-.834-1.536-.874-2.405-.039-.844-.047-1.097-.047-3.233s.008-2.39.047-3.233c.04-.864.245-1.776.874-2.405.64-.64 1.533-.834 2.405-.874.844-.039 1.097-.047 3.233-.047ZM8 0C5.827 0 5.555.01 4.701.048c-1.236.057-2.464.4-3.358 1.295C.445 2.24.105 3.465.048 4.7.009 5.555 0 5.827 0 8s.01 2.445.048 3.299c.057 1.235.402 2.466 1.295 3.358.896.897 2.124 1.238 3.358 1.295C5.555 15.991 5.827 16 8 16s2.445-.01 3.299-.048c1.236-.057 2.465-.401 3.358-1.295.898-.898 1.238-2.122 1.295-3.358.039-.854.048-1.126.048-3.299s-.01-2.445-.048-3.299c-.057-1.236-.401-2.465-1.295-3.358C13.762.447 12.531.104 11.3.048 10.445.009 10.173 0 8 0Z"/>
								<path d="M8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216Zm0 6.775a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334Zm4.27-5.977a.96.96 0 1 0 0-1.92.96.96 0 0 0 0 1.92Z"/>
							</g>
							<defs>
								<clipPath id="a">
									<path fill="#fff" d="M0 0h16v16H0z"/>
								</clipPath>
							</defs>
						</svg>
					</a>
					<a href="#" class="hover:text-blue-600/90  hover:border-blue-600/90 delay-150 hover:-translate-y-1 relative flex items-center justify-center rounded-2xl border border-neutral-200 p-3 text-neutral-900 transition-all">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 24 24" fill="currentColor">
							<path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
						</svg>
					</a>
					<a href="#" class="hover:text-blue-600/90  hover:border-blue-600/90 delay-150 hover:-translate-y-1 relative flex items-center justify-center rounded-2xl border border-neutral-200 p-3 text-neutral-900 transition-all">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewbox="0 0 16 16">
							<g clip-path="url(#a)">
								<path fill-rule="evenodd" d="M13.642 2.325A7.878 7.878 0 0 0 8.033 0C3.663 0 .107 3.556.105 7.928a7.912 7.912 0 0 0 1.058 3.964L.038 16l4.203-1.103a7.92 7.92 0 0 0 3.788.966h.004c4.369 0 7.926-3.557 7.928-7.929a7.877 7.877 0 0 0-2.319-5.609ZM8.033 14.523h-.002a6.573 6.573 0 0 1-3.354-.918l-.241-.143-2.494.654.666-2.432-.157-.25a6.57 6.57 0 0 1-1.007-3.506 6.6 6.6 0 0 1 6.593-6.59 6.54 6.54 0 0 1 4.658 1.933 6.551 6.551 0 0 1 1.928 4.662c-.002 3.634-2.958 6.59-6.59 6.59Zm3.615-4.935c-.198-.1-1.172-.579-1.354-.645-.181-.066-.313-.099-.446.099s-.511.645-.627.777c-.116.132-.232.149-.43.05-.198-.1-.836-.308-1.593-.984a5.964 5.964 0 0 1-1.102-1.372c-.115-.199-.012-.306.087-.404.089-.089.198-.232.297-.348.1-.114.133-.197.2-.33.065-.132.033-.248-.017-.347-.05-.099-.446-1.074-.611-1.47-.16-.387-.324-.335-.446-.34a7.631 7.631 0 0 0-.38-.007.726.726 0 0 0-.528.248c-.181.198-.693.678-.693 1.652 0 .976.71 1.918.808 2.05.099.132 1.397 2.133 3.384 2.991.473.204.842.326 1.13.417.474.151.906.13 1.248.079.38-.057 1.172-.48 1.337-.942.165-.463.165-.86.115-.942-.049-.083-.181-.133-.379-.232Z" clip-rule="evenodd"/>
							</g>
							<defs>
								<clipPath id="a">
									<path fill="#fff" d="M0 0h16v16H0z"/>
								</clipPath>
							</defs>
						</svg>
					</a>
					<a href="#" class="hover:text-blue-600/90  hover:border-blue-600/90 delay-150 hover:-translate-y-1 relative flex items-center justify-center rounded-2xl border border-neutral-200 p-3 text-neutral-900 transition-all">
						<svg width="18" height="18" viewbox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M5.788 14.02a.746.746 0 0 0 .132.031 456.056 456.056 0 0 1 .844 2.002c.503 1.202 1.01 2.44 1.121 2.796.139.438.285.736.445.94.083.104.178.196.29.266a.88.88 0 0 0 .186.088c.32.12.612.07.795.009a1.313 1.313 0 0 0 .304-.15L9.91 20l2.826-1.762 3.265 2.502c.048.037.1.068.156.093.392.17.772.23 1.13.182.356-.05.639-.199.85-.368a1.992 1.992 0 0 0 .564-.728l.009-.022.003-.008.002-.004v-.002l.001-.001a.756.756 0 0 0 .04-.133l2.98-15.025a.752.752 0 0 0 .014-.146c0-.44-.166-.859-.555-1.112-.334-.217-.705-.227-.94-.209-.252.02-.486.082-.643.132a3.458 3.458 0 0 0-.26.094l-.011.005-16.714 6.556-.002.001a2.296 2.296 0 0 0-.167.069 2.522 2.522 0 0 0-.38.212c-.227.155-.75.581-.661 1.285.07.56.454.905.689 1.071.128.091.25.156.34.199.04.02.126.054.163.07l.01.003 3.169 1.067zm14.138-9.152h-.002a.785.785 0 0 1-.026.011L3.164 11.444a.818.818 0 0 1-.026.01l-.01.003a1.126 1.126 0 0 0-.09.04.851.851 0 0 0 .086.043l3.142 1.058a.75.75 0 0 1 .16.076l10.377-6.075.01-.005a1.59 1.59 0 0 1 .124-.068c.072-.037.187-.091.317-.131.09-.028.357-.107.645-.014a.854.854 0 0 1 .588.689.84.84 0 0 1 .003.424c-.07.275-.262.489-.438.653-.15.14-2.095 2.016-4.014 3.868l-2.613 2.52-.465.45 5.872 4.502a.536.536 0 0 0 .251.04.229.229 0 0 0 .117-.052.495.495 0 0 0 .103-.12l.002-.001 2.89-14.573a1.858 1.858 0 0 0-.267.086h-.002zm-8.461 12.394-1.172-.898-.284 1.805 1.456-.907zm-2.247-2.68 1.165-1.125 2.613-2.522.973-.938-6.52 3.817.035.082a339.2 339.2 0 0 1 1.22 2.92l.283-1.8a.747.747 0 0 1 .231-.435z"/>
						</svg>
					</a>
				</div>
			</section>
		</div>
	</div>
</footer>
</>

  )
}