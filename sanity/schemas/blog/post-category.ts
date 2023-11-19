import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'postCategory',
  title: 'Post Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alternative text',
          type: 'string',
          name: 'alt'
        },
      ]
    }),
    defineField({
      title: 'Show in Navbar',
      name: "showInNavbar",
      type: "boolean",
      description: "only 4 categories will be shown",
      initialValue: false,
      // hidden: ({ document }) => {} // I could have implemented asyc function to return the number of documents
    })
  ],
})
