import React from "react";
import { Link, Head } from "@inertiajs/react";
import logo from "@/assets/img/logo.png";
import AboutComponent from "./AboutComponent";

const NavbarComponent = () => {
    return (
        <div>
            <header class="bg-white">
                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-3">
                            <img
                                src={logo}
                                className="ml-3 h-6 sm:h-9"
                                alt="Flowbite React Logo"
                            />
                            <a
                                class="flex-none text-xl font-semibold text-black"
                                href="#"
                                aria-label="Brand"
                            >
                                TravelingYUK
                            </a>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            {" "}
                                            Home{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="about"
                                        >
                                            {" "}
                                            About{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="support"
                                        >
                                            {" "}
                                            Support{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="#"
                                        >
                                            {" "}
                                            Check Order{" "}
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div class="flex items-center gap-4">
                            <div class="sm:flex sm:gap-4">
                                <a
                                    class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="loginweb"
                                >
                                    Login
                                </a>
                            </div>

                            <div class="block md:hidden">
                                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavbarComponent;
