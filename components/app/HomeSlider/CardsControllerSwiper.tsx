import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { type Swiper as SwiperType } from "swiper/types"
import { Autoplay } from "swiper/modules"
import Image from "next/image"

import swiperImageOne from '../../../public/images/swiper-image-one.jpeg'
import swiperImageTwo from '../../../public/images/swiper-image-two.jpeg'
import swiperImageThree from '../../../public/images/swiper-image-three.jpeg'
import swiperImageFour from '../../../public/images/swiper-image-four.jpeg'

const CardsController = () => {

    // const [ activeContoller, setActiveController ] = useState<SVGElement>()
    // const [activeSlide, setActiveSlide] = useState<number>(1)
    // const [progress, setProgress] = useState<number>(0)
    // const [activeSwiper, setActiveSwiper] = useState<SVGElement | null>()

    // const onAutoplayTimeLeft = (s: SwiperType, time: number, progress: number) => {
    //     progressCircle?.current?.style.setProperty('--progress', (1 - progress).toString());
    // }

    // useEffect(() => {
    //     const getController = () => {
    //         // const sliderControllers = Array.from(document.getElementsByClassName('swiper-controller'))

    //         const activeContoller = document.querySelector('.swiper-slide-active.swiper-controller') as HTMLDivElement

    //         const controller = activeContoller.querySelector('.controller') as SVGElement

    //         setActiveSwiper(controller)

    //     }

    //     getController()
    // }, [activeSlide])

    // useEffect(() => {
    //     // console.log(progress)
    //     // console.log(activeSwiper)
    //     if (activeSwiper) {
    //         activeSwiper.style.setProperty('--progress', (1 - progress).toString())
    //     }

    // }, [progress, activeSwiper])


    return (
        <Swiper
            direction={'vertical'}
            modules={[Autoplay]}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={()=>{}}
            onSwiper={(swiper) => {
                console.log(swiper)
            }}
            onAutoplayTimeLeft={(s: SwiperType, time: number, progress: number) => {
                // setProgress(progress)
            }}
            className='h-[282px]'
        >
            <SwiperSlide className='swiper-controller'>
                <div className="relative w-[72px] h-[72px]">
                    <Image src={swiperImageOne} alt='swiper one' fill className='object-cover object-center rounded-full border-[2px] border-neutral-300/30' />
                    <svg viewBox="0 0 72 72" className='controller'>
                        <circle cx="36" cy="36" r="35"></circle>
                    </svg>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-controller'>
                <div className="relative w-[72px] h-[72px]">
                    <Image src={swiperImageTwo} alt='swiper one' fill className='object-cover object-center rounded-full border-[2px] border-neutral-300/30' />
                    <svg viewBox="0 0 72 72" className='controller'>
                        <circle cx="36" cy="36" r="35"></circle>
                    </svg>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-controller'>
                <div className="relative w-[72px] h-[72px]">
                    <Image src={swiperImageThree} alt='swiper one' fill className='object-cover object-center rounded-full border-[2px] border-neutral-300/30' />
                    <svg viewBox="0 0 72 72" className='controller'>
                        <circle cx="36" cy="36" r="35"></circle>
                    </svg>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-controller'>
                <div className="relative w-[72px] h-[72px]">
                    <Image src={swiperImageFour} alt='swiper one' fill className='object-cover object-center rounded-full border-[2px] border-neutral-300/30' />
                    <svg viewBox="0 0 72 72" className='controller'>
                        <circle cx="36" cy="36" r="35"></circle>
                    </svg>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-controller'>
                <div className="relative w-[72px] h-[72px]">
                    <Image src={swiperImageFour} alt='swiper one' fill className='object-cover object-center rounded-full border-[2px] border-neutral-300/30' />
                    <svg viewBox="0 0 72 72" className='controller'>
                        <circle cx="36" cy="36" r="35"></circle>
                    </svg>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default CardsController