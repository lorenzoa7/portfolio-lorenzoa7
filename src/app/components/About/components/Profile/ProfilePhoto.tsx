import Image from 'next/image'

type ProfilePhotoProps = {
  imageUrl: string
  imageAlt: string
  width?: number
  height?: number
}

export default function ProfilePhoto({
  imageUrl,
  imageAlt,
  width = 420,
  height = 420,
}: ProfilePhotoProps) {
  return (
    <section className="absolute right-28 top-14">
      <Image src={imageUrl} alt={imageAlt} width={width} height={height} />
    </section>
  )
}
