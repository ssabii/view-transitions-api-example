'use client'

import React from 'react'
import Image from 'next/image'
import { Item } from '@/common/item'

interface OptionListProps {
  items: Item[]
  selectedItem: Item
  onClick?: (item: Item) => void
}

function OptionList({ items, selectedItem, onClick }: OptionListProps) {
  return (
    <ul className='flex gap-2 justify-center'>
      {items.map((item) => (
        <li
          key={item.option.name}
          onClick={() => onClick?.(item)}
        >
          <div className={`
            flex justify-center items-center w-8 h-8 rounded-full
            hover:border-solid hover:border-2 hover:border-gray-200
            ${item === selectedItem && 'border-solid border-2 border-blue-500'}`
          }>
            <Image
              className='rounded-full align-middle cursor-pointer'
              src={item.option.image}
              alt={item.option.name}
              width={26}
              height={26}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default OptionList