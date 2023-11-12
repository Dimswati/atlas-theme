import { defineType, defineArrayMember, defineField } from "sanity";

export default defineType({
    title: 'Rich Content',
    type: 'array',
    name: 'richContent',
    of: [
        defineArrayMember({
            title: 'Block',
            type: 'block',
            // lists: [
            //     { title: 'Bullet', value: 'bullet' },
            //     { title: 'Numbered', value: 'number' }
            // ],
            marks: {
                // decorators: [
                //     { title: 'Strong', value: 'strong' },
                //     { title: 'Emphasis', value: 'em' },
                //     { title: 'Code', value: 'code' }
                // ],
                annotations: [
                    defineField({
                        name: 'internalLink',
                        type: 'object',
                        title: 'Internal Link',
                        fields: [
                            {
                                name: 'reference',
                                type: 'reference',
                                title: 'Reference',
                                to: [
                                    { type: 'post' },
                                    { type: 'postCategory' },
                                    { type: 'product' },
                                    { type: 'productCategory' },
                                    { type: 'author' }
                                ]
                            }
                        ]
                    }),

                    defineField({
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'url',
                                type: 'url'
                            }
                        ]
                    })
                ]
            }
        }),
        defineArrayMember({
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    title: 'Alt',
                    name: 'alt',
                    type: 'string'
                }
            ]
        }),
        defineArrayMember({
            type: 'code'
        })
    ]
})