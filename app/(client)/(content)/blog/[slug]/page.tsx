import Image from 'next/image'
import { sanityFetch } from '@/sanity/lib/sanityFetch'
import { singlePostQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import { BsDot } from 'react-icons/bs'
import { humanReadableDateFormat } from '@/sanity/lib/utils'

type Props = {}

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {

    const post: Post = await sanityFetch({
        query: singlePostQuery,
        params
    })

    return (
        <section className='md:basis-[70%]'>
            <div className="text-[.7em] text-neutral-400 flex flex-col gap-y-4 items-start mb-8">
                <div className=' flex gap-x-2'>
                    <Link href='/' className="uppercase">home</Link>
                    &gt;
                    <Link href={`/category/${post.category.slug}`} className="text-blue-700 uppercase">{post.category.title}</Link>
                </div>
                <h2 className='text-3xl font-bold text-black dark:text-white leading-relaxed'>{post.title}</h2>
                <div className='uppercase flex gap-x-[1px] items-center flex-wrap gap-y-1'>
                    <div>
                        <Image src={urlForImage(post.author.image).url()} alt='author one' className='w-5 h-5 aspect-square rounded-full inline-block mr-1' width={24} height={24}/>
                        <span>{post.author.name}</span>
                    </div>
                    <BsDot />
                    <div>
                        <span>{humanReadableDateFormat(post._updatedAt)}</span>
                    </div>
                    <BsDot />
                    <div>
                        <span>50 views</span>
                    </div>
                    <BsDot />
                    <div>
                        <span>0 comments</span>
                    </div>
                </div>
            </div>
            <Image src={urlForImage(post.mainImage).url()} alt='blog image' className='object-cover object-center rounded-xl w-full aspect-[4/3] md:aspect-video' width={500} height={500} />
        </section>
    )
}

export default SingleBlogPage