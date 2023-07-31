import Image from 'next/image'

type ProjectImageProps = {
  src: string
  alt: string
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <div className={`relative w-[300px] h-[180px] overflow-hidden`}>
      <Image
        fill
        src={src}
        alt={alt}
        className="object-cover group-hover:scale-125 duration-300 ease-in-out"
      />
    </div>
  )
}
