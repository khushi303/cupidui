import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderData } from './common/MapData';

const TrustedSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        rtl: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='w-full mx-auto xl:max-w-[1240px] xl:px-5 lg:pt-12'>
                <div className='xl:p-16 pt-10 overflow-hidden'>
                    <h4 className='text-xl leading-[30px] text-center text-lightwhite mb-8'>Trusted by 4,000+ companies</h4>
                    <div>
                        <Slider {...settings}>
                            {SliderData.map((slides, i) => {
                                return (
                                    <div key={i} className='mx-3'>
                                        <a href={slides.link} target='blank' className='flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300 ease-linear'>
                                            {slides.imgsvg}
                                        </a>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrustedSlider;