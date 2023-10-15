'use client'

import React, { useState } from 'react'
import { Product, items } from '@common/product';
import AnimatedThumbnail from '@components/AnimatedThumbnail'
import OptionList from '@components/OptionList'

function Page() {
  const [item, setItem] = useState(items[0]);

  const handleClick = (item: Product) => setItem(item);

  return (
    <div className='flex flex-col justify-center items-center'>
      <AnimatedThumbnail item={item} />
      <OptionList
        items={items}
        selectedItem={item}
        onClick={handleClick}
      />
    </div>
  )
}

export default Page