"use client"

import Image from "next/image"
import productImage from "../../public/images/product-one.jpeg"
import Link from "next/link"
import { Button } from "../ui/button"

import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import useMenu from "@/lib/hooks/useMenu"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import useCart from "@/lib/hooks/useCart"

type MenuProps = {}

const Cart = (props: MenuProps) => {

    const pathname = usePathname()

    const [isClient, setIsclient] = useState(false)

    const { isOpen, onClose } = useCart()

    useEffect(() => {
        setIsclient(true)
    }, [])

    useEffect(() => {
        if (isOpen) {
            onClose()
        }

    }, [pathname])

    if (!isClient) {
        return null
    }

    return (
        <aside className={cn('h-screen fixed top-0 right-0 z-50 w-[320px] px-5 dark:bg-black bg-white transition duration-500', isOpen ? 'translate-x-0' : 'translate-x-[320px]')}>
            <div className="flex justify-between items-center my-8">
                <Button size={'default'} variant={'ghost'} onClick={() => onClose()} className="px-0 hover:bg-transparent">
                    <AiOutlineClose />
                </Button>
                <h2 className="text-xl">Cart</h2>
            </div>
            <section className='text-sm font-medium flex flex-col gap-y-10'>
                <div className="flex justify-between items-start">
                    <div className="relative w-20 aspect-square rounded-xl overflow-hidden">
                        <Image src={productImage} alt="blog image" fill className="object-cover object-center rounded-xl hover:scale-110 transition duration-500" />
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">
                            <Link href='/product/airpods-handsfree' className="text-base">Apple Watch series 6</Link>
                        </h3>
                        <div className="flex justify-between items-end">
                            <div className='h-11 px-4 flex items-center gap-x-2 border dark:border-neutral-800 text-[.7em] rounded-xl'>
                                <button onClick={() => { }}>
                                    <AiOutlineMinus />
                                </button>
                                <input type="text" name='count' className='p-0 ring-0 border-0 w-8 text-sm focus:outline-none focus:ring-0 focus:border-0 text-black dark:text-white text-center dark:bg-transparent' />
                                <button onClick={() => { }}>
                                    <AiOutlinePlus />
                                </button>
                            </div>
                            <span className="text-lg">$78</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-start">
                    <div className="relative w-20 aspect-square rounded-xl overflow-hidden">
                        <Image src={productImage} alt="blog image" fill className="object-cover object-center rounded-xl hover:scale-110 transition duration-500" />
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">
                            <Link href='/product/airpods-handsfree' className="text-base">Apple Watch series 6</Link>
                        </h3>
                        <div className="flex justify-between items-end">
                            <div className='h-11 px-4 flex items-center gap-x-2 border dark:border-neutral-800 text-[.7em] rounded-xl'>
                                <button onClick={() => { }}>
                                    <AiOutlineMinus />
                                </button>
                                <input type="text" name='count' className='p-0 ring-0 border-0 w-8 text-sm focus:outline-none focus:ring-0 focus:border-0 text-black dark:text-white text-center dark:bg-transparent' />
                                <button onClick={() => { }}>
                                    <AiOutlinePlus />
                                </button>
                            </div>
                            <span className="text-lg">$78</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-start">
                    <div className="relative w-20 aspect-square rounded-xl overflow-hidden">
                        <Image src={productImage} alt="blog image" fill className="object-cover object-center rounded-xl hover:scale-110 transition duration-500" />
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">
                            <Link href='/product/airpods-handsfree' className="text-base">Apple Watch series 6</Link>
                        </h3>
                        <div className="flex justify-between items-end">
                            <div className='h-11 px-4 flex items-center gap-x-2 border dark:border-neutral-800 text-[.7em] rounded-xl'>
                                <button onClick={() => { }}>
                                    <AiOutlineMinus />
                                </button>
                                <input type="text" name='count' className='p-0 ring-0 border-0 w-8 text-sm focus:outline-none focus:ring-0 focus:border-0 text-black dark:text-white text-center dark:bg-transparent' />
                                <button onClick={() => { }}>
                                    <AiOutlinePlus />
                                </button>
                            </div>
                            <span className="text-lg">$78</span>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
    )
}

export default Cart