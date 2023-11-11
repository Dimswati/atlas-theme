"use client"

import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Button } from '../ui/button'

type Props = {}

const AddToCart = (props: Props) => {

    const [count, setCount] = useState(1)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCount(Number(e.target.value))
    }

    function increment() {
        setCount((prev) => prev + 1)
    }

    function decrement() {
        setCount((prev) => {
            if(prev > 1) {
                return prev - 1
            }
            return 1
        })
    }

    return (
        <div className='flex gap-x-4'>
            <div className='h-11 px-4 flex items-center gap-x-2 border dark:border-neutral-800 text-[.7em] rounded-xl'>
                <button onClick={decrement}>
                    <AiOutlineMinus />
                </button>
                <input type="text" name='count' value={count} onChange={(e) => handleChange(e)} className='p-0 ring-0 border-0 w-8 text-sm focus:outline-none focus:ring-0 focus:border-0 text-black dark:text-white text-center'/>
                <button onClick={increment}>
                    <AiOutlinePlus />
                </button>
            </div>
            <Button className='bg-blue-700 text-white hover:bg-blue-700 hover:text-white h-11 rounded-xl'>
                Add to cart
            </Button>
        </div>
    )
}

export default AddToCart