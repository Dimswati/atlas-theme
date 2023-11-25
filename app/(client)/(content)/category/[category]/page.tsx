import BlogCardOne from "@/components/app/Blog/BlogCardOne"
import { postsByCategoryQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/sanityFetch"
import { SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"

type CategoryProps = {
    params: {
        category: string
    }
}

const Category = async({ params }: CategoryProps) => {

    const posts: Post[] = await sanityFetch({
        query: postsByCategoryQuery,
        params
    })

    if(posts.length < 1) {
        return notFound()
    }

    return (
        <section className="w-full md:basis-[70%] basis-full">
            <h2 className='font-bold text-lg mb-6'>{posts[0]?.category.title || 'title'}</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                {posts.map(post => (
                    <BlogCardOne key={post._id} post={post}/>
                ))}
            </div>
        </section>
    )
}

export default Category