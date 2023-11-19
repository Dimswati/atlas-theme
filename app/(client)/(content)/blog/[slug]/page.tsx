import BreadCrump from '@/components/app/BreadCrump'
import Image from 'next/image'
import blogImage from '../../../../../public/images/swiper-image-four.jpeg'

type Props = {}

const SingleBlogPage = (props: Props) => {
    return (
        <section className='md:basis-[70%]'>
            <BreadCrump category='food' />
            <Image src={blogImage} alt='blog image' className='object-cover object-center rounded-xl w-full aspect-[4/3] md:aspect-video' />
        </section>
    )
}

export default SingleBlogPage