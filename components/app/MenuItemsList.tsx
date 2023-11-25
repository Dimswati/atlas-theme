import { navbarCategoriesQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/sanityFetch"
import Link from "next/link"

type MenuItemsListType = Pick<PostCategory, '_id' | 'title' | 'slug'>

const MenuItemsList = async () => {

    const menuItems: MenuItemsListType[] = await sanityFetch({
        query: navbarCategoriesQuery
    })

    return (
        <>
            {menuItems.map(({ _id, title, slug }) => (
                <Link href={`/category/${slug}`} key={_id} className="hover:text-blue-600 transition-colors duration-500">{title}</Link>
            ))}
        </>
    )
}

export default MenuItemsList