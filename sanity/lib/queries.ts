import { groq } from "next-sanity";

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

export const bannerPostsQuery = groq`
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
  },
    "author": author -> {
        name,
        image
    }
} | order(_updatedAt desc) [0...10]`

export const productListQuery = groq`
*[_type == "product"] {
  ...
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  price,
  productImage
} | order(_updatedAt desc)[0...10]`

export const singleProductQuery = groq`
*[_type == "product" && slug.current == $slug] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  price,
  productImage,
  description,
  "category": category -> slug.current
}[0]`

export const relatedProductsQuery = groq`
*[_type == "product" && category -> slug.current == $category] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  price,
  productImage
} | order(_updatedAt desc)[0...10]`

export const categoryListQuery = groq`
*[_type == "postCategory"] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  mainImage
}`


