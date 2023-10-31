import Image from "next/image"
import { Button } from "../ui/button"
import { AiOutlineShoppingCart } from "react-icons/ai"
import productOne from "../../public/images/product-one.jpeg"

type Props = {}

const Product = (props: Props) => {
    return (
        <div className="relative flex flex-col gap-y-4 text-base">
            <span className="absolute top-4 left-4 bg-blue-700 text-white px-4 py-1 rounded-xl text-xs">
                39%
            </span>
            <Image src={productOne} alt="product image" className="aspect-square object-cover object-center rounded-lg" />
            <div className="flex justify-between items-start">
                <div>
                    <h4 className="font-bold block mb-1">Airpods Handsfree</h4>
                    <p className="inline-block line-through">$49.00</p><p className="inline-block ml-2">$49.00</p>
                </div>
                <Button className="rounded-xl text-base bg-slate-200 text-blue-700 dark:text-blue-700 dark:bg-slate-800/50" size={'sm'} variant={'secondary'}>
                    <AiOutlineShoppingCart />
                </Button>
            </div>
        </div>
    )
}

export default Product