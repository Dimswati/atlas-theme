import blogImageOne from "../../public/images/swiper-image-one.jpeg"
import blogImageTwo from "../../public/images/swiper-image-two.jpeg"
import blogImageThree from "../../public/images/swiper-image-three.jpeg"
import blogImageFour from "../../public/images/swiper-image-four.jpeg"

import BlogCardTwo from "./Blog/BlogCardTwo"

type SideBarProps = {
    children?: React.ReactNode
}

const SideBar = ({ children }: SideBarProps) => {
    return (
        <aside className='md:basis-[30%] basis-full'>
            <h2 className='text-lg font-bold mb-4'>Latest</h2>
            <div className='flex flex-col gap-y-5 mb-10'>
                <BlogCardTwo imageUrl={blogImageOne} title="Will Humans Be Able to Live in Mars in the Future?"/>
                <BlogCardTwo imageUrl={blogImageTwo} title="Will Humans Be Able to Live in Mars in the Future?"/>
                <BlogCardTwo imageUrl={blogImageThree} title="Will Humans Be Able to Live in Mars in the Future?"/>
                <BlogCardTwo imageUrl={blogImageFour} title="Will Humans Be Able to Live in Mars in the Future?"/>
            </div>
            {children}
        </aside>
    )
}

export default SideBar