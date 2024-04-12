import React, { useState } from 'react'
import { Pricedata } from './common/MapContent'
import { WhiteArrow } from './common/Icons'

const Priceing = () => {
    const [toggle, setToggle] = useState(1)
    return (
        <div id='Pricing' className='relative py-10 lg:pt-20 md:pb-0 md:pt-14 lg:mt-20'>
            <div className='container xl:max-w-[1209px] px-3 mx-auto lg:pt-3'>
                <h3 className='sm:text-6xl text-4xl font-bold sm:leading-[56px] leading-9 tracking-[-1.2px] text-white text-center'>Pricing</h3>
                <p className='sm:text-xxl text-lg font-medium sm:leading-[30px] left-5 tracking-[-0.3px] text-center text-lightgray lg:mt-5 mt-4'>Tweak anything and everything to ensure fits <span className='md:block'>your business, not the other way around.</span></p>
                <div className='bg-lightgray-700 rounded-[41px] p-1 max-w-[192px] mx-auto w-full flex justify-between md:mt-[44.5px] mt-6'>
                    <button onClick={() => setToggle(1)} className={`py-1 px-[18px] rounded-[48px] text-base transition-all duration-300 ease-linear font-normal ${toggle === 1 ? "bg-lightgray-700 text-white text_shadow" : "text-lightwhite-100"}`}>Yearly</button>
                    <button onClick={() => setToggle(2)} className={`py-1 px-[18px] rounded-[48px] text-base transition-all duration-300 ease-linear font-normal ${toggle === 2 ? "bg-lightgray-700 text-white text_shadow" : "text-lightwhite-100"}`}>Monthly</button>
                </div>
                <div className='flex items-center flex-wrap justify-center w-full md:mt-16 sm:mt-10 mt-6 min-h-[780px] h-full'>
                    {
                        Pricedata.map((item, index) => (
                            <div key={index} className='flex items-center justify-center w-full mt-8 lg:w-4/12 md:w-6/12 lg:mt-0 md:mt-10'>
                                <div className='max-w-[410px] relative z-10 transition-all duration-300 ease-linear cursor-pointer blur_box_border hover:scale-[1.06] hover:z-20 group lg:min-h-[723px] md:min-h-[774px] min-h-[667px] h-full'>
                                    <div className='sm:p-8 p-5 rounded-3xl flex justify-between flex-col lg:min-h-[723px] md:min-h-[774px] min-h-[667px] h-full transition-all duration-300 ease-linear'>
                                        <div className='transition-all duration-300 ease-linear '>
                                            <h3 className='inline-block text-lg font-medium text-white transition-all duration-500 ease-linear group-hover:text-4xl leading-[156%] group-hover:bg-clip-text group-hover:bg-textgradient group-hover:text-transparent'>{item.heading}</h3>
                                            <p className='my-6 text-base font-medium leading-[22px] text-lightgray-800'>{item.para}</p>
                                            <div className='flex items-center gap-2'>
                                                {toggle === 2 ? <h3 className='font-semibold text-white sm:text-7xl text-4xl lg:text-5xl leading-14'>{item.pricemonth}</h3> : ''}
                                                {toggle === 1 ? <h3 className='font-semibold text-white sm:text-7xl text-4xl lg:text-5xl leading-14'>{item.priceyear}</h3> : ''}
                                                <div className='flex flex-col h-full'>
                                                    {toggle === 2 ? <p className='font-medium text-2sm text-lightgray-800 leading-17'>/ month</p> : '    '}
                                                    {toggle === 1 ? <p className='font-medium text-2sm text-lightgray-800 leading-17'>/ year</p> : '    '}
                                                    <p className='font-medium text-2sm text-lightgray-800 leading-17'>{item.user}</p>
                                                </div>
                                                {item.disbtn}
                                            </div>
                                            {item.billed}
                                            <p className='mb-4 font-medium text-2sm text-lightgray-800 leading-17'>What’s included</p>
                                            {item.includedata}
                                        </div>
                                        <button className='py-2.5 px-3 border border-solid border-lightgray-900 after:bg-btngradient group-hover:border-none transition-all  bg-transparent duration-300 ease-linear text-white text-base font-medium text-nowrap rounded-xl w-full after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:transition-all after:duration-300 after:ease-linear after:rounded-xl after:opacity-0 group-hover:after:opacity-100 relative'><p className='text-white text-base font-medium text-nowrap relative z-10'>Select Plan</p></button>
                                    </div>
                                </div>
                            </div >
                        ))
                    }
                </div>
                <div className='flex items-center justify-center sm:mt-12 mt-10'>
                    <a href='#' className='bg-lightgray-700 inline-flex items-center justify-center sm:flex-row flex-col text-white sm:px-4 px-8 py-[9px] sm:rounded-2md rounded-3xl sm:gap-2 gap-1 group'><p className='font-medium text-2sm leading-17 opacity-60 tracking-tightest'>Want enterprise features?</p><p className='flex items-center gap-1 font-bold text-2sm tracking-tightest leading-17'>Tell us more <WhiteArrow /></p></a>
                </div>
            </div>
            <div className='bg-[#2980D6] lg:w-[778px] h-[778px] w-[400px] blur-[1000px] absolute top-[25%] left-[-50%] lg:z-20 z-[9]'></div>
        </div>
    )
}

export default Priceing