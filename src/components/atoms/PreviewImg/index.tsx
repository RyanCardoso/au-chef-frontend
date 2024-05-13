import React from 'react'
import Image from 'next/image'

interface PreviewImgProps {
  src: File | string
  alt: string
  className?: string
  onRemove?: () => void
}

export const formatUrl = (url: File | string) => {
  if (url instanceof File) return URL.createObjectURL(url)
  return url
}

export const PreviewImg = ({ src, alt, onRemove }: PreviewImgProps) => {
  return (
    <figure className="relative max-h-80 max-w-80">
      <div
        className="absolute right-0 top-0 z-10 mr-[-16px] mt-[-16px] h-8 w-8 rounded-full bg-red-500"
        onClick={onRemove}
      />

      <Image
        className="max-h-80 max-w-80 object-cover"
        src={formatUrl(src)}
        alt={alt}
        width={400}
        height={400}
      />
    </figure>
  )
}
