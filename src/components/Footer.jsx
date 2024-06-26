import React from 'react'
import { FooterGradientMixup, Gradientline, Logo, Pattern } from './common/Icons'
import { footerlink, footerlinks } from './common/MapData'

const Footer = () => {
    return (
        <>
            <div id='footer' className='relative overflow-hidden xl:pb-0 pb-14'>
                <div className='container mx-auto xl:px-3 px-5 xl:max-w-[1320px] lg:pt-32 lg:pb-40 md:py-32 py-10 relative z-20'>
                    <h2 className='font-semibold sm:text-2xxl text-5xl leading-[56px] sm:leading-[72px] text-center text-white mb-6 relative z-20'>Be part of the future of <span className='md:block'>IdentityHub</span><div className='absolute -bottom-3.5 left-0 right-0 flex items-center justify-center'><Gradientline /></div></h2>
                    <p className='text-lightgray-600 font-normal text-xl leading-8 text-center relative z-20'>Unleash the power of AI within cupid. Upgrade your productivity with <span className='md:block'>cupid, the open AI chat app.</span></p>
                    <div className='flex items-center justify-center '>
                        <a href='tel:+1234567890' className='mt-8 px-5 py-2 bg-btngradientfooter rounded-xl hover:shadow-gradientRed transition-all duration-300 ease-linear text-base font-medium text-white text-center relative z-10'>Start free trail</a>
                    </div>
                    <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[-1]'><Pattern /></div>
                </div>
                <div className='lg:mt-20 md:mt-11 mt-5 lg:pt-2 container mx-auto px-3 max-w-[1320px] relative z-30'>
                    <div className='flex items-center lg:justify-between lg:flex-row flex-col border-b border-solid border-lightgray-700 lg:mt-10 lg:gap-0 gap-3 lg:pb-0 pb-5'>
                        <a href='#'>
                            <Logo />
                        </a>
                        <ul className='flex flex-wrap'>
                            {footerlink.map((e, index) => {
                                return (
                                    <li key={index} className='lg:px-12 lg:py-8 sm:px-5 py-2 px-2 leading-5'>
                                        <a href={e.link} className=' text-xs tracking-[3.5%] text-center leading-5 text-lightgray-600 uppercase hover:text-white transition-all duration-300 ease-linear'>{e.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flex items-center sm:justify-between sm:flex-row flex-col-reverse sm:gap-0 gap-4 justify-center sm:py-6 py-4'>
                        <p className='text-sm font-normal text-lightgray-600 leading-5'>©{(new Date().getFullYear())}. All rights reserved</p>
                        <div className='flex gap-8 items-center'>
                            {footerlinks.map((item, index) => {
                                return (
                                    <a key={index} href={item.link} target='blank' className='w-10 h-10 border-[2px] border-solid border-darkblue hover:bg-white transition-all duration-300 ease-linear group bg-darkblue rounded-full flex items-center justify-center'>
                                        {item.linksvg}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <span className="absolute lg:bottom-0 md:bottom-[-20%] md:left-0 right-0 bottom-[-40%] z-0"><FooterGradientMixup /></span>
            </div>
        </>
    )
}

export default Footer;
