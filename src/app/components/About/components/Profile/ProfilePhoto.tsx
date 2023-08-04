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
    <section>
      <Image
        priority
        src={imageUrl}
        alt={imageAlt}
        width={width}
        height={height}
        className="border-white border-8 border-double p-3 rounded-xl"
      />
    </section>
  )
}
