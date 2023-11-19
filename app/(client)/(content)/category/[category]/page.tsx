import BlogCardOne from "@/components/app/Blog/BlogCardOne"
import { postsByCategoryQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/sanityFetch"
import { SanityDocument } from "next-sanity"

type CategoryProps = {
    params: {
        category: string
    }
}

const Category = async({ params: { category } }: CategoryProps) => {

    const posts = await sanityFetch<SanityDocument>({
        query: postsByCategoryQuery,
        params: { "slug": category }
    })

    return (
        <section className="w-full md:basis-[70%] basis-full">
            <h2 className='font-bold text-lg mb-6'>Food</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <BlogCardOne />
                <BlogCardOne />
                <BlogCardOne />
                <BlogCardOne />
            </div>
        </section>
    )
}

export default Category