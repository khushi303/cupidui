import React from 'react'
import dashboardimg from '../assets/images/webp/dashboardimg.webp'

const DashBoard = () => {
    return (
        <>
            <div className='container xl:max-w-[1320px] px-3 mx-auto relative z-10 mt-12 lg:h-[345px] md:h-[225px] sm:h-[270px] h-[110px]'>
                <img src={dashboardimg} alt="dashboardimg" className='lg:w-[915px] lg:max-h-[687px] md:w-[745px] sm:w-[620px] w-[370px] mx-auto lg:translate-y-[-50%] md:translate-y-[-59%] sm:translate-y-[-42%] translate-y-[-68%] relative z-10 crmimgshadow' />
            </div>
        </>
    )
}

export default DashBoard;