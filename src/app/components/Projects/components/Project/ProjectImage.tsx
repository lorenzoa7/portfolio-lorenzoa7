import Image from 'next/image'

type ProjectImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
}

export default function ProjectImage({
  src,
  alt,
  width = 300,
  height = 180,
}: ProjectImageProps) {
  return (
    <div className={`relative w-[${width}px] h-[${height}px] overflow-hidden`}>
      <Image
        fill
        src={src}
        alt={alt}
        className="object-cover group-hover:scale-125 duration-300 ease-in-out"
      />
    </div>
  )
}
