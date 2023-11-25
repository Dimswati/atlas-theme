import blogImageOne from "../../public/images/swiper-image-one.jpeg"
import blogImageTwo from "../../public/images/swiper-image-two.jpeg"
import blogImageThree from "../../public/images/swiper-image-three.jpeg"
import blogImageFour from "../../public/images/swiper-image-four.jpeg"

import BlogCardTwo from "./Blog/BlogCardTwo"
import { sanityFetch } from "@/sanity/lib/sanityFetch"
import { latestPostsQuery } from "@/sanity/lib/queries"

type SideBarProps = {
    children?: React.ReactNode
}

const SideBar = async({ children }: SideBarProps) => {

    const latestPosts: Post[] = await sanityFetch({
        query: latestPostsQuery
    })

    return (
        <aside className='md:basis-[30%] basis-full'>
            <h2 className='text-lg font-bold mb-4'>Latest</h2>
            <div className='flex flex-col gap-y-5 mb-10'>
                {latestPosts.map(post => (
                    <BlogCardTwo key={post._id} post={post}/>
                ))}
            </div>
            {children}
        </aside>
    )
}

export default SideBar