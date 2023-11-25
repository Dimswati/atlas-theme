import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { humanReadableDateFormat } from "@/sanity/lib/utils"

const BlogCardTwo = ({ post }: { post: Post }) => {

    return (
        <div className="flex gap-x-4 items-start text-[.8em]">
            <div className="relative min-w-[72px] min-h-[72px] rounded-xl overflow-hidden">
                <Image src={urlForImage(post.mainImage).url()} alt="blog image" fill className="object-cover object-center rounded-xl hover:scale-110 transition duration-500" />
            </div>
            <div>
                <h3 className="font-bold mb-1">
                    <Link href={`/blog/${post.slug}`} className="styled-heading">{post.title}</Link>
                </h3>
                <span className="text-xs block uppercase text-neutral-400 text-[.9em]">{humanReadableDateFormat(post._updatedAt)}</span>
            </div>
        </div>
    )
}

export default BlogCardTwo