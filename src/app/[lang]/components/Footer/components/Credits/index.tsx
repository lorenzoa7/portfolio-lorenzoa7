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
    <section className="flex flex-col items-center gap-1 w-full justify-center sm:order-last sm:mt-2 font-semibold">
      {logo && (
        <Logo.Root>
          <Logo.Symbol size={logoSize} />
        </Logo.Root>
      )}
      <span>{children}</span>
    </section>
  )
}
