// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperType } from 'swiper/types'
import { useRef, LegacyRef, MutableRefObject, useEffect, useState, useMemo } from 'react'
import { EffectFade, Autoplay, Controller } from 'swiper/modules';

import swiperImageOne from '../../../public/images/swiper-image-one.jpeg'
import swiperImageTwo from '../../../public/images/swiper-image-two.jpeg'
import swiperImageThree from '../../../public/images/swiper-image-three.jpeg'
import swiperImageFour from '../../../public/images/swiper-image-four.jpeg'
import swiperImageFive from '../../../public/images/swiper-image-five.jpeg'
import swiperImageSix from '../../../public/images/swiper-image-six.jpeg'
import author from '../../../public/images/author.png'

// // Import Swiper styles
import 'swiper/swiper-bundle.css'

import Image from 'next/image';
// import CardsController from './CardsControllerSwiper';

type Props = {}

const SwiperCards = (props: Props) => {

    const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null)
    const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null)
    const [width, setWidth] = useState<number>(800)

    useEffect(() => {

        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })

        return () => {
            window.removeEventListener("resize", () => { })
        }
    }, [width])

    const getDirection = () => {
        return width <= 768 ? "horizontal" : "vertical"
    }

    return (
        <div className='relative w-full h-full'>
            <Swiper
                modules={[EffectFade, Autoplay, Controller]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                loop
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => { }}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className='w-full h-full'
                effect='fade'
            >
                <SwiperSlide className='relative w-full group dark:text-white text-white'>
                    <div className='z-10 absolute inset-0 bg-gradient-to-t from-black/70 to-transparent bg-blend-overlay rounded-xl'></div>
                    <div className='relative rounded-xl overflow-hidden w-full h-full'>
                        <Image src={swiperImageOne} alt='swiper image one' fill className='object-cover object-center rounded-xl group-hover:scale-110 transition duration-500' priority />
                    </div>
                    <div className='z-20 absolute rounded-xl top-0 left-0 pt-12 px-8 flex flex-col gap-y-6 md:w-3/4 w-full transition duration-500 group-hover:-translate-y-3'>
                        <span className='uppercase text-xs font-semibold'>gadget</span>
                        <h2 className='text-3xl md:text-4xl font-bold leading-normal md:leading-normal'>
                            <span className='bg-gradient-to-r from-white 
                to-white bg-[length:0px_1px]
                hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 cursor-pointer'>
                                Will Humans Be Able to Live in Mars in the Future?
                            </span>
                        </h2>
                        <div className='flex gap-x-2 items-center'>
                            <Image src={author} alt='author' className='rounded-full' />
                            <div className='uppercase font-medium text-xs'>
                                <p>john doe</p>
                                <p>1 month ago</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative w-full group dark:text-white text-white'>
                    <div className='z-10 absolute inset-0 bg-gradient-to-t from-black/70 to-transparent bg-blend-overlay rounded-xl'></div>
                    <div className='relative rounded-xl overflow-hidden w-full h-full'>
                        <Image src={swiperImageTwo} alt='swiper image two' fill className='object-cover object-center rounded-xl group-hover:scale-110 transition duration-500' priority />
                    </div>
                    <div className='z-20 absolute rounded-xl top-0 left-0 pt-12 px-8 flex flex-col gap-y-6 md:w-3/4 w-full transition duration-500 group-hover:-translate-y-3'>
                        <span className='uppercase text-xs font-semibold'>gadget</span>
                        <h2 className='text-3xl md:text-4xl font-bold leading-normal md:leading-normal'>
                            <span className='bg-gradient-to-r from-white 
                to-white bg-[length:0px_1px]
                hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 cursor-pointer'>
                                Surprising Benefits of Honeydew Melon
                            </span>
                        </h2>
                        <div className='flex gap-x-2 items-center'>
                            <Image src={author} alt='author' className='rounded-full' />
                            <div className='uppercase font-medium text-xs'>
                                <p>john doe</p>
                                <p>1 month ago</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative w-full group dark:text-white text-white'>
                    <div className='z-10 absolute inset-0 bg-gradient-to-t from-black/70 to-transparent bg-blend-overlay rounded-xl'></div>
                    <div className='relative rounded-xl overflow-hidden w-full h-full'>
                        <Image src={swiperImageThree} alt='swiper image three' fill className='object-cover object-center rounded-xl group-hover:scale-110 transition duration-500' priority />
                    </div>
                    <div className='z-20 absolute rounded-xl top-0 left-0 pt-12 px-8 flex flex-col gap-y-6 md:w-3/4 w-full transition duration-500 group-hover:-translate-y-3'>
                        <span className='uppercase text-xs font-semibold'>gadget</span>
                        <h2 className='text-3xl md:text-4xl font-bold leading-normal md:leading-normal'>
                            <span className='bg-gradient-to-r from-white 
                to-white bg-[length:0px_1px]
                hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 cursor-pointer'>
                                Spicy Crispy Chicken Burger Recipe
                            </span>
                        </h2>
                        <div className='flex gap-x-2 items-center'>
                            <Image src={author} alt='author' className='rounded-full' />
                            <div className='uppercase font-medium text-xs'>
                                <p>john doe</p>
                                <p>1 month ago</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative w-full group dark:text-white text-white'>
                    <div className='z-10 absolute inset-0 bg-gradient-to-t from-black/70 to-transparent bg-blend-overlay rounded-xl'></div>
                    <div className='relative rounded-xl overflow-hidden w-full h-full'>
                        <Image src={swiperImageFour} alt='swiper image four' fill className='object-cover object-center rounded-xl group-hover:scale-110 transition duration-500' priority />
                    </div>
                    <div className='z-20 absolute rounded-xl top-0 left-0 pt-12 px-8 flex flex-col gap-y-6 md:w-3/4 w-full transition duration-500 group-hover:-translate-y-3'>
                        <span className='uppercase text-xs font-semibold'>gadget</span>
                        <h2 className='text-3xl md:text-4xl font-bold leading-normal md:leading-normal'>
                            <span className='bg-gradient-to-r from-white 
                to-white bg-[length:0px_1px]
                hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 cursor-pointer'>
                                Will Humans Be Able to Live in Mars in the Future?
                            </span>
                        </h2>
                        <div className='flex gap-x-2 items-center'>
                            <Image src={author} alt='author' className='rounded-full' />
                            <div className='uppercase font-medium text-xs'>
                                <p>john doe</p>
                                <p>1 month ago</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <div className='absolute w-40 z-50 inset-y-0 right-0 h-full grid content-center'>
                </div> absolute md:w-40 bg-slate-200 z-50 md:right-0 inset-x-0 md:inset-y-0 h-40 md:h-full grid content-center */}
            </Swiper>
            <section className='absolute w-full md:w-40 z-50 md:right-0 inset-x-0 md:inset-x-auto inset-y-auto md:inset-y-0 bottom-0 md:bottom-auto h-32 md:h-full grid content-center'>
                <Swiper
                    direction={getDirection()}
                    modules={[Autoplay, Controller]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={3}
                    onSlideChange={() => { }}
                    onSwiper={setSecondSwiper}
                    controller={{
                        control: firstSwiper
                    }}
                    onAutoplayTimeLeft={(s: SwiperType, time: number, progress: number) => {
                        // setProgress(progress)
                    }}
                    touchRatio={0.2}
                    slideToClickedSlide={true}
                    className='md:h-[282px] w-[282px] md:w-auto'
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
                </Swiper>
            </section>
        </div>
    )
}

// { controlledSwiper }: { controlledSwiper: SwiperType | null }

export default SwiperCards