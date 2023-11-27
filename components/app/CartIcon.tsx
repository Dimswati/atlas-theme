"use client"

import { Button } from '../ui/button'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import useCart from '@/lib/hooks/useCart'
import { useAppSelector } from '@/redux/hooks'
import { useCartProducts } from '@/redux/feature/cart/cartSlice'
import { cn } from '@/lib/utils'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { SheetTrigger } from '../ui/sheet'

const CartIcon = () => {

    const items = useAppSelector((state) => state.cart.itemsList)

    console.log()

    const { onOpen, isOpen, onClose } = useCart()

    function setCartState() {
        isOpen ? onClose() : onOpen()
    }

    return (
        <Button onClick={setCartState} className='relative rounded-full bg-blue-700 text-lg h-12 text-white hover:bg-blue-700 hover:text-white'>
            <span className={cn("text-sm absolute -top-1 -right-1 bg-yellow-500 rounded-full h-6 aspect-square grid content-center", items.length < 1 && "hidden")}>{items.length}</span>
            <AiOutlineShoppingCart />
        </Button>
    )
}

export default CartIcon