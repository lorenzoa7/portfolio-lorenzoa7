import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai'

export default function Projects() {
  return (
    <section>
      <h2 className="uppercase text-neutral-700 text-4xl font-semibold">
        Projects
      </h2>

      <div className="flex flex-col gap-10 px-36 py-16">
        <div>
          <h3 className="text-rose-800 font-semibold text-2xl">Featured</h3>
          <div className="flex items-center justify-center gap-8">
            {/* Project item */}
            <div className="flex flex-col gap-2 bg-white rounded-lg px-6 py-3 w-[350px] mt-4 items-center group cursor-pointer">
              {/* Rounded icons */}
              <div className="flex gap-1 self-start">
                <div className="rounded-full w-3 h-3 bg-stone-300 group-hover:bg-red-500 duration-150"></div>
                <div className="rounded-full w-3 h-3 bg-stone-300 group-hover:bg-yellow-500 duration-150"></div>
                <div className="rounded-full w-3 h-3 bg-stone-300 group-hover:bg-green-500 duration-150"></div>
              </div>

              {/* Image */}
              <div className="bg-black w-[300px] h-[180px]"></div>

              {/* Info */}
              <div className="flex flex-col gap-3 text-neutral-700">
                <h4 className="text-2xl font-semibold">Project One</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sed purus iaculis, consequat justo finibus, hendrerit risus.
                  Sed varius, sapien ac vestibulum condimentum, leo urna tempor
                  lorem, eget pretium lacus urna nec mi.
                </p>
                <span className="font-semibold underline underline-offset-4 cursor-pointer self-end hover:text-neutral-500 duration-150">
                  See more...
                </span>
              </div>

              <div className="flex gap-5 mt-12">
                <button className="flex items-center justify-center gap-2 bg-rose-500 rounded-lg text-white uppercase text-center py-1 text-xl w-32 hover:bg-rose-800 duration-300">
                  <AiOutlineLink size={24} />
                  App
                </button>

                <button className="flex items-center justify-center gap-2 bg-rose-500 rounded-lg text-white uppercase text-center py-1 text-xl w-32 hover:bg-rose-800 duration-300">
                  <AiOutlineGithub size={24} />
                  Repository
                </button>
              </div>
            </div>
            {/* End of Project Item */}
          </div>
        </div>

        <div>
          <h3 className="text-rose-800 font-semibold text-2xl">
            More projects
          </h3>
          <div></div>
        </div>
      </div>
    </section>
  )
}
