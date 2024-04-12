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
                breakpoint: 920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='w-full mx-auto max-w-[1240px] px-5 lg:pt-12'>
                <div className='xl:p-16 py-10'>
                    <h4 className='text-xl leading-[30px] text-center text-lightwhite mb-8'>Trusted by 4,000+ companies</h4>
                    <div>
                        <Slider {...settings} className='opacity-40'>
                            {SliderData.map((slides, i) => {
                                return (
                                    <div key={i} className='mx-3'>
                                        <a href={slides.link} target='blank' className='flex items-center justify-center'>
                                            <img src={slides.img} alt={slides.alt} className='h-[48px] max-w-[170px] w-full' />
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