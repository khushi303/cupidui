import React from 'react'
import ServiceCard from './ServiceCard'
import { serviceCardItems } from './common/MapData'

const Services = () => {
    return (
        <div id="Services" className='bg-bgservice bg-no-repeat bg-cover bg-center lg:py-24 md:py-12 py-10 relative'>
            <div className='container max-w-[1320px] px-3 mx-auto lg:py-1 relative z-10'>
                <h3 className='sm:text-6xl text-4xl font-bold sm:leading-[56px] leading-9 tracking-[-1.2px] text-white text-center'>Our Services</h3>
                <p className='sm:text-xxl text-lg font-medium sm:leading-[30px] left-5 tracking-[-0.3px] text-center text-lightgray lg:mt-5 mt-4'>Tweak anything and everything to ensure fits <span className='md:block'>your business, not the other way around.</span></p>
                <div className='flex flex-row flex-wrap justify-center lg:gap-6  mt-1 -mx-3 sm:pt-5 lg:pt-12'>
                    {serviceCardItems.map((p) => <ServiceCard key={p.id} svg={p.svges} head={p.heading} para={p.paragraph} width={p.width} />)}
                </div>
            </div>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-bgservicegradient'></div>
            <div className='bg-bgservicegradient2 top-0 right-0 bottom-0 absolute left-0'></div>
        </div>
    )
}

export default Services;