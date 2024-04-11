function ServiceCard(props) {
    const { width } = props;
    return (
        <div className={`pt-4 px-2 lg:pt-0 lg:px-0 ${width}`}>
            <div className='px-7 md:h-[259px] md:py-10 py-5 h-full rounded-2xl shadow-[0px_0px_0px_1px_#F4F4F51A] bg-lightgray-500 group relative overflow-hidden z-10 hover:bg-cardgradient transition-all duration-300 ease-linear'>
                {props.svg}
                <p className='text-lg font-semibold leading-[18px] text-lightgray-300 mt-4 relative z-10'>{props.head}</p>
                <p className='leading-[31px] text-sm font-normal group-hover:!text-white text-lightgray-400 pt-2 md:pt-4 md:max-w-[425px] midtighter transition-all duration-300 ease-linear relative z-10'>{props.para}</p>
                <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 bg-cardgradient duration-300 transition-all ease-linear"></div>
            </div>
        </div >
    )
}

export default ServiceCard;