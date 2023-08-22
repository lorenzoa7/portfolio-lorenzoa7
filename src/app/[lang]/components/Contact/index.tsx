import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { AiOutlineArrowRight } from 'react-icons/ai'
import ContactModal from './components/ContactModal'

type ContactProps = {
  lang: Locale
}

export default async function Contact({ lang }: ContactProps) {
  const { contactSection } = await getDictionary(lang)
  return (
    <section
      id="contact"
      className="my-40 flex flex-col items-center justify-center gap-4 lg:my-20 sm:my-16"
    >
      <h2 className="text-2xl uppercase text-amaranth-500 sm:text-xl">
        {contactSection.question}
      </h2>
      <ContactModal contactSection={contactSection}>
        <div className="group flex cursor-pointer items-baseline gap-3 text-8xl font-semibold text-amaranth-800 lg:text-6xl sm:text-4xl">
          <h1 className="relative after:absolute after:-bottom-3 after:left-1/2 after:h-[3px] after:w-0 after:-translate-x-1/2 after:bg-amaranth-800 after:duration-300 after:group-hover:w-full">
            {contactSection.letsTalk}
          </h1>
          <AiOutlineArrowRight className="h-12 w-12 duration-300 group-hover:translate-x-2 lg:h-10 lg:w-10 sm:h-6 sm:w-6" />
        </div>
      </ContactModal>
    </section>
  )
}
