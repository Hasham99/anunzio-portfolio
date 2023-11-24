import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className="sticky top-0">
            <nav className="shadow-lg bg-white w-full border-gray-200">
                <div className="xl:py-4 p-2 lg:py-4 md:py-3 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/">
                        <img src={logo} className="h-12" alt="Logo" />
                    </Link>

                    <section className="MOBILE-MENU flex md:hidden">

                        <div className="link-container">
                            <NavLink to="/company-profile">
                                <button className="relative bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Company Portfolio
                                </button>
                            </NavLink>
                        </div>

                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div
                                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                                <li>
                                    <NavLink to="/home">Home</NavLink>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-sticky">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8">
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/company-profile">Company Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;