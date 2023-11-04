import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image"

type BlogCardTwoProps = {
    imageUrl: StaticImageData,
    title: string
}

const BlogCardTwo = ({ imageUrl, title }: BlogCardTwoProps) => {
    return (
        <div className="flex gap-x-4 items-start text-[.8em]">
            <div className="relative min-w-[72px] min-h-[72px] rounded-xl overflow-hidden">
                <Image src={imageUrl} alt="blog image" fill className="object-cover object-center rounded-xl hover:scale-110 transition duration-500" />
            </div>
            <div>
                <h3 className="font-bold mb-1">
                    <Link href='/contact' className="styled-heading">{title}</Link>
                </h3>
                <span className="text-xs block uppercase text-neutral-400 text-[.9em]">2 months ago</span>
            </div>
        </div>
    )
}

export default BlogCardTwo