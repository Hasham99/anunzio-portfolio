import React from 'react'
import logo from '../../../assets/rounded-logo.png'
import { Link } from 'react-router-dom/dist'

const Footer = () => {
    return (
        <div>

            <footer className="bg-gray-900">
                <div className=" mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className=" md:flex md:justify-between ">
                        <div className=" mb-6 md:mb-0">
                            <a href="#" className="flex items-center">

                                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LOGO</span> */}
                            </a>
                        </div>
                        <div className=" grid xl:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 col-span-1 gap-8 sm:gap-6  mx-auto">
                            <div className='mx-auto my-auto'>
                                <Link>
                                    <img src={logo} className="xl:h-52 lg:h-52 md:h-40 sm:h-36 h-24 mb-3" alt="Logo" /></Link>
                            </div>
                            <div className='my-auto mx-auto xl:col-span-2 lg:col-span-2 md:col-span-2'>

                                <h2 className='text-center text-[14px] xl:text-md lg:text-lg md:text-md sm:text-sm font-medium text-gray-400'>
                                    Welcome to our website! Here you will find our portfolio showcasing some of our impressive projects. If you're looking for inspiration for your own website, be sure to check out our collection of buttons, headers, and footers. We've made the selection process easy for you, so you can find the perfect elements for your site effortlessly. Explore our offerings and create a stunning online presence!
                                </h2>

                            </div>
                        </div>
                    </div>
                    <hr className=" my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <div className=" sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm sm:text-center text-gray-400">© 2023 <a className="hover:underline">Anunzio International™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a target="_blank" href="https://www.facebook.com/anunziointernational" className="text-gray-500 hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a target="_blank" href="https://instagram.com/anunziodigital" className="text-gray-500 hover:text-white ms-5">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-4 h-4' fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                                </svg>
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a target="_blank" href="https://linkedin.com/company/anunziointernational" className="text-gray-500 hover:text-white ms-5">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-4 h-4' fill="currentColor" viewBox="0 0 30 30">
                                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                </svg>
                                <span className="sr-only">Linkdin</span>
                            </a>


                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer