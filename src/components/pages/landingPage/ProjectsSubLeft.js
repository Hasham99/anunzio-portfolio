import React from 'react'

const ProjectsSubLeft = (props) => {
    return (
        <div className='pt-5 pb-5  '>
            <a href={props.link} target="_blank">

                <img src={props.laptopImage} alt="" srcset="" />
            </a>

        </div>
    )
}

export default ProjectsSubLeft