'use client'

import { useState } from 'react';
import { Item, items } from '@/common/item';
import Thumbnail from '@/components/Thumbnail';
import OptionList from '@/components/OptionList';

function Page() {
  const [item, setItem] = useState(items[0]);

  const handleClick = (item: Item) => {
    updateView(() => setItem(item))
  }

  const updateView = (callback: () => void) => {
    if (!document.startViewTransition) {
      callback()
      return
    }

    document.startViewTransition(callback)
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <Thumbnail
        item={item}
        className='view-thumbnail'
      />
      <OptionList
        items={items}
        selectedItem={item}
        onClick={handleClick}
      />
    </div>
  )
}

export default Page