import React from 'react';
import video from '../../../assets/1700757012.mp4';

const TopSection = () => {
    return (
        <div className="relative">
            <div className="overlay absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="xl:h-[740px] lg:h-[600px] md:h-[600px] sm:h-[430px] h-[240px] flex items-center justify-center">
                <video className="w-full h-full object-cover" loop muted autoPlay controls={false}>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default TopSection