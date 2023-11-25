import { defineField, defineType } from "sanity"

export default defineType({
    title: 'Product Category',
    name: 'productCategory',
    type: 'document',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                maxLength: 96,
                source: 'title'
            }
        }),
        defineField({
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                defineField({
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                })
            ]
        })
    ]
})