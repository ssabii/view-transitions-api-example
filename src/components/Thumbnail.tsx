import React from 'react'
import { Item } from '@/common/item'
import Image from 'next/image'

interface ThumbnailProps {
  item: Item
}

function Thumbnail({ item }: ThumbnailProps) {
  return (
    <div>
      <div className={`relative w-60 h-60`}>
        <Image
          className='absolute'
          src={item.image}
          alt={item.name}
          width={240}
          height={240}
        />
      </div>
    </div>
  )
}

export default Thumbnail