import BlogCardOne from "@/components/app/Blog/BlogCardOne"

type CategoryProps = {
    params: {
        slug: string
    }
}

const Category = ({ params: { slug } }: CategoryProps) => {
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