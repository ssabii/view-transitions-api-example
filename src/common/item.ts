export interface Item {
  name: string
  image: string
  option: Option
}

export interface Option {
  name: string
  image: string
}

export const items: Item[] = [
  {
    name: 'MacBook Air 15-inch Midnight',
    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1684518479433',
    option: {
      name: 'midnight',
      image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1684183820043'
    }
  },
  {
    name: 'MacBook Air 15-inch Starlight',
    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-starlight-select-202306?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1684518479450',
    option: {
      name: 'Starlight',
      image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-starlight-select-202306_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1684183820158'
    }
  },
  {
    name: 'MacBook Air 15-inch Space Gray',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-spacegray-select-202306?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1684518479428',
    option: {
      name: 'Space Gray',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-spacegray-select-202306_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1684183820160'
    }
  },
  {
    name: 'MacBook Air 15-inch Silver',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-silver-select-202306?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1684518479266',
    option: {
      name: 'Silver',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-silver-select-202306_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1684183820142'
    }
  },
]

