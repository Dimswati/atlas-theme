import { urlForImage } from "@/sanity/lib/image"
import { latestPostsQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/sanityFetch"
import { humanReadableDateFormat } from "@/sanity/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaSquareInstagram, FaXTwitter, FaLinkedinIn, FaTwitch } from "react-icons/fa6"

type Props = {}

const Footer = async (props: Props) => {

  const posts = await sanityFetch<Post[]>({
    query: latestPostsQuery
  })

  return (
    <footer className='mt-6 dark:bg-blue-900/20 bg-slate-200/30 px-5 xl:px-0 py-6'>
      <div className="lg:max-w-[1070px] mx-auto">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6 mb-7'>
          <section>
            <h2 className='text-lg font-bold mb-4'>Daily</h2>
            <div className="flex flex-col gap-y-7">
              {posts.slice(0, 2).map(post => (
                <div key={post._id} className="flex gap-x-4 items-start text-[.8em]">
                  <div className="relative min-w-[72px] min-h-[72px] rounded-full overflow-hidden">
                    <Image src={urlForImage(post.mainImage).url()} alt="blog image" fill className="object-cover object-center rounded-xl hover:scale-110 transition duration-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">
                      <Link href={`/blog/${post.slug}`} className="styled-heading">{post.title}</Link>
                    </h3>
                    <span className="block uppercase text-neutral-400 text-[.9em]">{humanReadableDateFormat(post._updatedAt)}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className='text-lg font-bold mb-4'>Weekly</h2>
            <div className="flex flex-col gap-y-7">
              {posts.slice(2, 4).map(post => (
                <div key={post._id} className="flex gap-x-4 items-start text-[.8em]">
                  <div className="relative min-w-[72px] min-h-[72px] rounded-full overflow-hidden">
                    <Image src={urlForImage(post.mainImage).url()} alt="blog image" fill className="object-cover object-center rounded-xl hover:scale-110 transition duration-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">
                      <Link href={`/blog/${post.slug}`} className="styled-heading">{post.title}</Link>
                    </h3>
                    <span className="block uppercase text-neutral-400 text-[.9em]">{humanReadableDateFormat(post._updatedAt)}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className='text-lg font-bold mb-6'>Subscribe Us</h2>
            <p className="text-sm">Get the latest creative news from Atlas magazine</p>
          </section>
        </div>
        <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start gap-y-4">
          <h6 className="text-[.85em]">Copyright © 2023 Atlas Two | Powered by WordPress.</h6>
          <div className="flex gap-x-2">
            <FaFacebook />
            <FaXTwitter />
            <FaSquareInstagram />
            <FaLinkedinIn />
            <FaTwitch />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer