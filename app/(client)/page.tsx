import Header from "@/components/app/Header"
import BannerSwiper from "@/components/app/HomeSliders/BannerSwiper"
import { bannerPostsQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/sanityFetch"

export default async function Home() {

  const posts: Post[] = await sanityFetch({
    query: bannerPostsQuery
  })
  
  return (
    <main className="lg:px-0">
       <BannerSwiper posts={posts}/>
    </main>
  )
}
