import { getMenuItems } from "@/sanity/lib/utils"
import Link from "next/link"

type MenuItemsListType = Pick<PostCategory, '_id' | 'title' | 'slug'>

const MenuItemsList = async () => {

    const menuItems: MenuItemsListType[] = await getMenuItems()

    return (
        <>
            {menuItems.map(({ _id, title, slug }) => (
                <Link href={`/category/${slug.current}`} key={_id} className="hover:text-blue-600 transition-colors duration-500">{title}</Link>
            ))}
        </>
    )
}

export default MenuItemsList