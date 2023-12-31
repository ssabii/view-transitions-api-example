'use client'

import { useState } from 'react';
import { Product, items } from '@common/product';
import Thumbnail from '@components/Thumbnail';
import OptionList from '@components/OptionList';

function CustomPage() {
  const [item, setItem] = useState(items[0]);

  const handleClick = (item: Product) => {
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
    <div className="flex flex-col justify-center items-center">
      <Thumbnail
        item={item}
        className="view-thumbnail"
      />
      <OptionList
        items={items}
        selectedItem={item}
        onClick={handleClick}
      />
    </div>
  )
}

export default CustomPage