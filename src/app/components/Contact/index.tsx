import { AiOutlineArrowRight } from 'react-icons/ai'
import ContactModal from './components/ContactModal'

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 my-40">
      <h2 className="text-2xl text-rose-500 uppercase">Do you like my work?</h2>
      <ContactModal>
        <div className="flex items-baseline gap-3 text-8xl text-rose-800 font-semibold cursor-pointer group">
          <h1 className="relative after:duration-300 after:absolute after:bg-rose-800 after:h-[3px] after:w-0 after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:group-hover:w-full">
            {"Let's have a talk"}
          </h1>
          <AiOutlineArrowRight
            size={47}
            className="group-hover:translate-x-2 duration-300"
          />
        </div>
      </ContactModal>
    </section>
  )
}
