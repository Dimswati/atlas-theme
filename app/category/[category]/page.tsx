import BlogCardOne from "@/components/app/Blog/BlogCardOne"
import SideBar from "@/components/app/SideBar"

type CategoryProps = {
    params: {
        slug: string
    }
}

const Category = ({ params: { slug } }: CategoryProps) => {
    return (
        <main className="flex gap-x-8 gap-y-12 w-full md:flex-row flex-col">
            <section>
                <h2 className='font-bold text-lg mb-6'>Food</h2>
                <div>
                    <BlogCardOne />
                </div>
            </section>
            <SideBar>
                sidebar
            </SideBar>
        </main>
    )
}

export default Category