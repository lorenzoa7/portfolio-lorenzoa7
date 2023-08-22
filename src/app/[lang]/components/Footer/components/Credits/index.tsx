import { Logo } from '@/app/[lang]/components/Logo'

type CreditsProps = {
  children: React.ReactNode
  logo?: boolean
  logoSize?: 'small' | 'medium'
}

export default function Credits({
  children,
  logo = false,
  logoSize = 'small',
}: CreditsProps) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-1 font-semibold sm:order-last sm:mt-2">
      {logo && (
        <Logo.Root>
          <Logo.Symbol size={logoSize} />
        </Logo.Root>
      )}
      <span>{children}</span>
    </section>
  )
}
