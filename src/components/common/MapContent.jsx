import { Includedata, Enterpreneurdata, Business } from "./MapData"
import { RedStar, WhiteTick } from "./Icons"

export const IndividualData = () => {
    return (
        (<>
            <div className='flex flex-col gap-4'>
                {Includedata.map((line, index) => {
                    return (
                        <div key={index} className='flex gap-3 '>
                            <div>
                                <WhiteTick />
                            </div>
                            <p className='font-medium text-2sm text-lightgray-800 leading-2xl'>{line.description}</p>
                        </div>
                    )
                })}
            </div>
        </>)
    )
}
export const Entrepreneurcontent = () => {
    return (<>
        <div className='flex flex-col gap-4'>
            {Enterpreneurdata.map((line, index) => {
                return (
                    <div key={index} className='flex gap-3'>
                        <div>
                            <WhiteTick />
                        </div>
                        <p className='font-medium text-2sm text-lightgray-800 leading-2xl'>{line.description}</p>
                    </div>
                )
            })}
            <div className='flex gap-3'>
                <div>
                    <RedStar />
                </div>
                <p className='font-medium text-2sm text-lightgray-800 leading-2xl'>More Coming Soon</p>
            </div>
        </div>
    </>)
}

export const BusinessData = () => {
    return (
        <>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    {Business.map((line, index) => {
                        return (
                            <div key={index} className='flex gap-3 '>
                                <div>
                                    <WhiteTick />
                                </div>
                                <p className='font-medium text-2sm text-lightgray-800 leading-2xl'>{line.description}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='flex gap-3'>
                    <div>
                        <RedStar />
                    </div>
                    <p className='font-medium text-2sm text-lightgray-800 leading-2xl'>More Coming Soon</p>
                </div>
            </div>
        </>
    )
}

export const GradientLine = () => {
    return (
        <div className='bg-whitegradient w-full h-[1px] sm:my-12 my-8 relative z-[1]'>
        </div>
    )
}

export const GradientLineBtn = () => {
    return (
        <div className='relative flex items-center justify-center md:mt-8 md:mb-9 my-7 z-10'>
            <button className='text-2sm font-medium text-white leading-2xl text-center mx-auto py-1 px-3 bg-lightgray-700 backdrop-blur-2xl rounded-[10px] relative z-10 '>£408 billed annually</button>
            <div className='bg-whitegradient absolute w-full h-[1px] left-0 right-0 z-[1]'>
            </div>
        </div>
    )
}

export const DiscountBtn = () => {
    return (
        <button className='py-[4px] px-[8px] bg-light-red text-dark-black-300 font-semibold text-xs rounded-3xl' >-20%</button>
    )
}

export const Pricedata = [
    {
        id: 1,
        heading: "Indivisual",
        para: "Everything you need to supercharge your productivity.",
        includedata: (<IndividualData />),
        pricemonth: "£24",
        priceyear: "£240",
        billed: (<GradientLine />),
    },
    {
        id: 2,
        heading: "Entrepreneur",
        para: "Unlock a new level of your personal productivity.",
        includedata: (<Entrepreneurcontent />),
        pricemonth: "£34",
        priceyear: "£360",
        disbtn: (<DiscountBtn />),
        billed: (<GradientLineBtn />),

    },
    {
        id: 3,
        heading: "Business",
        para: "Supercharge your team and maximize productivity.",
        includedata: (<BusinessData />),
        pricemonth: "£120",
        priceyear: "£1200",
        user: "/ user",
        disbtn: (<DiscountBtn />),
        billed: (<GradientLineBtn />)
    }
]