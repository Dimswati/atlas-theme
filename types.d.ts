interface Image {
    key: string
    _type: "image"
    alt?: string
    asset: {
        _ref: string
        _type: string
    }
}

interface PostCategory {
    _id: string
    _type: "postCategory"
    _updatedAt: string
    _createdAt: string
    title: string
    slug: {
        _type: "slug"
        current: string
    }
}

interface Post {
    _id: string
    _updatedAt: string
    _createdAt: string
    title: string
    slug: string
    mainImage: Image
    author: {
        name: string
        image: Image
    },
    category: string
}

