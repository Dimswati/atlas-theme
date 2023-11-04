import SideBar from '@/components/app/SideBar'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

import blogImage from '../../../public/images/swiper-image-four.jpeg'

type ContentLayoutProps = {
  children: React.ReactNode
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <main className='flex gap-x-8 gap-y-12 w-full md:flex-row flex-col'>
      {children}
      <SideBar>
        <h4 className='text-lg font-bold mb-4'>Tags</h4>
        <div className='flex flex-wrap gap-3 text-xs mb-10'>
          <Link href="/category/food" className={cn(buttonVariants({ variant: 'tag', size: 'xs'}), "hover:text-white hover:bg-blue-600")}>food</Link>
          <Link href="/category/style" className={cn(buttonVariants({ variant: 'tag', size: 'xs'}), "hover:text-white hover:bg-blue-600")}>style</Link>
          <Link href="/category/gadget" className={cn(buttonVariants({ variant: 'tag', size: 'xs'}), "hover:text-white hover:bg-blue-600")}>gadget</Link>
          <Link href="/category/food" className={cn(buttonVariants({ variant: 'tag', size: 'xs'}), "hover:text-white hover:bg-blue-600")}>living</Link>
        </div>
        <h4 className='text-lg font-bold mb-4'>Categories</h4>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex gap-x-2'>
            <Image src={blogImage} alt='blog image' className='h-12 w-12 aspect-square object-cover object-center rounded-full'/>
            <div className='flex flex-col gap-y-1 text-sm uppercase'>
              <Link href='/category/style' className='uppercase font-medium hover:text-blue-600 transition-colors duration-500'>style</Link>
              <span className='dark:text-neutral-400 text-neutral-600  text-[.85em]'>4 posts</span>
            </div>
          </div>
          <div className='flex gap-x-2'>
            <Image src={blogImage} alt='blog image' className='h-12 w-12 aspect-square object-cover object-center rounded-full'/>
            <div className='flex flex-col gap-y-1 text-sm uppercase'>
              <Link href='/category/style' className='uppercase font-medium hover:text-blue-600 transition-colors duration-500'>style</Link>
              <span className='dark:text-neutral-400 text-neutral-600  text-[.85em]'>4 posts</span>
            </div>
          </div>
          <div className='flex gap-x-2'>
            <Image src={blogImage} alt='blog image' className='h-12 w-12 aspect-square object-cover object-center rounded-full'/>
            <div className='flex flex-col gap-y-1 text-sm uppercase'>
              <Link href='/category/style' className='uppercase font-medium hover:text-blue-600 transition-colors duration-500'>style</Link>
              <span className='dark:text-neutral-400 text-neutral-600  text-[.85em]'>4 posts</span>
            </div>
          </div>
          <div className='flex gap-x-2'>
            <Image src={blogImage} alt='blog image' className='h-12 w-12 aspect-square object-cover object-center rounded-full'/>
            <div className='flex flex-col gap-y-1 text-sm uppercase'>
              <Link href='/category/style' className='uppercase font-medium hover:text-blue-600 transition-colors duration-500'>style</Link>
              <span className='dark:text-neutral-400 text-neutral-600  text-[.85em]'>4 posts</span>
            </div>
          </div>
        </div>
      </SideBar>
    </main>
  )
}

export default ContentLayout