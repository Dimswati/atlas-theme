import Banner from '@/components/app/Banner'
import Link from 'next/link'
import Image from 'next/image'
// import { Button } from '@/components/ui/button'

import productOne from "../../../../../public/images/product-one.jpeg"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import AddToCart from '@/components/app/AddToCart'
import Product from '@/components/app/Product'
import { sanityFetch } from '@/sanity/lib/sanityFetch'
import { relatedProductsQuery, singleProductQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'

const ProductPage = async ({ params }: { params: { slug: string } }) => {

  const product: Product = await sanityFetch({
    query: singleProductQuery,
    params
  })

  const products: Product[] = await sanityFetch({
    query: relatedProductsQuery,
    params: { "category": product.category }
  })

  return (
    <main>
      <Banner />
      <section className="w-full flex md:flex-row flex-col gap-x-8 gap-y-8 mb-8">
        <div className='relative basis-1/2'>
          <span className="absolute top-4 left-4 bg-blue-700 text-white px-4 py-1 rounded-xl text-xs">
            39%
          </span>
          <Link href="/product/airpods-handsfree">
            <Image src={urlForImage(product.productImage).url()} alt="product image" className="w-full aspect-square object-cover object-center rounded-lg" width={500} height={500} />
          </Link>
        </div>
        <div className='basis-1/2'>
          <h3 className='text-3xl font-bold mt-2 mb-6'>{product.title}</h3>
          <div className='flex gap-x-3 text-xl mb-6'>
            <span className='line-through'>$150.00</span>
            <span className='text-blue-700'>$150.00</span>
          </div>
          <p className='text-[.9em] leading-6 mb-8'>{product.description}</p>
          <AddToCart />
        </div>
      </section>
      <section>
        <h3 className='text-2xl font-bold mt-2 mb-6'>Related products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <Product key={product._id} product={product}/>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductPage