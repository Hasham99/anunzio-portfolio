import AccordionComp from '../SelectionSection/AccordionComp'
import React from 'react'

const SelectionSection = () => {
    return (
        <div className='max-h-fit  bg-slate-100 '>

            <div className='max-w-[1200px] grid mx-auto  xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 '>

                {/* Left Section */}
                <div className=' xl:col-span-2 md:col-span-2 lg:col-span-2 mx-auto'>
                    <h1 className='text-4xl font-bold mx-auto pt-10 xl:pt-32 lg:pt-20 md:pt-20 sm:pt-14 text-center'>Choose your Design</h1>

                    <hr className="w-10 h-1 mx-auto bg-purple-500 border-0 rounded my-5"></hr>
                    <h3 className='text-xl text-center xl:mx-40 md:mx-40 lg:mx-40 mx-5 font-medium '>Unleash your creativity and choose from a stunning selection of unique designs</h3>
                </div>
                <div className='col-span-2 pb-20 px-5'>

                    <AccordionComp />
                </div>


            </div >

        </div >
    )
}

export default SelectionSection
