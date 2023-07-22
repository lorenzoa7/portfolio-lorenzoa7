import Image from 'next/image'

type AboutProfileProps = {
  imageUrl: string
  imageAlt: string
  width?: number
  height?: number
}

export default function AboutProfile({
  imageUrl,
  imageAlt,
  width = 420,
  height = 420,
}: AboutProfileProps) {
  return (
    <section className="absolute right-28 top-14">
      <Image src={imageUrl} alt={imageAlt} width={width} height={height} />
    </section>
  )
}
