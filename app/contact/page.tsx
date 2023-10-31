import SideBar from '@/components/app/Sidebar'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {}

const Contact = (props: Props) => {
    return (
        <main className='flex gap-x-8 gap-y-12 w-full md:flex-row flex-col'>
            <section className='w-full'>
                <h2 className='font-bold text-lg mb-6'>Contact</h2>
                <p className='text-sm leading-6 mb-8'>Asteroids have us in our sight. The dinosaurs didnt have a space program, so theyre not here to talk about this problem. We are, and we have the power to do something about it. I dont want to be the embarrassment of the galaxy, to have had the power to deflect an asteroid, and then not, and end up going extinct.
                </p>
                <form action="" className='flex flex-col gap-y-8'>
                    <div>
                        <label htmlFor="your-name" className='text-sm'>Your Name</label>
                        <input type="text" placeholder='' id='your-name' className='block rounded-lg border-neutral-200 focus:ring-0 focus:ring-transparent focus:outline-none focus:border-neutral-200 text-sm w-full py-3' />
                    </div>
                    <div>
                        <label htmlFor="your-name" className='text-sm'>Your Email</label>
                        <input type="text" placeholder='' id='your-name' className='block rounded-lg border-neutral-200 focus:ring-0 focus:ring-transparent focus:outline-none focus:border-neutral-200 text-sm w-full py-3' />
                    </div>
                    <div>
                        <label htmlFor="your-name" className='text-sm'>Subject</label>
                        <input type="text" placeholder='' id='your-name' className='block rounded-lg border-neutral-200 focus:ring-0 focus:ring-transparent focus:outline-none focus:border-neutral-200 text-sm w-full py-3' />
                    </div>
                    <div>
                        <label htmlFor="message" className='text-sm'>Your message(Optional)</label>
                        <textarea name="" id="" cols={30} rows={10} className='block rounded-lg border-neutral-200 focus:ring-0 focus:ring-transparent focus:outline-none focus:border-neutral-200 text-sm w-full'></textarea>
                    </div>
                    <input type="submit" className={cn(buttonVariants({ variant: "default" }), "bg-blue-700 hover:bg-blue-600 inline-block w-fit cursor-pointer")}/>
                </form>
            </section>
            <SideBar/>
        </main>
    )
}

export default Contact