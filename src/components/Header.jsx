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
    }, []);
    return (
        <div>
            <div className='container xl:max-w-[1320px] px-3 md:pt-10 pt-6'>
                <nav className='border border-solid rounded-9xl sm:py-4 py-3 px-2.5 flex items-center justify-between bg-black_light'>
                    <a href={'/'}>
                        <Logo />
                    </a>
                    <ul className={`${open ? "right-0" : "-right-full"} flex max-lg:fixed max-lg:top-0 max-lg:bg-black md:bg-full bg-cover max-lg:h-full max-lg:w-full max-lg:z-30 max-lg:duration-300 max-lg:flex-col gap-7 items-center justify-center`}>
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
                    <div className='hidden items-center justify-center gap-11 lg:flex'>
                        <a href='#login' className='text-white text-xl leading-6'>Log in</a>
                        <CommonBtn name="Sing up" />
                    </div>
                    <div className='relative z-50 lg:hidden block'>
                        <Hamburger toggled={open} toggle={setOpen} size={25} color='#fff' />
                    </div>
                </nav>
                <div className=''>
                    <h1 className='font-bold text-2xxl text-white leading-[65px] text-center'>Unleash <span className=''>Creativity</span>,
                        <span className='md:block'>Effortlessly</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Header

// border: 1px solid;

// border - image - source: linear-gradient(266.68deg, rgba(251, 240, 240, 0.18) 23.99 %, rgba(255, 255, 255, 0.04) 43.22 %),
//     linear - gradient(91.18deg, rgba(251, 240, 240, 0.18) 8.62 %, rgba(255, 255, 255, 0.04) 38.8 %);

