import BreadCrump from '@/components/app/BreadCrump'
import SideBar from '@/components/app/Sidebar'
import Link from 'next/link'
import React from 'react'

type Props = {}

const SingleBlogPage = (props: Props) => {
    return (
        <main className='flex gap-x-8 gap-y-12 w-full md:flex-row flex-col'>
            <div className='w-full'>
                <BreadCrump category='food' />
                <h2 className='text-3xl font-bold leading-10'>Mistakes You Might Be Making With Your Watch</h2>
            </div>
            <SideBar>
                sidebar
            </SideBar>
        </main>
    )
}

export default SingleBlogPage