"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import useCart from "@/lib/hooks/useCart"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { urlForImage } from "@/sanity/lib/image"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import Image from "next/image"
import { formatAmount } from "@/lib/utils"
import { addProduct, removeProduct } from "@/redux/feature/cart/cartSlice"

export default function Cart() {

    // const pathname = usePathname()
    const dispatch = useAppDispatch()
    const items = useAppSelector((state) => state.cart.itemsList)
    const totalAmountPrice = useAppSelector((state) => state.cart.totalAmountPrice)

    console.log(items)

    const [isClient, setIsclient] = useState(false)

    const { isOpen, onClose, onOpen } = useCart()

    const handleChange = () => {
        if (isOpen) {
            onClose()
        } else {
            onOpen()
        }
    }

    useEffect(() => {
        setIsclient(true)
    }, [])

    if (!isClient) {
        return null
    }

    return (
        <Sheet open={isOpen} onOpenChange={handleChange}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Products To Purchase</SheetTitle>
                </SheetHeader>
                <section className='text-sm font-medium flex flex-col gap-y-10 h-[65vh] overflow-y-scroll no-scrollbar my-6'>
                    {items.length > 0 ? (
                        items.map(product => (
                            <div>
                                <div key={product._id} className="flex gap-x-6 items-start mb-5">
                                    <div className="relative w-20 aspect-square rounded-xl overflow-hidden">
                                        <Image src={urlForImage(product.productImage).url()} alt="product image" className="object-cover object-center rounded-xl hover:scale-110 transition duration-500" fill />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-3">
                                            <Link href='/product/airpods-handsfree' className="text-lg">{product.title}</Link>
                                        </h3>
                                        <div className='flex gap-x-4 items-center'>
                                            <button onClick={() => dispatch(removeProduct(product))} className="border dark:border-neutral-800 rounded-full p-3">
                                                <AiOutlineMinus />
                                            </button>
                                            <span className="text-lg font-medium">{product.quantity}</span>
                                            <button onClick={() => dispatch(addProduct(product))} className="border dark:border-neutral-800 rounded-full p-3">
                                                <AiOutlinePlus />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-base font-medium">{formatAmount(product.totalPrice)}</span>
                            </div>
                        ))
                    ) : (
                        <div>
                            The items you want to Purchase will appear here
                        </div>
                    )}
                </section>
                <SheetFooter>
                    <div className="flex justify-between items-center pt-2 border-t border-neutral-300 dark:border-neutral-700 w-full">
                        <h2 className="text-lg font-medium">Total:</h2>
                        <span className="text-xl font-medium">{formatAmount(totalAmountPrice)}</span>
                    </div>
                    <SheetClose asChild>
                        <Button className="w-full my-8 bg-green-600 hover:bg-green-700 dark:text-white">
                            Purchase via M-PESA
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
