import Image from "next/image";

export default function NavBar() {
  return (
    <nav>
      <div className="mx-auto max-w-8xl">
        <div className="flex items-center bg-slate-300 py-2 px-6">
          <div className="mr-2">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              shapeRendering="geometricPrecision"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </div>
          <span className="text-sm uppercase tracking-wider font-medium"></span>
        </div>
        <div className="flex justify-between items-center flex-row px-2 py-2 md:py-2 relative">
          <div className="flex flex-1 md:flex">
            <a className="Navbar_link__IStfC">My Closet</a>
          </div>
          <div>
            <span className="cursor-pointer ">
              <Image src="https://cdn-icons-png.flaticon.com/512/10559/10559757.png" width={75} height={75} alt="Main logo"/>
            </span>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <nav className="space-x-4 ml-6 lg:block">
              <a className="Navbar_link__IStfC" href="/">
                Sign In
              </a>
              <a className="Navbar_link__IStfC" href="/search?q=clothes">
                Register
              </a>
              <a className="Navbar_link__IStfC" href="/search?q=accessories">
                Find a Store
              </a>
            </nav>
            <span className="ml-3">
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
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      shapeRendering="geometricPrecision"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
                <div className="absolute top-0 right-0"></div>
              </nav>
            </span>
          </div>
        </div>
        {/** MOBILE */}
        <div className="Navbar_mobileNav__30_us divide-gray-400 divide-x hidden">
          <div className="flex flex-col items-center py-3">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              shapeRendering="geometricPrecision"
            >
              <path d="M3 12h18"></path>
              <path d="M3 6h18"></path>
              <path d="M3 18h18"></path>
            </svg>
            <span className="mt-1">Menu</span>
          </div>
          <div className="flex flex-col items-center py-3">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              shapeRendering="geometricPrecision"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="mt-1">Stores</span>
          </div>
          <div className="flex flex-col items-center py-3">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              shapeRendering="geometricPrecision"
            >
              <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
              <path d="M16 16l4.5 4.5"></path>
            </svg>
            <span className="mt-1">Search</span>
          </div>
          <div className="flex flex-col items-center py-3">
            <svg
              width="18"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M1 5H19"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="mt-1">Bag</span>
          </div>
        </div>
      </div>
      {/** MAIN Categories */}
      <div className=" border-b border-gray-300 px-4 md:py-4">
        <div className="mx-auto max-w-8xl">
          <nav className="lg:flex flex-row space-x-8 items-center justify-center">
            <a
              className="cursor-pointer hover:text-gray-600 text-center text-sm uppercase font-medium tracking-widest"
              href="/"
            >
              HOLIDAYS
            </a>
            <a
              className="cursor-pointer hover:text-gray-600 text-center text-sm uppercase font-medium tracking-widest"
              href="/"
            >
              NEW ARRIVAL
            </a>
            <a
              className="cursor-pointer hover:text-gray-600 text-center text-sm uppercase font-medium tracking-widest"
              href="/"
            >
              GET THE LOOK
            </a>
            <a
              className="cursor-pointer hover:text-gray-600 text-center text-sm uppercase font-medium tracking-widest"
              href="/"
            >
              CLOTHING
            </a>
            <a
              className="cursor-pointer hover:text-gray-600 text-center text-sm uppercase font-medium tracking-widest"
              href="/"
            >
              JEWLERY &amp; ACCESORIES
            </a>
            <a
              className="cursor-pointer hover:text-gray-600 text-center text-sm uppercase font-medium tracking-widest"
              href="/"
            >
              COLLECTIONS
            </a>
            <a
              className="cursor-pointer hover:text-gray-600 text-center text-sm uppercase font-medium tracking-widest"
              href="/"
            >
              PETITES
            </a>
            <a
              className="cursor-pointer hover:text-gray-600 text-center text-sm uppercase font-medium tracking-widest"
              href="/"
            >
              SALE
            </a>
            <div className="flex-1">
              <a
                className="cursor-pointer hover:text-gray-600 uppercase font-medium text-sm"
                href="/"
              >
                Search
              </a>
            </div>
            <nav className="relative UserNav_root__PBxKD">
              <div>
                <ul className="flex flex-row items-center justify-end h-100 UserNav_list__luGZt">
                  <li className="m-r-0 UserNav_item__6H0Tq">
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M1 5H19"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="absolute flex h-4 w-4 right-3 top-3 justify-center items-center rounded-lg text-xs text-white bg-black UserNav_bagCount__PvTYo">
                      2
                    </span>
                  </li>
                </ul>
              </div>
            </nav>
          </nav>
        </div>
      </div>
    </nav>
  );
}
