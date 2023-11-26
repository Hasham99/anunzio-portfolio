import React from 'react'
import image1 from '../../../assets/1.jpg'
import image2 from '../../../assets/2.jpg'
import image3 from '../../../assets/3.jpg'
import image4 from '../../../assets/4.jpg'
import image5 from '../../../assets/5.jpg'
import image6 from '../../../assets/6.jpg'
import image7 from '../../../assets/7.jpg'
import image8 from '../../../assets/8.jpg'
import image9 from '../../../assets/9.jpg'
import image10 from '../../../assets/10.jpg'

const CompanyProfileSection = () => {
    return (
        <div className='max-h-fit  bg-slate-50 '>

            <div className='max-w-[1200px] grid mx-auto  xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 '>

                {/* Left Section */}
                <div className=' xl:col-span-2 md:col-span-2 lg:col-span-2 mx-auto'>
                    <h1 className='text-4xl font-bold mx-auto pt-32 text-center'>Company Profile</h1>

                    <hr class="w-10 h-1 mx-auto bg-purple-500 border-0 rounded my-5"></hr>
                    <h3 className='text-lg text-center xl:mx-10 md:mx-10 lg:mx-10 mx-3 xl:font-medium md:font-medium lg:font-medium font-regular '>Dear valued client, Congratulations on taking this significant step towards revitalizing your online presence. You are just moments away from transforming your digital identity. Below, you'll find our comprehensive company profile, encompassing our expertise in web development, app development, SEO, social media marketing, and more. Your journey to a refreshed and dynamic online presence begins here.</h3>
                </div>

                <div className='py-5 px-2'>
                    <img src={image1} alt="" srcset="" />
                </div>
                <div className='py-5 px-2'>
                    <img src={image2} alt="" srcset="" />
                </div>
                <div className='py-5 px-2'>
                    <img src={image3} alt="" srcset="" />
                </div>
                <div className='py-5 px-2'>
                    <img src={image4} alt="" srcset="" />
                </div>
                <div className='py-5 px-2'>
                    <img src={image5} alt="" srcset="" />
                </div>
                <div className='py-5 px-2'>
                    <img src={image6} alt="" srcset="" />
                </div>
                <div className='py-5 px-2'>
                    <img src={image7} alt="" srcset="" />
                </div>
                <div className='py-5 px-2'>
                    <img src={image8} alt="" srcset="" />
                </div>
                <div className='py-5 px-2'>
                    <img src={image9} alt="" srcset="" />
                </div>
                <div className='py-5 px-2'>
                    <img src={image10} alt="" srcset="" />
                </div>

            </div >

        </div >
    )
}

export default CompanyProfileSection