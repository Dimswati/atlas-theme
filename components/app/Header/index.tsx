import Logo from './Logo'
import Link from 'next/link'
import { BiSearch, BiLogoFacebookCircle, BiLogoDiscordAlt } from 'react-icons/bi'

import MenuSvg from '@/components/icons/MenuSvg'

const Header = () => {

    return (
        <header className='flex justify-between md:justify-normal gap-x-6 items-center w-full min-h-[80px]'>
            <span className="icon-svg">
                <MenuSvg />
            </span>
            <Logo />
            <div className='text-sm font-medium md:flex gap-x-4 hidden ml-3'>
                <Link href='/contact'>Contact</Link>
                <Link href='/category'>Category</Link>
                <Link href='/shop'>Shop</Link>
            </div>
            <div className='flex gap-x-4 md:ml-auto'>
                <span className='text-sm hidden md:flex items-center gap-x-1 dark:text-white text-black hover:text-blue-600 '><BiLogoFacebookCircle />43k</span>
                <span className='text-sm hidden md:flex items-center gap-x-1 dark:text-white text-black hover:text-blue-600'><BiLogoDiscordAlt />23k</span>
                <span className='text-[18px] dark:text-white text-black hover:text-blue-600'><BiSearch /></span>
            </div>
        </header>
    )
}

export default Header