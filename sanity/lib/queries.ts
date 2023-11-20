import { groq } from "next-sanity";
import { client } from "./client";

export const navbarCategoriesQuery = groq`
    *[_type == "postCategory" && showInNavbar != false] {
        _id,
        title,
        slug {
            current,
            _type
        }
} | order(_updatedAt desc) [0...3]`

export const postsByCategoryQuery = groq`
*[_type == "post" && categories -> slug.current == $category] {
      _id,
    _updatedAt,
    _createdAt,
    title,
    "slug": slug.current,
    mainImage,
    "author": author -> {
        name,
        image
    },
    "category": categories -> title
} | order(_updatedAt desc) [0...10]
`



