import React, { useEffect, useRef, useState } from 'react'
import { Product } from '@common/product'

interface AnimatedThumbnailProps {
  item: Product
}

function AnimatedThumbnail({ item }: AnimatedThumbnailProps) {
  const [prevItem, setPrevItem] = useState<Product | undefined>(undefined)
  const [currItem, setCurrItem] = useState<Product | undefined>(item)
  const prevRef = useRef<HTMLImageElement>(null)
  const currRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    setCurrItem(item)
  }, [item])

  useEffect(() => {
    const prev = prevRef.current
    const curr = currRef.current
    let timeout: NodeJS.Timeout;

    if (currItem && prev && curr) {
      prev.animate([{ opacity: 0 }], { duration: 500 });
      curr.animate([{ opacity: 1 }], { duration: 500 });

      timeout = setTimeout(() => {
        setPrevItem(item)
        setCurrItem(undefined)

        prev.style.opacity = '1'
        curr.style.opacity = '0'

      }, 500)
    }

    return () => clearTimeout(timeout)
  }, [currItem, item])

  return (
    <div>
      <div className="relative w-60 h-60">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={prevRef}
          className="absolute"
          src={prevItem?.image}
          alt={prevItem?.name}
          width={240}
          height={240}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={currRef}
          className="absolute"
          src={currItem?.image}
          alt={currItem?.name}
          width={240}
          height={240}
        />
      </div>
    </div>
  )
}

export default AnimatedThumbnail