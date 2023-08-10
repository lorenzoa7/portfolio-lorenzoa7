import { AiOutlineArrowRight } from 'react-icons/ai'
import ContactModal from './components/ContactModal'

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-4 my-40 lg:my-20"
    >
      <h2 className="text-2xl text-amaranth-500 uppercase">
        Do you like my work?
      </h2>
      <ContactModal>
        <div className="flex items-baseline gap-3 text-8xl text-amaranth-800 font-semibold cursor-pointer group lg:text-6xl">
          <h1 className="relative after:duration-300 after:absolute after:bg-amaranth-800 after:h-[3px] after:w-0 after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:group-hover:w-full">
            {"Let's have a talk"}
          </h1>
          <AiOutlineArrowRight className="group-hover:translate-x-2 duration-300 w-12 h-12 lg:w-10 lg:h-10" />
        </div>
      </ContactModal>
    </section>
  )
}
