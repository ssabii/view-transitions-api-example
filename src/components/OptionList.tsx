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
    <ul className='flex gap-4'>
      {items.map((item) => (
        <li
          key={item.option.name}
          className="cursor-pointer"
          onClick={() => onClick?.(item)}
        >
          <div className={`w-8 h-8 rounded-full p-1 ${item === selectedItem && 'border-solid border-2 border-blue-500'}`}>
            <Image
              className='rounded-full align-middle'
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