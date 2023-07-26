import { Logo } from '@/app/components/Logo'

type CreditsProps = {
  children: React.ReactNode
  logo?: boolean
  logoSize?: number
}

export default function Credits({
  children,
  logo = false,
  logoSize = 35,
}: CreditsProps) {
  return (
    <section className="flex flex-col items-center gap-1 w-full justify-center">
      {logo && (
        <Logo.Root>
          <Logo.Symbol size={logoSize} />
        </Logo.Root>
      )}
      <span>{children}</span>
    </section>
  )
}
