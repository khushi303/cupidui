import React from 'react'
import { Hyper } from './common/Icons'
import { CrmContent } from './common/MapData'
import crmdashboardimg from '../assets/images/webp/crmdashboardimg.webp'
import cheifimg from '../assets/images/webp/cheifimg.webp'

const Crm = () => {
    return (
        <>
            <div id='Crm' className='container mx-auto px-3 max-w-[1320px] lg:pt-[93px] md:pt-14 py-10'>
                <h2 className='sm:text-9xl text-5xl text-white sm:leading-[56px] font-bold'>A CRM created
                    <span className='sm:block'>to be your own.</span></h2>
                <p className='text-xxl font-medium leading-[30px] tracking-[-0.3px] text-lightgray sm:mt-5 mt-4'>Tweak anything and everything to ensure fits <span className='md:block'>your business, not the other way around.</span></p>
                <div className='bg-darkblack lg:mt-[92px] md:mt-12 mt-8 border border-solid border-[#3C3C3C] lg:pl-10 lg:pt-9 lg:pr-[38px] rounded-[20px] px-5 pt-5'>
                    <div className='flex justify-between flex-wrap'>
                        {CrmContent.map((item, i) => {
                            return (
                                <div key={i} className={`${item.spacing} lg:w-4/12 md:w-6/12 xl:px-0 px-2`}>
                                    <div className='flex items-center gap-2.5'>
                                        <Hyper />
                                        <p className={`${item.textcolor} text-lg font-semibold leading-5`}>{item.title}</p></div>
                                    <p className={`text-base font-medium text-lightgray-100 leading-6 tracking-[-0.2px] mt-2.5 ${item.textcolor}`}>{item.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='lg:mt-16 md:mt-10 mt-7 lg:max-h-[400px] md:max-h-[300px] max-h-[200px] h-full overflow-scroll crmimg'>
                        <img src={crmdashboardimg} alt="crmdashboardimg" className='w-full' />
                    </div>
                </div>
                <div id='features' className='lg:mt-20 md:mt-12 mt-10 flex items-center justify-center sm:gap-6 gap-4 flex-col'>
                    <img src={cheifimg} alt="cheifimg" className='w-11 h-11 rounded-full object-cover' />
                    <p className='text-xxl leading-[30px] tracking-[-0.5px] text-center text-lightgray-200 max-w-[580px]'>“My team loves cupid reporting system because it’s so
                        dynamic. We can splice our data in so many different ways
                        and combinations.”</p>
                    <div className='pt-1'>
                        <p className='text-sm font-medium leading-5 tracking-[-0.1px] text-center text-lightgray'>Davio White </p>
                        <p className='text-sm font-medium leading-5 tracking-[-0.1px] text-center text-lightgray mt-1'>Chief of Staff, Pallet</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Crm