import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { userData } from '../constants/data'

export default function Navbar() {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
            <div className="flex  md:flex-row justify-between items-center">
                <div className="flex flex-col">
                    <Link href="/">
                        <a>
                            <h1 className="font-semibold text-xl dark:text-gray-100">
                                {userData.name}
                            </h1>
                            <p className="text-base font-light text-gray-500 dark:text-gray-300">
                                {userData.designation}
                            </p>
                        </a>
                    </Link>
                </div>

                <div className="space-x-8 hidden md:block">
                <Link href="/blogs">
                        <a
                            className={`text-base  ${router.asPath === "/blogs"
                                ? "text-gray-800 font-bold dark:text-gray-400"
                                : "text-gray-600 dark:text-gray-300 font-normal "
                                }`}
                        >
                            Blogs
                            {router.asPath === "/blogs" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-down inline-block h-3 w-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                    />
                                </svg>
                            )}
                        </a>
                    </Link>

                    <Link href="/projects">
                        <a
                            className={`text-base  ${router.asPath === "/projects"
                                ? "text-gray-800 font-bold dark:text-gray-400"
                                : "text-gray-600 dark:text-gray-300 font-normal "
                                }`}
                        >
                            Projects
                            {router.asPath === "/projects" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-down inline-block h-3 w-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                    />
                                </svg>
                            )}
                        </a>
                    </Link>
                    <Link href="/skills">
                        <a
                            className={`text-base  ${router.asPath === "/skills"
                                ? "text-gray-800 font-bold dark:text-gray-400"
                                : "text-gray-600 dark:text-gray-300 font-normal "
                                }`}
                        >
                            Skills{" "}
                            {router.asPath === "/skills" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-down inline-block h-3 w-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                    />
                                </svg>
                            )}
                        </a>
                    </Link>
                    <Link href="/about">
                        <a
                            className={`text-base  ${router.asPath === "/about"
                                ? "text-gray-800 font-bold dark:text-gray-400"
                                : "text-gray-600 dark:text-gray-300 font-normal "
                                }`}
                        >
                            About{" "}
                            {router.asPath === "/about" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-down inline-block h-3 w-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                    />
                                </svg>
                            )}
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a
                            className={`text-base  ${router.asPath === "/contact"
                                ? "text-gray-800 font-bold dark:text-gray-400"
                                : "text-gray-600 dark:text-gray-300 font-normal "
                                }`}
                        >
                            Contact
                            {router.asPath === "/contact" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-down inline-block h-3 w-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                    />
                                </svg>
                            )}
                        </a>
                    </Link>

                </div>

                <div className="space-x-4 flex flex-row items-center">
                    <a
                        href={userData.socialLinks.github}
                        className="text-base font-normal text-gray-600 dark:text-gray-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github h-5 w-5" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>

                    </a>
                    <a
                        href={userData.socialLinks.linkedin}
                        className="text-base font-normal text-gray-600 dark:text-gray-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin h-5 w-5" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="w-10 h-10 p-3 rounded focus:outline-none"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {mounted && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
                            >
                                {theme === "dark" ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                )}
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <div className="space-x-8 block md:hidden mt-4">
                <Link href="/about">
                    <a className="text-base font-normal text-gray-600 dark:text-gray-300">
                        About
                    </a>
                </Link>
                <Link href="/Skills">
                    <a className="text-base font-normal text-gray-600 dark:text-gray-300">
                        Skills
                    </a>
                </Link>
                <Link href="/experience">
                    <a className="text-base font-normal text-gray-600 dark:text-gray-300">
                        Experience
                    </a>
                </Link>
                <Link href="/contact">
                    <a className="text-base font-normal text-gray-600 dark:text-gray-300">
                        Contact
                    </a>
                </Link>
            </div>
        </div>
    );
}