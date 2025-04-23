import React from "react";

export default function Nav({ handleLogout, isLoggedIn }) {



  return (
    <nav class="bg-black px-2 sm:px-4 md:py-2.5 lg:py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-yellow-600">
      <div class="container flex flex-row items-center justify-between mx-none">
        <a href="#home" class="flex items-center">
          <span className="self-center text-xl text-yellow-600 font-semibold whitespace-nowrap dark:text-yellow-600s">
            DJ Divide
          </span>
          
        </a>
        <div
          class="flex flex-col border border-black items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex md:p-4 lg:p-4 border border-black mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-black md:dark:bg-black">
            {/* <li>
              <a href="#home">
                <h1
                  className="block py-2 pl-3 pr-4 text-yellow-600 rounded md:bg-transparent md:text-yellow-600 md:p-0 dark:text-yellow-600"
                  aria-current="page"
                >
                  Home
                </h1>
              </a>
            </li> */}
            <li>
            <h1 className="text-yellow-600">CALL 206.427.1555</h1>

            </li>
            <li>
              <a href="#contact">
                <h1
                  className="block py-2 pl-3 pr-4 text-yellow-600 rounded md:bg-transparent md:text-yellow-600 md:p-0 dark:text-yellow-600"
                  aria-current="page"
                >
                  Contact Me
                </h1>
              </a>
            </li>
            <li>
              <a href="#rates">
                <h1
                  className="block py-2 pl-3 pr-4 text-yellow-600 rounded md:bg-transparent md:text-yellow-600 md:p-0 dark:text-yellow-600"
                  aria-current="page"
                >
                  Rates
                </h1>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
