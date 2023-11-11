import React from 'react'

type FixedSectionProps = {
    children: React.ReactNode
}

const FixedSection = ({ children }: FixedSectionProps) => {

    return (
        <section className="max-w-[1070px] mx-auto xl:px-0 fixed bottom-4 inset-x-0 z-30 px-5 flex items-center justify-between">
            {children}
        </section>
    )
}

export default FixedSection