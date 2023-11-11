"use client"

import { Button } from '../ui/button'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import useCart from '@/lib/hooks/useCart'

type Props = {}

const CartIcon = (props: Props) => {

    const { onOpen }= useCart()

    return (
        <Button onClick={() => onOpen()}>
            <AiOutlineShoppingCart />
        </Button>
    )
}

export default CartIcon