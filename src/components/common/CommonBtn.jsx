import React from 'react'

const CommonBtn = (props) => {
    return (
        <>
            <button className={`py-2.5 sm:py-3.5 px-[25px] rounded-full text-white hover:shadow-gradientRed transition-all duration-300 ease-linear bg-btngradient font-medium text-xl leading-6 flex ${props.className}`}>{props.name}</button>
        </>
    )
}

export default CommonBtn