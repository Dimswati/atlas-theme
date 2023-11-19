"use client"

import Link from 'next/link'
import { BiSearch, BiLogoFacebookCircle, BiLogoDiscordAlt } from 'react-icons/bi'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

import Image from 'next/image'
import atlas from '../../public/images/atlas.png'
import atlasLight from '../../public/images/atlas-light.png'

import MenuSvg from '@/components/icons/MenuSvg'
import useMenu from '@/lib/hooks/useMenu'

const Header = ({ children }: { children: React.ReactNode }) => {

    const { onOpen } = useMenu()

    return (
        <header className='my-[15px] lg:max-w-[1070px] mx-auto px-5 xl:px-0'>
            <div className='flex justify-between md:justify-normal gap-x-6 items-center w-full min-h-[80px]'>
                <Button className="icon-svg hover:bg-transparent text-blue-600 px-0" variant={'ghost'} onClick={() => onOpen()}>
                    <MenuSvg />
                </Button>
                <Image src={atlas} alt='dark atlas logo' className='w-[80px] h-auto inline-block dark:hidden'/>
                <Image src={atlasLight} alt='light atlas logo' className='w-[80px] h-auto dark:inline-block hidden'/>
                <div className='text-sm font-medium md:flex gap-x-4 hidden ml-3'>
                    {children}
                    <Link href='/contact'>Contact</Link>
                    <Link href='/shop'>Shop</Link>
                </div>
                <div className='flex gap-x-4 md:ml-auto'>
                    <span className='text-sm hidden md:flex items-center gap-x-1 dark:text-white text-black hover:text-blue-600 '><BiLogoFacebookCircle />43k</span>
                    <span className='text-sm hidden md:flex items-center gap-x-1 dark:text-white text-black hover:text-blue-600'><BiLogoDiscordAlt />23k</span>
                    <span className='text-[18px] dark:text-white text-black hover:text-blue-600'><BiSearch /></span>
                </div>
            </div>
        </header>
    )
}

export default Header