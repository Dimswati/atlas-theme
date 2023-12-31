import Image from "next/image"
import blogImageOne from "../../../public/images/swiper-image-one.jpeg"
import authorOne from "../../../public/images/author.png"
import Link from "next/link"

type Props = {}

const BlogCardOne = (props: Props) => {
  return (
    <article className="mb-5">
      <div className="relative w-full rounded-xl aspect-[4/3] overflow-hidden mb-4">
        <Image src={blogImageOne} alt="blog image one" className="hover:scale-105 transition duration-500 w-full rounded-xl object-cover object-center" fill />
      </div>
      <Link href={'/category/gadget'} className="text-xs text-blue-700 mb-4 block uppercase">gadget</Link>
      <h3 className="text-xl font-bold leading-8 mb-4 block">
        <Link href={'/blog/food-article'} className="styled-heading">Mistakes You Might Be Making With Your Watch</Link>
      </h3>
      <p className="text-ellipsis line-clamp-2 text-[.8em] dark:text-neutral-400 text-neutral-600 mb-3 leading-[1.4rem]">Venus has a runaway greenhouse effect. I kind of want to know what happened there because were twirling</p>
      <div className="flex justify-between items-center text-[.7em]">
        <div className="flex items-center gap-x-2 uppercase">
          <Image src={authorOne} alt="author" className="w-8 h-8 object-cover object-center rounded-full inline-block" />
          <div className="inline-flex flex-col">
            <h6>john doe</h6>
            <p className="text-neutral-400">2 months ago</p>
          </div>
        </div>
        <Link href={'/category/gadget'} className="text-xs text-blue-700 block uppercase">keep reading</Link>
      </div>
    </article>
  )
}

export default BlogCardOne