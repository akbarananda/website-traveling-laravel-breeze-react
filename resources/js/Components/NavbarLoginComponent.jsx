import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, Head } from "@inertiajs/react";
import logo from "@/assets/img/logo.png";
import profile from "@/assets/img/profile.jpg";

const NavbarLoginComponent = () => {
    return (
        <div>
            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
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
                        <div className="flex items-center gap-4">
                            {/* Dropdowns: Simple */}
                            <div className="flex justify-end">
                                {/* Dropdown Container */}
                                <Menu
                                    as="div"
                                    className="relative inline-block"
                                >
                                    {/* Dropdown Toggle Button */}
                                    <Menu.Button className="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-400 bg-white px-3 py-2 text-sm font-semibold leading-5 text-black hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                                        <img
                                            className="inline-block h-8 w-8 flex-none rounded-full sm:h-8 sm:w-8"
                                            src={profile}
                                            alt="User Avatar"
                                        />
                                        <span>Akbar Ananda</span>
                                        <svg
                                            className="hi-mini hi-chevron-down inline-block h-4 w-4 opacity-50"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Menu.Button>
                                    {/* END Dropdown Toggle Button */}

                                    {/* Dropdown */}
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="opacity-0 scale-90"
                                        enterTo="opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-90"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg shadow-xl focus:outline-none dark:shadow-gray-900">
                                            <div className="divide-y divide-gray-100 rounded-lg bg-white ring-1 ring-black ring-opacity-5 dark:divide-gray-700 dark:bg-gray-800 dark:ring-gray-700">
                                                <div className="space-y-1 p-2.5">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={`group flex items-center justify-between space-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                                                    active
                                                                        ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                                                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                                                                }`}
                                                            >
                                                                <svg
                                                                    className="hi-mini hi-inbox inline-block h-5 w-5 flex-none opacity-25 group-hover:opacity-50"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="grow">
                                                                    Inbox
                                                                </span>
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                                <div className="space-y-1 p-2.5">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={`group flex items-center justify-between space-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                                                    active
                                                                        ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                                                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                                                                }`}
                                                            >
                                                                <svg
                                                                    className="hi-mini hi-user-circle inline-block h-5 w-5 flex-none opacity-25 group-hover:opacity-50"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="grow">
                                                                    Account
                                                                </span>
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={`group flex items-center justify-between space-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                                                    active
                                                                        ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                                                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                                                                }`}
                                                            >
                                                                <svg
                                                                    className="hi-mini hi-cog-6-tooth inline-block h-5 w-5 flex-none opacity-25 group-hover:opacity-50"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="grow">
                                                                    Settings
                                                                </span>
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                                <div className="space-y-1 p-2.5">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="/"
                                                                className={`group flex items-center justify-between space-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                                                    active
                                                                        ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                                                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                                                                }`}
                                                            >
                                                                <svg
                                                                    className="hi-mini hi-lock-closed inline-block h-5 w-5 flex-none opacity-25 group-hover:opacity-50"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="grow">
                                                                    Sign out
                                                                </span>
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                    {/* END Dropdown */}
                                </Menu>
                                {/* END Dropdown Container */}
                            </div>
                            {/* END Dropdowns: Simple */}
                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
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

export default NavbarLoginComponent;
