import React from 'react'
import { Logo } from './common/Icons'
import { NavData } from './common/MapData'
import { useState, useEffect } from 'react'
import CommonBtn from './common/CommonBtn'
import Hamburger from 'hamburger-react'

const Header = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open === true) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    });
    return (
        <>
            <div className='container xl:max-w-[1320px] px-3 md:pt-10 pt-6 mx-auto'>
                <nav className='rounded-9xl sm:py-2.5 py-3 px-2.5 flex items-center justify-between bg-black_light border_gradient relative after:bg-black_light after:backdrop-blur-xl after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-9xl after:absolute after:z-10'>
                    <a href={'#'} className='relative z-20'>
                        <Logo />
                    </a>
                    <ul className={`${open ? "right-0" : "-right-full"} flex max-lg:fixed max-lg:top-0 max-lg:bg-black md:bg-full bg-cover max-lg:h-full max-lg:w-full z-30 max-lg:duration-300 max-lg:flex-col gap-7 items-center justify-center`}>
                        {NavData.map((item, index) => (
                            <li key={index}>
                                <a className="text-base font-normal tracking-wide text-white sm:text-lg md:text-xl navLinks transition-all duration-300 ease-linear after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-white after:w-0 after:left-[50%] after:h-[2px] after:rounded-[1px] after:bottom-[-4px] hover:after:w-full hover:after:left-0 relative" href={item.path} onClick={() => setOpen(false)}>{item.title}</a>
                            </li>
                        ))}
                        <li className='flex flex-col items-center justify-center gap-11 lg:hidden'>
                            <a href='#login' className='text-white text-xl leading-6'>Log in</a>
                            <CommonBtn name="Sing up" />
                        </li>
                    </ul>
                    <div className='hidden items-center justify-center gap-5 lg:flex relative z-20'>
                        <a href='#login' className='text-white text-xl leading-6 hover:text-transparent hover:bg-btngradient hover:bg-clip-text inline-block transition-all duration-300 ease-linear'>Log in</a>
                        <CommonBtn name="Sign up" />
                    </div>
                    <div className='relative z-50 lg:hidden block'>
                        <Hamburger toggled={open} toggle={setOpen} size={25} color='#fff' />
                    </div>
                </nav>
                <div id='home' className='sm:pt-16.5 pt-11 flex items-center flex-col justify-center relative z-10'>
                    <h1 className='font-bold sm:text-2xxl text-5xl leading-[46px] text-white sm:leading-[65px] text-center'>Unleash <span className='bg-clip-text text-transparent bg-btngradientfooter inline-block'>Creativity</span>,
                        <span className='md:block'>Effortlessly</span></h1>
                    <p className='font-normal text-xl leading-6 text-center text-white mt-2 mb-5'>Elevate your agency's output with state-of-the-art AI, engineered <span className='md:block'>to innovate at the speed of thought.</span></p>
                    <CommonBtn name="Try Now" />
                </div>
            </div>
        </>
    )
}

export default Header;