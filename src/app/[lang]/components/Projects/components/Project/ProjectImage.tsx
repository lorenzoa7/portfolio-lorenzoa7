import Image from 'next/image'

type ProjectImageProps = {
  src: string
  alt: string
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <div
      className={`relative h-[180px] w-[300px] overflow-hidden lg:w-[385px] sm:w-[260px]`}
    >
      <Image
        fill
        src={src}
        alt={alt}
        className="object-cover duration-300 ease-in-out group-hover:scale-125"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
