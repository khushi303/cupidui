import React from 'react'
import { accordionData } from './common/MapData'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import { useState } from 'react'
import { Arrow } from './common/Icons';

const Faq = () => {
    const [open, setOpen] = useState();
    const toggleAccordion = (index) => {
        setOpen(open === index ? true : index);
    };
    return (
        <>
            <div id='faqs' className='lg:mt-72 lg:mb-52 md:my-24 my-10 lg:pt-1'>
                <div className='container px-5 sm:max-w-[700px] mx-auto'>
                    <h3 className='sm:text-6xl text-4xl font-bold sm:leading-[48px] leading-9 tracking-[-1.2px] text-white'>FAQs</h3>
                    <p className='sm:text-xxl text-lg font-medium sm:leading-[28px] left-5 tracking-[-0.3px] text-lightgray lg:mt-5 mt-4'>Answers to the most frequently asked questions.</p>
                    <div className='pt-11'>
                        {accordionData.map((item, index) => (
                            <Accordion key={index} onClick={() => toggleAccordion(index)} className={`cursor-pointer border-b border-white border-opacity-10 mt-5 sm:mt-6 md:mt-8 ${item.id === 6 ? "border-0" : ""}`} open={open === index} icon={<Arrow id={index} open={open} />}>
                                <AccordionHeader className={`font-semibold text-white text-2sm md:text-base text-start w-full justify-between gap-3 border-0  mb-0.5 pt-0 duration-500 leading-6 pb-8 focus-visible:outline-none ${open === index ? "" : ""}`}>{item.title}
                                </AccordionHeader>
                                <AccordionBody className="py-2 !pt-0  pr-8 text-sm font-normal text-white opacity-70 md:text-sm sm:py-3"> {item.description}
                                </AccordionBody>
                            </Accordion>
                        ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq