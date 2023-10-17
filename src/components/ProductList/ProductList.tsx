import React from 'react'
import Item from './Item'
import { Product } from '@common/product'

interface ItemListProps {
  items: Product[]
}

function ProductList({ items }: ItemListProps) {
  return (
    <div className="product-list flex justify-center gap-2">
      {items.map((item) => <Item key={item.id} item={item} />)}
    </div>
  )
}

export default ProductList