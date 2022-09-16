import React from 'react'

type Props = {
  webp?: string
  img: string
  alt: string
}

export const PictureImage: React.FC<Props> = ({ webp, img, alt }) => {
  return (
    <picture>
      {webp && <source srcSet={webp} type="image/webp" />}
      <img srcSet={img} alt={alt} />
    </picture>
  )
}

export default PictureImage
