interface Image {
    key: string
    alt?: string
    asset: {
        _ref: string
        _type: string
    }
}

interface PostCategory {
    _id: string
    _updatedAt: string
    _createdAt: string
    title: string
    slug: string
}

interface Post {
    _id: string;
    _updatedAt: string;
    _createdAt: string;
    title: string;
    slug: string;
    mainImage: Image;
    category: {
        title: string;
        slug: string;
    };
    author: {
        name: string
        image: Image
    },
}

interface Product {
    _id: string
    _createdAt: string
    _updatedAt: string
    title: string
    slug: string,
    price: number
    productImage: Image
    description: string
    category: string
}