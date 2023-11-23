"use client"

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
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { humanReadableDateFormat } from '@/sanity/lib/utils';
// import CardsController from './CardsControllerSwiper';


const BannerSwiper = ({ posts }: { posts: Post[] }) => {

    // TODO: USE AXIOS AND API ENDPOINT TO FETCH DATA

    const [isClient, setIsClient] = useState(false)
    const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null)
    const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null)
    const [width, setWidth] = useState<number>(() => typeof window === "undefined" ? 768 : window.innerWidth)

    useEffect(() => {
        setIsClient(true)
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [width])

    const getDirection = () => {
        return width <= 768 ? "horizontal" : "vertical"
    }

    if (!isClient) {
        return null
    }

    return (
        <div className='relative w-full h-[450px]'>
            <Swiper
                modules={[EffectFade, Autoplay, Controller]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    waitForTransition: true
                }}
                loop
                speed={700}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => { }}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className='w-full h-full'
                effect='fade'
            >
                {posts.map(post => (
                    <SwiperSlide key={post._id} className='relative w-full group dark:text-white text-white'>
                        <div className='z-10 absolute inset-0 bg-gradient-to-t from-black/70 to-transparent bg-blend-overlay rounded-xl'></div>
                        <div className='relative rounded-xl overflow-hidden w-full h-full'>
                            <Image src={urlForImage(post.mainImage).url()} alt='swiper image one' fill className='object-cover object-center rounded-xl group-hover:scale-110 transition duration-500' priority />
                        </div>
                        <div className='z-20 absolute rounded-xl top-0 left-0 pt-12 px-8 flex flex-col gap-y-4 md:gap-y-6 md:w-3/4 w-full transition duration-500 group-hover:-translate-y-3'>
                            <span className='uppercase text-xs font-semibold'>{post.category.title}</span>
                            <h2 className='text-3xl md:text-4xl font-bold leading-normal md:leading-normal'>
                                <Link href={`/blog/${post.slug}`} className='bg-gradient-to-r from-white 
                to-white bg-[length:0px_1px]
                hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 cursor-pointer'>
                                    {post.title}
                                </Link>
                            </h2>
                            <div className='flex gap-x-2 items-center'>
                                <Image src={urlForImage(post.author.image).url()} alt='author' className='rounded-full w-8 h-8' width={30} height={30} />
                                <div className='uppercase font-medium text-xs'>
                                    <p>{post.author.name}</p>
                                    <p>{humanReadableDateFormat(post._updatedAt)}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
            <section className='absolute w-full md:w-32 z-20 md:right-0 inset-x-0 md:inset-x-auto inset-y-auto md:inset-y-0 bottom-0 md:bottom-auto h-28 md:h-full grid content-center pl-8 md:pl-0 md:border-l border-t md:border-t-0 border-slate-100/20 overflow-hidden '>
                <Swiper
                    direction={getDirection()}
                    modules={[Autoplay, Controller]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        waitForTransition: true
                    }}
                    loop={true}
                    speed={700}
                    spaceBetween={8}
                    slidesPerView={3}
                    // centeredSlides={true}
                    // onSlideChange={() => { }}
                    onSwiper={setSecondSwiper}
                    controller={{
                        control: firstSwiper
                    }}
                    onAutoplayTimeLeft={(s: SwiperType, time: number, progress: number) => {
                        // setProgress(progress)
                    }}
                    slideToClickedSlide={true}
                    className='md:h-[282px] w-[80vw] md:w-auto'
                >
                    {posts.map(post => (
                        <SwiperSlide key={post._id} className='swiper-controller'>
                            <div className="relative w-[72px] h-[72px]">
                                <Image src={urlForImage(post.mainImage).url()} alt='swiper one' fill className='object-cover object-center rounded-full border-[2px] border-neutral-300/30' />
                                <svg viewBox="0 0 72 72" className='controller'>
                                    <circle cx="36" cy="36" r="35"></circle>
                                </svg>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    )
}

export default BannerSwiper