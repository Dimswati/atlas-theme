import Image from "next/image"
import blogImageOne from "../../../public/images/swiper-image-one.jpeg"
import authorOne from "../../../public/images/author.png"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

import { humanReadableDateFormat } from "@/sanity/lib/utils"

const BlogCardOne = ({ post }: { post: Post }) => {

  const timeAgo = humanReadableDateFormat(post._updatedAt)

  return (
    <article className="mb-5">
      <div className="relative w-full rounded-xl aspect-[4/3] overflow-hidden mb-4">
        <Image src={urlForImage(post.mainImage).url()} alt="blog image one" className="hover:scale-105 transition duration-500 w-full rounded-xl object-cover object-center" fill />
      </div>
      <Link href={`/category/${post.category.slug}`} className="text-xs text-blue-700 mb-4 block uppercase">{post.category.title}</Link>
      <h3 className="text-xl font-bold leading-8 mb-4 block">
        <Link href={`/blog/${post.slug}`} className="styled-heading">{post.title}</Link>
      </h3>
      <p className="text-ellipsis line-clamp-2 text-[.8em] dark:text-neutral-400 text-neutral-600 mb-3 leading-[1.4rem]">Venus has a runaway greenhouse effect. I kind of want to know what happened there because were twirling</p>
      <div className="flex justify-between items-center text-[.7em]">
        <div className="flex items-center gap-x-2 uppercase">
          <Image src={urlForImage(post.author.image).url()} alt={post.author.image.alt || post.author.name} width={40} height={40} className="w-8 h-8 object-cover object-center rounded-full inline-block" />
          <div className="inline-flex flex-col">
            <h6>{post.author.name}</h6>
            <p className="text-neutral-400">{timeAgo}</p>
          </div>
        </div>
        <Link href={`/blog/${post.slug}`} className="text-xs text-blue-700 block uppercase">keep reading</Link>
      </div>
    </article>
  )
}

export default BlogCardOne