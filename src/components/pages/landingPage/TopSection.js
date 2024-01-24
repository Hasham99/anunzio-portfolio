import React from 'react'
import video from '../../../assets/1700757012.mp4'

const TopSection = () => {

    return (

        <div className='xl:h-[860px]  lg:h-[600px] md:h-[600px] sm:h-[430px] h-[240px]  flex items-center justify-center'>
            <video className='w-full h-full object-cover ' loop muted autoPlay controls={false} src={video}></video>

        </div>
    )
}

export default TopSection