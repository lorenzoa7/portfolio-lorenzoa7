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
    <>
      <Image src={src} alt={alt} width={width} height={height} />
    </>
  )
}
