interface Image {
    _key: string
    _type: "image"
    asset: {
        alt: string
        url: string
    }
}

interface PostCategory {
    _id: string
    _type: "postCategory"
    _updatedAt: string
    _createdAt: string
    title: string
    showInNavbar: boolean
    slug: {
        _type: "slug"
        current: string
    },
    image: Image
}

interface Post {
    
}

