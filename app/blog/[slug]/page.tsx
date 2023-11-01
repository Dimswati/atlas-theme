import BreadCrump from '@/components/app/BreadCrump'
import SideBar from '@/components/app/SideBar'
import Image from 'next/image'
import authorOne from '../../../public/images/author.png'
import blogImage from '../../../public/images/swiper-image-four.jpeg'

type Props = {}

const SingleBlogPage = (props: Props) => {
    return (
        <main className='flex gap-x-8 gap-y-12 w-full md:flex-row flex-col'>
            <section className='w-full'>
                <BreadCrump category='food' />
                <Image src={blogImage} alt='blog image' className='object-cover object-center rounded-xl w-full lg:h-96 h-72' />
            </section>
            <SideBar>
                sidebar
            </SideBar>
        </main>
    )
}

export default SingleBlogPage