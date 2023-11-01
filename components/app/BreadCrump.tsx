import Link from "next/link"
import authorOne from "../../public/images/author.png"
import Image from "next/image"
import { BsDot } from "react-icons/bs"

type BreadCrumpProps = {
    category: string
}

const BreadCrump = ({ category }: BreadCrumpProps) => {
    return (
        <div className="text-[.7em] text-neutral-400 flex flex-col gap-y-4 items-start mb-8">
            <div className=' flex gap-x-2'>
                <Link href='/' className="uppercase">home</Link>
                &gt;
                <Link href={`/category/${category}`} className="text-blue-700 uppercase">{category}</Link>
            </div>
            <h2 className='text-3xl font-bold text-black dark:text-white leading-relaxed'>Mistakes You Might Be Making With Your Watch</h2>
            <div className='uppercase flex gap-x-[1px] items-center flex-wrap gap-y-1'>
                <div>
                    <Image src={authorOne} alt='author one' className='w-5 h-5 aspect-square rounded-full inline-block mr-1' />
                    <span>john doe</span>
                </div>
                <BsDot/>
                <div>
                    <span>2 months ago</span>
                </div>
                <BsDot/>
                <div>
                    <span>50 views</span>
                </div>
                <BsDot/>
                <div>
                    <span>0 comments</span>
                </div>
            </div>
        </div>
    )
}

export default BreadCrump