"use client"

import { Button } from '../ui/button'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import useCart from '@/lib/hooks/useCart'

const CartIcon = () => {

    const { onOpen }= useCart()

    return (
        <Button onClick={() => onOpen()} className='relative rounded-full bg-blue-700 text-lg h-12 text-white hover:bg-blue-700 hover:text-white'>
            <span className='text-sm absolute -top-1 -right-1 bg-yellow-500 rounded-full h-6 aspect-square grid content-center'>10</span>
            <AiOutlineShoppingCart />
        </Button>
    )
}

export default CartIcon