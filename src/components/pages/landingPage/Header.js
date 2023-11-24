import React from 'react'
import logo from '../../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
// import { useState } from "react";

const Header = () => {
    // const [isNavOpen, setIsNavOpen] = useState(false);
    return (

        <header className='sticky will-change-scroll  top-0'>
            {/* <nav className=" shadow-lg bg-white fixed z-20 start-0 top-0 w-full border-gray-200 "> */}
            <nav className=" shadow-lg bg-white w-full border-gray-200 ">
                <div className=" xl:py-4 p-2 lg:py-4 md:py-3 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                    <Link to='/'>
                        <img src={logo} className="h-12 " alt="Logo" />
                    </Link>

                    <section className="MOBILE-MENU flex md:hidden">
                        <div
                            className="HAMBURGER-ICON space-y-2"
                        // onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        {/* <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> */}

                    </section>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-sticky">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                            <li>
                                <NavLink to='/home' >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/company-profile'>
                                    Company Profile
                                </NavLink>
                            </li>

                            {/* <li></li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        </header >

    )
}

export default Header