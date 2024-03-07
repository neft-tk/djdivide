import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ handleLogout, isLoggedIn }) {

  const onLogoutClick = () => {
    handleLogout();
  }

  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-yellow-600">
      <div class="container flex flex-wrap items-center justify-between mx-none">
        <a href="/" class="flex items-center">
          <span className="self-center text-xl text-yellow-600 font-semibold whitespace-nowrap dark:text-yellow-600s">
            DJ Divide
          </span>
        </a>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-gray-700">
            <li>
              <a href="#home">
                <h1
                  className="block py-2 pl-3 pr-4 text-yellow-600 rounded md:bg-transparent md:text-yellow-600 md:p-0 dark:text-yellow-600"
                  aria-current="page"
                >
                  Home
                </h1>
              </a>
            </li>
            {/* <li>
              <div>
                {isLoggedIn ? (
                  <button onClick={onLogoutClick}>
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/login">
                      <h1
                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                        aria-current="page"
                      >
                        Student Portal
                      </h1>
                    </Link>
                  </>
                )}
              </div>
            </li>
            <li>
              <Link to="/policies">
                <h1
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Policies
                </h1>
              </Link>
            </li> */}
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
