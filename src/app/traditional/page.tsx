'use client'

import React, { useState } from 'react'
import { Item, items } from '@common/item';
import AnimatedThumbnail from '@components/AnimatedThumbnail'
import OptionList from '@components/OptionList'

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