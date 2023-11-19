import Banner from "@/components/app/Banner"
import SelectBox from "@/components/app/SelectBox"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Button } from "@/components/ui/button"
import Product from "@/components/app/Product"

type Props = {}

const Shop = (props: Props) => {
  return (
    <main>
      <Banner />
      <section className="w-full">
        <h2 className='font-bold text-lg mb-6'>Shop</h2>
        <div className="flex sm:justify-between justify-start items-center mb-6">
          <span className="text-xs text-neutral-400 hidden sm:inline-flex">Showing 1–12 of 15 results</span>
          <SelectBox />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </section>
    </main>
  )
}

export default Shop