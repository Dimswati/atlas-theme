import React from 'react'
import Image from 'next/image'
import authorOne from '../../public/images/author.png'
import Link from 'next/link'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='text-xs bg-slate-100 py-2 sm:inline-block px-3 rounded-lg mb-8 hidden'>
        <span className='uppercase inline-block text-blue-700'>style</span>
        <Image src={authorOne} alt='author one' className='w-6 h-6 rounded-full inline-block mx-2'/>
        <h3 className='inline-block font-semibold'>
            <Link href="/blog" className='styled-heading'>Winter Dressing Tips When Its Really Cold Out</Link>
        </h3>
    </div>
  )
}

export default Banner