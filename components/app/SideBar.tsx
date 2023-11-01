import blogImageOne from "../../../public/images/swiper-image-one.jpeg"
import blogImageTwo from "../../../public/images/swiper-image-two.jpeg"
import blogImageThree from "../../../public/images/swiper-image-three.jpeg"
import blogImageFour from "../../../public/images/swiper-image-four.jpeg"

import Image from "next/image"
import Link from "next/link"

type SideBarProps = {
    children?: React.ReactNode
}

const SideBar = ({ children }: SideBarProps) => {
    return (
        <div className='basis-5/12'>
            <h2 className='text-lg font-bold mb-4'>Latest</h2>
            <div className='flex flex-col gap-y-5 text-[.8em]'>
                <div className="flex gap-x-4 items-start">
                    <div className="relative min-w-[72px] min-h-[72px] rounded-xl overflow-hidden">
                        <Image src={blogImageOne} alt="blog image" fill className="object-cover object-center rounded-xl hover:scale-110 transition duration-500" />
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">
                            <Link href='/contact' className="bg-gradient-to-r styled-heading">Will Humans Be Able to Live in Mars in the Future?</Link>
                        </h3>
                        <span className="text-xs block uppercase text-neutral-400">2 months ago</span>
                    </div>
                </div>
                <div className="flex gap-x-4 items-start">
                    <div className="relative min-w-[72px] min-h-[72px] rounded-xl overflow-hidden">
                        <Image src={blogImageTwo} alt="blog image" fill className="object-cover object-center rounded-xl hover:scale-110 transition duration-500" />
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">
                            <Link href='/contact' className="bg-gradient-to-r styled-heading">Will Humans Be Able to Live in Mars in the Future?</Link>
                        </h3>
                        <span className="text-xs block uppercase text-neutral-400">2 months ago</span>
                    </div>
                </div>
                <div className="flex gap-x-4 items-start">
                    <div className="relative min-w-[72px] min-h-[72px] rounded-xl overflow-hidden">
                        <Image src={blogImageTwo} alt="blog image" fill className="object-cover object-center rounded-xl hover:scale-110 transition duration-500" />
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">
                            <Link href='/contact' className="bg-gradient-to-r styled-heading">Will Humans Be Able to Live in Mars in the Future?</Link>
                        </h3>
                        <span className="text-xs block uppercase text-neutral-400">2 months ago</span>
                    </div>
                </div>
                <div className="flex gap-x-4 items-start">
                    <div className="relative min-w-[72px] min-h-[72px] rounded-xl overflow-hidden">
                        <Image src={blogImageFour} alt="blog image" fill className="object-cover object-center rounded-xl hover:scale-110 transition duration-500" />
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">
                            <Link href='/contact' className="bg-gradient-to-r styled-heading">Will Humans Be Able to Live in Mars in the Future?</Link>
                        </h3>
                        <span className="text-xs block uppercase text-neutral-400">2 months ago</span>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default SideBar