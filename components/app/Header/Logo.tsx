"use client"

import { useTheme } from 'next-themes'
import Image from 'next/image'
import atlas from '../../../public/images/atlas.png'
import atlasLight from '../../../public/images/atlas-light.png'
import { cn } from '@/lib/utils'

type Props = {
    className?: string
}

const Logo = ({ className }: Props) => {

    const { theme } = useTheme()

    if(theme === 'dark') {
        return (
            <Image src={atlas} alt='dark atlas logo' className={cn('w-[80px] h-auto inline-block', className)}/>
        )
    }

    return (
        <Image src={atlasLight} alt='light atlas logo' className={cn('w-[80px] h-auto inline-block', className)}/>
    )
}

export default Logo