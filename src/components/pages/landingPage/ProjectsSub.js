import React from 'react'

const ProjectsSub = (props) => {
    return (
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
            <div className='pt-5 pb-5'>
                <img src={props.laptopImage} alt="" srcset="" />
            </div>
            <div className='my-auto mx-10 '>
                <h1 className='text-3xl font-bold py-4 '>{props.title}</h1>
                <h3 className='text-[17px] font-medium text-gray-600 '>{props.description}</h3>
            </div>
            <div className='col-span-2'>
                <hr className="w-1/2 h-1 mx-auto my-0 bg-purple-300 border-0 rounded md:my-5"></hr>
            </div>
        </div>
    )
}

export default ProjectsSub