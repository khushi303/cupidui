import React from 'react'
import { accordionData } from './common/MapData'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import { useState } from 'react'
import { Arrow, ToggleBtn } from './common/Icons';

const Faq = () => {
    const [open, setOpen] = useState();
    const toggleAccordion = (index) => {
        setOpen(open === index ? true : index);
    };
    return (
        <>
            <div id='faqs' className='lg:mt-72 lg:mb-48 md:my-24 my-10 lg:pt-1'>
                <div className='container px-5 sm:max-w-[740px] mx-auto'>
                    <h3 className='sm:text-6xl text-4xl font-bold sm:leading-[48px] leading-9 tracking-[-1.2px] text-white'>FAQs</h3>
                    <p className='sm:text-xl text-lg font-medium sm:leading-[28px] left-5 tracking-[-0.3px] text-lightgray lg:mt-6 mt-4'>Answers to the most frequently asked questions.</p>
                    <div className='pt-11 flex w-full gap-8 flex-col'>
                        {accordionData.map((item, index) => (
                            <Accordion key={index} className={`cursor-pointer border-b border-white border-opacity-10 pb-4 ${item.id === 6 ? "border-0" : ""}`} open={open === index} icon={<Arrow id={index} open={open} />}>
                                <AccordionHeader onClick={() => toggleAccordion(index)} className={`font-semibold text-white text-2sm md:text-base text-start w-full justify-between gap-3 border-0  mb-0.5 pt-0 duration-500 accicon leading-6 pb-4 focus-visible:outline-none ${open === index ? "" : ""}`}>{item.title}
                                    <div className={`${open === index ? "rotate-180" : ""} transition-all duration-300 ease-linear`}><ToggleBtn /></div>
                                </AccordionHeader>
                                <AccordionBody className="py-2 !pt-0  pr-8 text-sm font-normal text-white opacity-70 md:text-sm sm:py-3"> {item.description}
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq