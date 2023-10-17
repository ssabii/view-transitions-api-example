'use client'

import React from 'react'
import ProductList from '@components/ProductList'
import { items } from '@common/product'

function ListPage() {
  return (
    <div className="my-64 flex justify-center items-center">
      <ProductList items={items} />
    </div>
  )
}

export default ListPage