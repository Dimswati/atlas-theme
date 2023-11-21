import { groq } from "next-sanity";
import { client } from "./client";

export const navbarCategoriesQuery = groq`
    *[_type == "postCategory" && showInNavbar != false] {
        _id,
        title,
        "slug": slug.current
} | order(_updatedAt desc) [0...4]`

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
    "category": categories -> {
        title,
        "slug": slug.current
    }
} | order(_updatedAt desc) [0...10]
`

export const latestPostsQuery = groq`
*[_type == "post"] {
  _id,
  _updatedAt,
  _createdAt,
  title,
  "slug": slug.current,
  mainImage,
  "category": categories -> {
    title,
    "slug": slug.current
  }
} | order(_updatedAt desc) [0...4]
`

export const singlePostQuery = groq`
*[_type == "post" && slug.current == $slug] {
  _id,
  _updatedAt,
  _createdAt,
  title,
  "slug": slug.current,
  mainImage,
  "category": categories -> {
    title,
    "slug": slug.current
  },
  "author": author -> {
        name,
        image
    }
}[0]
`



