import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import richContent from './schemas/richContent'
import post from './schemas/blog/post'
import author from './schemas/blog/author'
import product from './schemas/product/product'
import postCategory from './schemas/blog/post-category'
import prodcutCategory from './schemas/product/prodcut-category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, postCategory, blockContent, richContent, product, prodcutCategory],
  // templates: () => {
  //   return // templates
  // }
}
