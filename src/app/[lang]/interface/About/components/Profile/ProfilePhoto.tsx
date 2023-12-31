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
  width = 300,
  height = 300,
}: ProfilePhotoProps) {
  return (
    <section className="lg:order-first">
      <Image
        priority
        src={imageUrl}
        alt={imageAlt}
        width={width}
        height={height}
        className="rounded-xl border-8 border-double border-white p-3"
      />
    </section>
  )
}
