import { defineField, defineType } from "sanity";

export default defineType({
    title: 'Product',
    name: 'product',
    type: 'document',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
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
            title: 'Product Image',
            name: 'productImage',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                defineField({
                    title: 'Alternative text',
                    name: 'alt',
                    type: 'string'
                })
            ]
        }),
        defineField({
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [
                {
                    type: 'productCategory'
                }
            ]
        }),
        defineField({
            title: 'Description',
            name: 'description',
            type: 'text',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: 'Price',
            name: 'price',
            type: 'number',
            validation: (Rule) => [
                Rule.required().min(10)
            ]
        })
    ]
})