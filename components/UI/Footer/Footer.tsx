import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="border-gray-200 border-t"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-8xl">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Shop</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Bags
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Tees
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Objects
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Home Goods
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Company</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Who we are
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Sustainability
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Press
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Careers
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Account</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Manage Account
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Returns &amp; Exchanges
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Redeem a Gift Card
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Connect</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Contact Us
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Twitter
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Instagram
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">
                        Pinterest
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-16 md:mt-16 xl:mt-0">
              <h3 className="text-sm font-medium text-gray-900">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-gray-500">
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="text"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="appearance-none min-w-0 w-full bg-white border border-gray-300 shadow-sm py-2 px-4 text-base text-slate-500 placeholder-gray-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                />
                <div className=" flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-black border border-transparent shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-row border-t border-gray-200 py-10">
            <div className="flex-1">
              <p className="text-sm text-gray-500">
                © 2023 ACME, Inc. All rights reserved.
              </p>
            </div>
            <div className="flex flex-1 space-x-6 items-center h-10 justify-end">
              <a
                aria-label="Github Repository"
                href="https://github.com/vercel/commerce"
                className="Footer_link__LpNu2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21227 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21227 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <nav className="I18nWidget_root__MTFDo">
                <div className="flex items-center relative">
                  <button
                    className="I18nWidget_button__GEQou"
                    aria-label="Language selector"
                  ></button>
                  <Image
                    className="block mr-2 w-5"
                    src="/images/flag-en-us.svg"
                    alt="US Flag"
                    width={75}
                    height={75}
                  />
                  <span className="cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      shape-rendering="geometricPrecision"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
                <div className="absolute top-0 right-0"></div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
