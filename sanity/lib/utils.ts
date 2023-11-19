import { client } from "./client"
import { groq } from "next-sanity"

import { navbarCategoriesQuery, postsByCategoryQuery } from "./queries"
import { sanityFetch } from "./sanityFetch"

export async function getMenuItems(): Promise<any> {
    return client.fetch(navbarCategoriesQuery, {
        caches: 'no-store'
    })
}

// export async function getPostsByCategory(params: {}): Promise<any> {
//     return sanityFetch({
//         query: postsByCategoryQuery,
//         params
//     })
// }
