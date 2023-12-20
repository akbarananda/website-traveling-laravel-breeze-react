import React from "react";
import { Link, Head } from "@inertiajs/react";
import logo from "@/assets/img/logo.png";
import AboutComponent from "./AboutComponent";

const NavbarComponent = () => {
    return (
        <div>
            {/* <!-- ========== HEADER ========== --> */}
            <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0">
                <nav
                    class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                    aria-label="Global"
                >
                    <div class="flex items-center justify-between">
                        <img
                            src={logo}
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite React Logo"
                        />
                        <a
                            class="flex-none text-xl font-semibold text-black"
                            href="#"
                            aria-label="Brand"
                        >
                            TravelingYUK
                        </a>
                        <div class="sm:hidden">
                            <button
                                type="button"
                                class="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-collapse="#navbar-collapse-with-animation"
                                aria-controls="navbar-collapse-with-animation"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <line x1="3" x2="21" y1="6" y2="6" />
                                    <line x1="3" x2="21" y1="12" y2="12" />
                                    <line x1="3" x2="21" y1="18" y2="18" />
                                </svg>
                                <svg
                                    class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        id="navbar-collapse-with-animation"
                        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
                    >
                        <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                            <Link
                                class="font-medium text-black hover:text-white sm:py-6"
                                href="/"
                                aria-current="page"
                            >
                                Home
                            </Link>
                            <Link
                                class="font-medium text-black/[.8] hover:text-white sm:py-6"
                                href="about"
                            >
                                About
                            </Link>
                            <Link
                                class="font-medium text-black/[.8] hover:text-white sm:py-6"
                                href="support"
                            >
                                Support
                            </Link>
                            <Link
                                class="font-medium text-black/[.8] hover:text-white sm:py-6"
                                href="#"
                            >
                                Check Order
                            </Link>
                            <Link
                                class="flex items-center gap-x-2 font-medium text-black/[.8] hover:text-white sm:border-s sm:border-black/[.3] sm:my-6 sm:ps-6"
                                href="loginweb"
                            >
                                <svg
                                    class="flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                Log in
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <!-- ========== END HEADER ========== --> */}
        </div>
    );
};

export default NavbarComponent;
