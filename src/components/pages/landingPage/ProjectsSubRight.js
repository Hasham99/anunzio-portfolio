import React from 'react'

const ProjectsSubRight = (props) => {
    return (

        <div className=' mx-10 '>
            <h1 className='text-3xl font-bold py-4 '>{props.title}</h1>
            <h3 className='text-[17px] font-medium text-gray-600 '>{props.description}</h3>
        </div>

    )
}

export default ProjectsSubRight