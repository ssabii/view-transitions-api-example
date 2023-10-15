'use client'

import React, { useState } from 'react'
import AnimatedThumbnail from '@/components/AnimatedThumbnail'
import OptionList from '@/components/OptionList'
import { Item, items } from '@/common/item';

function Page() {
  const [item, setItem] = useState(items[0]);

  const handleClick = (item: Item) => setItem(item);

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