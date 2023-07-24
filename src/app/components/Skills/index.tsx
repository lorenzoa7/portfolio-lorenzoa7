import { SiTypescript } from 'react-icons/si'

export default function Skills() {
  return (
    <section>
      <h2 className="uppercase text-neutral-700 text-4xl font-semibold">
        Skills
      </h2>
      <div className="px-36 py-16">
        <div>
          <h3 className="text-neutral-700 font-semibold text-2xl">Expert</h3>
          <div className="flex justify-start gap-7 mt-8">
            <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg shadow-2xl text-rose-500 font-semibold w-20 h-20">
              <SiTypescript size={32} />
              TypeScript
            </div>

            <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg shadow-2xl text-rose-500 font-semibold w-20 h-20">
              <SiTypescript size={32} />
              JavaScript
            </div>

            <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg shadow-2xl text-rose-500 font-semibold w-20 h-20">
              <SiTypescript size={32} />
              Python
            </div>

            <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg shadow-2xl text-rose-500 font-semibold w-20 h-20">
              <SiTypescript size={32} />
              React
            </div>

            <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg shadow-2xl text-rose-500 font-semibold w-20 h-20">
              <SiTypescript size={32} />
              Next.JS
            </div>

            <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg shadow-2xl text-rose-500 font-semibold w-20 h-20">
              <SiTypescript size={32} />
              Django
            </div>

            <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg shadow-2xl text-rose-500 font-semibold w-20 h-20">
              <SiTypescript size={32} />
              TailwindCSS
            </div>

            <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg shadow-2xl text-rose-500 font-semibold w-20 h-20">
              <SiTypescript size={32} />
              Photoshop
            </div>
          </div>
        </div>

        <div></div>

        <div></div>
      </div>
    </section>
  )
}
