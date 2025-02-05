

const HeroSection  = () => {
    return (
        <section className="hero hero-front">
			<div
				className="relative flex h-screen flex-wrap justify-center">
				<div className="absolute inset-0">
					<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [&>div]:absolute [&>div]:left-0 [&>div]:right-0 [&>div]:top-0 [&>div]:-z-10 [&>div]:m-auto [&>div]:h-[310px] [&>div]:w-[310px] [&>div]:rounded-full [&>div]:bg-fuchsia-800 [&>div]:opacity-30 [&>div]:blur-[100px]">
						<div></div>
					</div>
				</div>

				<div className="container relative z-10 flex h-full flex-row items-center justify-around px-4 sm:flex-wrap-reverse md:mt-10 lg:mt-0 lg:items-center">
					<div className="max-w-2xl text-center">
						<h1 className="mb-8 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
							راهکار‌های پیشرفته مالی و پرداخت آنلاین
							<span className="text-blue-700">
								پاناپال
							</span>
						</h1>
						<p className="mx-auto mb-8 max-w-2xl text-xl text-slate-700">
							پلتفرم پاناپال امکانی آنلاین است تا نیاز کسب و کار‌ها در استفاده
																																																																																																																										              از خدمات انتقال پول، پرداخت و عملیات‌های مالی و بانکی را از
																																																																																																																										              پیچیدگی به سادگی به صورت یکپارچه و پایدار ارائه کند.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<button className="rounded-lg bg-blue-700 px-6 py-3 font-medium text-white hover:bg-blue-900">
								درخواست درگاه
							</button>
							<button className="rounded-lg border border-slate-200 bg-white px-6 py-3 font-medium text-slate-900 hover:bg-slate-50">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline-block ml-1" viewbox="0 0 24 24" fill="currentColor">
									<path d="M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path>
								</svg>
								تماس با پشتیبانی
							</button>
						</div>
					</div>
					<div className="hidden w-full justify-center sm:flex lg:w-2/3 lg:ps-16">
						<div className="relative m-auto mt-16 max-w-sm justify-center lg:mt-8">
							<div className="absolute -right-10 -top-10 z-10 h-[340px] w-[220px] rounded-3xl bg-white/30 shadow-2xl sm:h-[440px] sm:w-[320px] lg:h-[420px] lg:w-[280px] xl:h-[440px] xl:w-[320px]"></div>
							<div className="absolute -right-5 -top-5 z-20 h-[340px] w-[220px] rounded-3xl bg-white/50 shadow-2xl sm:h-[440px] sm:w-[320px] lg:h-[420px] lg:w-[280px] xl:h-[440px] xl:w-[320px]"></div>
							<div className="relative z-30 h-[340px] w-[220px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl sm:h-[440px] sm:w-[320px] lg:h-[420px] lg:w-[280px] xl:h-[440px] xl:w-[320px]">
								<div className="flex justify-end px-6 pt-6">
									<div className="flex items-center space-x-1 space-x-reverse">
										<div className="size-3 rounded-full bg-slate-200"></div>
										<div className="size-3 rounded-full bg-slate-200"></div>
										<div className="size-3 rounded-full bg-slate-200"></div>
									</div>
								</div>
								<h2 className="pb-2 pt-6 text-center text-2xl font-bold text-gray-800 lg:text-xl">
									خلاصه سبد خرید
								</h2>
								<div className="max-w-md animate-pulse space-y-4 divide-y divide-gray-200 rounded border border-gray-200 p-4 md:p-6">
									<div className="flex items-center justify-between">
										<div>
											<div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300"></div>
											<div className="h-2 w-32 rounded-full bg-gray-200"></div>
										</div>
										<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" viewbox="0 0 24 24">
												<path fill="currentColor" d="M8.75 13a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-3.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"/>
												<path fill="currentColor" fill-rule="evenodd" d="M17.274 3.473c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25h-4a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.628 2.303a3 3 0 0 0-1.01.828c-.622.797-.732 1.746-.621 2.834c.107 1.056.44 2.386.856 4.05l.026.107c.264 1.052.477 1.907.731 2.574c.265.696.602 1.266 1.156 1.699c.555.433 1.19.62 1.929.71c.708.084 1.59.084 2.675.084h4.724c1.085 0 1.966 0 2.675-.085c.74-.088 1.374-.276 1.928-.71c.555-.432.891-1.002 1.156-1.698c.255-.667.468-1.522.731-2.575l.027-.105c.416-1.665.748-2.995.856-4.05c.11-1.09 0-2.038-.622-2.835a3 3 0 0 0-1.009-.828l-.628-2.303c-.237-.871-.41-1.505-.776-1.999a3.25 3.25 0 0 0-1.426-1.089M7.272 4.87c.22-.086.486-.111 1.147-.118c.282.59.884.998 1.58.998h4c.698 0 1.3-.408 1.582-.998c.661.007.927.032 1.147.118c.306.12.572.323.768.587c.176.237.279.568.57 1.635l.354 1.297c-1.038-.139-2.378-.139-4.043-.139H9.622c-1.664 0-3.004 0-4.042.139l.354-1.297c.29-1.067.394-1.398.57-1.635a1.75 1.75 0 0 1 .768-.587M10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 1 0 0-.5zm-5.931 6.865c.279-.357.72-.597 1.63-.729c.931-.134 2.193-.136 3.986-.136h4.63c1.793 0 3.054.002 3.985.136c.911.132 1.352.372 1.631.73c.279.357.405.842.311 1.758c-.095.936-.399 2.16-.834 3.9c-.277 1.108-.47 1.876-.688 2.45c-.212.554-.419.847-.678 1.05c-.259.202-.594.331-1.183.402c-.61.073-1.4.074-2.544.074h-4.63c-1.144 0-1.935-.001-2.544-.074c-.59-.07-.924-.2-1.183-.402c-.26-.203-.467-.496-.678-1.05c-.218-.574-.411-1.342-.689-2.45c-.434-1.74-.739-2.964-.834-3.9c-.093-.916.033-1.402.312-1.759" clip-rule="evenodd"/>
											</svg>
										</div>
									</div>
									<div className="flex items-center justify-between pt-4">
										<div>
											<div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300"></div>
											<div className="h-2 w-32 rounded-full bg-gray-200"></div>
										</div>
										<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" viewbox="0 0 24 24">
												<path fill="currentColor" d="M8.75 13a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-3.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"/>
												<path fill="currentColor" fill-rule="evenodd" d="M17.274 3.473c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25h-4a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.628 2.303a3 3 0 0 0-1.01.828c-.622.797-.732 1.746-.621 2.834c.107 1.056.44 2.386.856 4.05l.026.107c.264 1.052.477 1.907.731 2.574c.265.696.602 1.266 1.156 1.699c.555.433 1.19.62 1.929.71c.708.084 1.59.084 2.675.084h4.724c1.085 0 1.966 0 2.675-.085c.74-.088 1.374-.276 1.928-.71c.555-.432.891-1.002 1.156-1.698c.255-.667.468-1.522.731-2.575l.027-.105c.416-1.665.748-2.995.856-4.05c.11-1.09 0-2.038-.622-2.835a3 3 0 0 0-1.009-.828l-.628-2.303c-.237-.871-.41-1.505-.776-1.999a3.25 3.25 0 0 0-1.426-1.089M7.272 4.87c.22-.086.486-.111 1.147-.118c.282.59.884.998 1.58.998h4c.698 0 1.3-.408 1.582-.998c.661.007.927.032 1.147.118c.306.12.572.323.768.587c.176.237.279.568.57 1.635l.354 1.297c-1.038-.139-2.378-.139-4.043-.139H9.622c-1.664 0-3.004 0-4.042.139l.354-1.297c.29-1.067.394-1.398.57-1.635a1.75 1.75 0 0 1 .768-.587M10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 1 0 0-.5zm-5.931 6.865c.279-.357.72-.597 1.63-.729c.931-.134 2.193-.136 3.986-.136h4.63c1.793 0 3.054.002 3.985.136c.911.132 1.352.372 1.631.73c.279.357.405.842.311 1.758c-.095.936-.399 2.16-.834 3.9c-.277 1.108-.47 1.876-.688 2.45c-.212.554-.419.847-.678 1.05c-.259.202-.594.331-1.183.402c-.61.073-1.4.074-2.544.074h-4.63c-1.144 0-1.935-.001-2.544-.074c-.59-.07-.924-.2-1.183-.402c-.26-.203-.467-.496-.678-1.05c-.218-.574-.411-1.342-.689-2.45c-.434-1.74-.739-2.964-.834-3.9c-.093-.916.033-1.402.312-1.759" clip-rule="evenodd"/>
											</svg>
										</div>
									</div>
									<div className="flex items-center justify-between pt-4">
										<div>
											<div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300"></div>
											<div className="h-2 w-32 rounded-full bg-gray-200"></div>
										</div>
										<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" viewbox="0 0 24 24">
												<path fill="currentColor" d="M8.75 13a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-3.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"/>
												<path fill="currentColor" fill-rule="evenodd" d="M17.274 3.473c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25h-4a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.628 2.303a3 3 0 0 0-1.01.828c-.622.797-.732 1.746-.621 2.834c.107 1.056.44 2.386.856 4.05l.026.107c.264 1.052.477 1.907.731 2.574c.265.696.602 1.266 1.156 1.699c.555.433 1.19.62 1.929.71c.708.084 1.59.084 2.675.084h4.724c1.085 0 1.966 0 2.675-.085c.74-.088 1.374-.276 1.928-.71c.555-.432.891-1.002 1.156-1.698c.255-.667.468-1.522.731-2.575l.027-.105c.416-1.665.748-2.995.856-4.05c.11-1.09 0-2.038-.622-2.835a3 3 0 0 0-1.009-.828l-.628-2.303c-.237-.871-.41-1.505-.776-1.999a3.25 3.25 0 0 0-1.426-1.089M7.272 4.87c.22-.086.486-.111 1.147-.118c.282.59.884.998 1.58.998h4c.698 0 1.3-.408 1.582-.998c.661.007.927.032 1.147.118c.306.12.572.323.768.587c.176.237.279.568.57 1.635l.354 1.297c-1.038-.139-2.378-.139-4.043-.139H9.622c-1.664 0-3.004 0-4.042.139l.354-1.297c.29-1.067.394-1.398.57-1.635a1.75 1.75 0 0 1 .768-.587M10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 1 0 0-.5zm-5.931 6.865c.279-.357.72-.597 1.63-.729c.931-.134 2.193-.136 3.986-.136h4.63c1.793 0 3.054.002 3.985.136c.911.132 1.352.372 1.631.73c.279.357.405.842.311 1.758c-.095.936-.399 2.16-.834 3.9c-.277 1.108-.47 1.876-.688 2.45c-.212.554-.419.847-.678 1.05c-.259.202-.594.331-1.183.402c-.61.073-1.4.074-2.544.074h-4.63c-1.144 0-1.935-.001-2.544-.074c-.59-.07-.924-.2-1.183-.402c-.26-.203-.467-.496-.678-1.05c-.218-.574-.411-1.342-.689-2.45c-.434-1.74-.739-2.964-.834-3.9c-.093-.916.033-1.402.312-1.759" clip-rule="evenodd"/>
											</svg>
										</div>
									</div>
									<div className="flex items-center justify-between pt-4">
										<div>
											<div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300"></div>
											<div className="h-2 w-32 rounded-full bg-gray-200"></div>
										</div>
										<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" viewbox="0 0 24 24">
												<path fill="currentColor" d="M8.75 13a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-3.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"/>
												<path fill="currentColor" fill-rule="evenodd" d="M17.274 3.473c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25h-4a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.628 2.303a3 3 0 0 0-1.01.828c-.622.797-.732 1.746-.621 2.834c.107 1.056.44 2.386.856 4.05l.026.107c.264 1.052.477 1.907.731 2.574c.265.696.602 1.266 1.156 1.699c.555.433 1.19.62 1.929.71c.708.084 1.59.084 2.675.084h4.724c1.085 0 1.966 0 2.675-.085c.74-.088 1.374-.276 1.928-.71c.555-.432.891-1.002 1.156-1.698c.255-.667.468-1.522.731-2.575l.027-.105c.416-1.665.748-2.995.856-4.05c.11-1.09 0-2.038-.622-2.835a3 3 0 0 0-1.009-.828l-.628-2.303c-.237-.871-.41-1.505-.776-1.999a3.25 3.25 0 0 0-1.426-1.089M7.272 4.87c.22-.086.486-.111 1.147-.118c.282.59.884.998 1.58.998h4c.698 0 1.3-.408 1.582-.998c.661.007.927.032 1.147.118c.306.12.572.323.768.587c.176.237.279.568.57 1.635l.354 1.297c-1.038-.139-2.378-.139-4.043-.139H9.622c-1.664 0-3.004 0-4.042.139l.354-1.297c.29-1.067.394-1.398.57-1.635a1.75 1.75 0 0 1 .768-.587M10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 1 0 0-.5zm-5.931 6.865c.279-.357.72-.597 1.63-.729c.931-.134 2.193-.136 3.986-.136h4.63c1.793 0 3.054.002 3.985.136c.911.132 1.352.372 1.631.73c.279.357.405.842.311 1.758c-.095.936-.399 2.16-.834 3.9c-.277 1.108-.47 1.876-.688 2.45c-.212.554-.419.847-.678 1.05c-.259.202-.594.331-1.183.402c-.61.073-1.4.074-2.544.074h-4.63c-1.144 0-1.935-.001-2.544-.074c-.59-.07-.924-.2-1.183-.402c-.26-.203-.467-.496-.678-1.05c-.218-.574-.411-1.342-.689-2.45c-.434-1.74-.739-2.964-.834-3.9c-.093-.916.033-1.402.312-1.759" clip-rule="evenodd"/>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div
								className="flex w-full max-w-xl flex-col space-y-8 px-16">
								<div className="absolute -bottom-8 left-3/4 z-40																																																																																																																																																																                  lg:w-80">
									<div className="w-full text-bold text-center text-xl pb-2">
										<h2>
											درگاه پرداخت پاناپال
										</h2>
									</div>
									<div className="flex flex-col items-center justify-center gap-4">
										<div className="flex justify-between gap-2 w-full">
											<div className="border border-white rounded-lg h-8 w-full"></div>
											<div className="border border-white rounded-lg h-8 w-full"></div>
											<div className="border border-white rounded-lg h-8 w-full"></div>
											<div className="border border-white rounded-lg h-8 w-full"></div>
										</div>
										<div className="w-1/2 flex flex-col items-center justify-center gap-4">
											<div className="border border-white rounded-lg h-8 w-full"></div>
											<div className="flex flex-row-reverse justify-between gap-2 w-full items-center">
												<div>14</div>
												<div className="border border-white rounded-lg h-8 w-full"></div>
												<div>/</div>
												<div className="border border-white rounded-lg h-8 w-full"></div>
											</div>
											<div className="border border-white rounded-lg h-8 w-full">
												<div className="border-r mr-auto w-fit h-full px-1 flex items-center">
													<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-400" viewbox="0 0 24 24" fill="currentColor">
														<path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"></path>
													</svg>
												</div>
											</div>
											<div className="border-2 border-blue-400 text-blue-400 rounded-lg h-8 flex items-center justify-center w-full">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewbox="0 0 24 24" fill="currentColor">
													<path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
												</svg>
											</div>
										</div>
									</div>
								</div>
								<!-- notification -->
								<div className="absolute right-full top-1/3 z-30">
									<div className="-mt-10 flex w-56 translate-x-[76px] items-start gap-2 space-x-2 rounded-lg border border-gray-100 bg-green-500/10 px-2 py-3 text-gray-900 backdrop-blur-md sm:-mt-16 sm:w-60 md:w-72 md:translate-x-20 lg:-mt-16 xl:-mt-16 xl:translate-x-20">
										<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-100 bg-green-50">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400" viewbox="0 0 24 24">
												<path fill="currentColor" d="M8.75 13a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-3.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"/>
												<path fill="currentColor" fill-rule="evenodd" d="M17.274 3.473c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25h-4a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.628 2.303a3 3 0 0 0-1.01.828c-.622.797-.732 1.746-.621 2.834c.107 1.056.44 2.386.856 4.05l.026.107c.264 1.052.477 1.907.731 2.574c.265.696.602 1.266 1.156 1.699c.555.433 1.19.62 1.929.71c.708.084 1.59.084 2.675.084h4.724c1.085 0 1.966 0 2.675-.085c.74-.088 1.374-.276 1.928-.71c.555-.432.891-1.002 1.156-1.698c.255-.667.468-1.522.731-2.575l.027-.105c.416-1.665.748-2.995.856-4.05c.11-1.09 0-2.038-.622-2.835a3 3 0 0 0-1.009-.828l-.628-2.303c-.237-.871-.41-1.505-.776-1.999a3.25 3.25 0 0 0-1.426-1.089M7.272 4.87c.22-.086.486-.111 1.147-.118c.282.59.884.998 1.58.998h4c.698 0 1.3-.408 1.582-.998c.661.007.927.032 1.147.118c.306.12.572.323.768.587c.176.237.279.568.57 1.635l.354 1.297c-1.038-.139-2.378-.139-4.043-.139H9.622c-1.664 0-3.004 0-4.042.139l.354-1.297c.29-1.067.394-1.398.57-1.635a1.75 1.75 0 0 1 .768-.587M10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 1 0 0-.5zm-5.931 6.865c.279-.357.72-.597 1.63-.729c.931-.134 2.193-.136 3.986-.136h4.63c1.793 0 3.054.002 3.985.136c.911.132 1.352.372 1.631.73c.279.357.405.842.311 1.758c-.095.936-.399 2.16-.834 3.9c-.277 1.108-.47 1.876-.688 2.45c-.212.554-.419.847-.678 1.05c-.259.202-.594.331-1.183.402c-.61.073-1.4.074-2.544.074h-4.63c-1.144 0-1.935-.001-2.544-.074c-.59-.07-.924-.2-1.183-.402c-.26-.203-.467-.496-.678-1.05c-.218-.574-.411-1.342-.689-2.45c-.434-1.74-.739-2.964-.834-3.9c-.093-.916.033-1.402.312-1.759" clip-rule="evenodd"/>
											</svg>
										</div>
										<div className="relative inline-flex flex-1 items-start justify-between">
											<div>
												<h2 className="text-xs font-semibold tracking-tight">
													پاسخ درگاه پرداخت پاناپال
												</h2>
												<p className="text-xs font-light text-gray-500">
													درخواست پرداخت شما با موفقیت انجام شد
												</p>
											</div>

											<div className="text-xs text-gray-400">17:15</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute bottom-10 w-full bg-red-400">
						<i className=""></i>
					</div>
				</div>
			</div>
		</section>
    )
}

export default HeroSection;