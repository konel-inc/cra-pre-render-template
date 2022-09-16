import React from "react"

type Props = {
  webp?: string,
  img: string
}

export const picture:React.FC<Props> = ({webp, img}) => {
  return (
    <picture>
      {webp && <source srcSet={webp} type="image/webp" />}
      <img srcSet={img} alt="??" />
    </picture>
  )
}

export default picture