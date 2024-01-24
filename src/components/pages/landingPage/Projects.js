import React from 'react'
import ProjectsSub from './ProjectsSub'

import image01 from '../../../assets/webiste01.png'
import image02 from '../../../assets/webiste02.png'
import image03 from '../../../assets/webiste03.png'
import image04 from '../../../assets/webiste04.png'
import image05 from '../../../assets/webiste05.png'
import ProjectsSubLeft from './ProjectsSubLeft'
import ProjectsSubRight from './ProjectsSubRight'
// import image06 from '../../assets/webiste06.png'

const Projects = (props) => {
    return (
        <div className='max-h-fit '>
            <div className='max-w-[1250px] grid mx-auto xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2  grid-cols-1 '>
                <div className='xl:col-span-2 lg:col-span-2 md:col-span-2 mx-auto'>
                    <h1 className='text-4xl font-bold mx-auto xl:pt-32 md:pt-32 lg:pt-32 pt-10 text-center'>PROJECTS</h1>

                    <hr className="w-10 h-1 mx-auto  bg-purple-500 border-0 rounded my-5"></hr>
                    <h3 className='text-xl text-center xl:mx-40 lg:mx-40 md:mx-40 mx-10 font-medium '>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h3>
                </div>
                {/* <div className='xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-2'>
                    <ProjectsSub laptopImage={image01} title='Dopefolio' description='Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally' />

                    <ProjectsSub laptopImage={image02} title='Wilsonport' description='Wilsonport Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.' />

                    <ProjectsSub laptopImage={image03} title='Dopefolio' description='Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally' />

                    <ProjectsSub laptopImage={image04} title='Boreal Coffee Clone' description="I re-created the frontend of Boreal Coffee' s official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend." />

                    <ProjectsSub laptopImage={image05} title='Crown Template' description='Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.' />

                </div> */}


                <div>
                    <ProjectsSubLeft laptopImage={image01} link={'https://anunzio0786.site/'} />
                </div>

                <div className='my-auto'>

                    <ProjectsSubRight title='Urben Nest' description='Introducing "Urben Nest": Where architecture meets dreams! We are a visionary company that transforms your housing dreams into stunning reality. With meticulous attention to detail and a passion for design, we create homes that reflect your unique style and enhance your lifestyle. Welcome to a world where architecture becomes an art form.' />
                </div>

                <div>
                    <ProjectsSubLeft laptopImage={image02} link={'http://anunzio0786.website/'} />
                </div>

                <div className='my-auto'>

                    <ProjectsSubRight title='Cosmetics' description='Welcome to "Cosmetics"! We are your go-to destination for all your beauty needs. Our company is dedicated to providing high-quality beauty products that enhance your natural beauty. From skincare essentials to makeup must-haves, we have everything you need to look and feel your best. Discover your perfect beauty routine with "Cosmetics."' />
                </div>


                <div>
                    <ProjectsSubLeft laptopImage={image03} link={'https://jsonsgeneraltrading.com/wp2/'} />
                </div>

                <div className='my-auto'>

                    <ProjectsSubRight title='Print' description='Welcome to "Print"! We are the ultimate destination for customizable t-shirts. With our expertise in printing, we specialize in creating unique, personalized t-shirts that represent your individual style. Whether its a special event, a team uniform, or a gift, we guarantee high-quality prints that ensure your designs come to life. Trust "Print" for all your custom t-shirt needs.' />
                </div>



                <div>
                    <ProjectsSubLeft laptopImage={image04} link={'http://anunzio0786.online/'} />
                </div>

                <div className='my-auto'>

                    <ProjectsSubRight title='Gobios' description='Welcome to "Gobios" - your personal fitness companion! Our innovative application is designed to help you stay on track and achieve your fitness goals. With a range of features, including workout plans, nutrition tracking, and personalized coaching, Gobios ensures that you have all the tools you need to lead a healthy and balanced lifestyle. Let us guide you on your journey to a fitter and happier you.' />
                </div>



                <div>
                    <ProjectsSubLeft laptopImage={image05} link={'https://theaquasolution.com/'} />
                </div>

                <div className='my-auto'>

                    <ProjectsSubRight title='Green Plant Shop' description='Welcome to "Green Plan Shop"! We are your one-stop-shop for all things green and beautiful. Our company specializes in offering a wide range of green plants, from lush indoor foliage to vibrant outdoor varieties. Whether you are a seasoned plant parent or just starting your green journey, we have the perfect plants to bring life and freshness to your space. Shop with us and embrace the beauty of nature.' />
                </div>

            </div>
        </div >
    )
}

export default Projects