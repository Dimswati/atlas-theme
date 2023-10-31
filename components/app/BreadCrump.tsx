import Link from "next/link"

type BreadCrumpProps = {
    category: string
}

const BreadCrump = ({ category }: BreadCrumpProps) => {
    return (
        <div className='text-xs text-neutral-400 flex gap-x-2 mb-6'>
            <Link href='/' className="uppercase">home</Link>
            &gt;
            <Link href={`/category/${category}`} className="text-blue-700 uppercase">{category}</Link>
        </div>
    )
}

export default BreadCrump