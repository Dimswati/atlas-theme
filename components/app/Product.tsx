"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { urlForImage } from "@/sanity/lib/image"

import { useAppDispatch } from "@/redux/hooks"
import { addProduct } from "@/redux/feature/cart/cartSlice"
import { useDispatch } from "react-redux"
// import { AppDispatch } from "@/redux/store"

const Product = ({ product }: { product: Product }) => {

    const dispatch = useAppDispatch()

    const addProductToCart = () => {
        dispatch(addProduct(product))
    }

    return (
        <div className="relative flex flex-col gap-y-4 text-base">
            <span className="absolute top-4 left-4 bg-blue-700 text-white px-4 py-1 rounded-xl text-xs">
                39%
            </span>
            <Link href={`/product/${product.slug}`}>
                <Image src={urlForImage(product.productImage).url()} alt="product image" className="w-full aspect-square object-cover object-center rounded-lg" width={300} height={300} />
            </Link>
            <div className="flex justify-between items-start">
                <div>
                    <h4 className="font-bold block mb-1">{product.title}</h4>
                    <p className="inline-block line-through">$49.00</p><p className="inline-block ml-2">$49.00</p>
                </div>
                <Button className="rounded-xl text-base bg-slate-200 text-blue-700 dark:text-blue-700 dark:bg-slate-800/50" size={'sm'} variant={'secondary'} onClick={addProductToCart}>
                    <AiOutlineShoppingCart />
                </Button>
            </div>
        </div>
    )
}

export default Product