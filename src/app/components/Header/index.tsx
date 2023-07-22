import { siteConfig } from '@/config/site'
import { ChevronsDown, FileText, Github, Linkedin } from 'lucide-react'
import { Logo } from '../Logo'
import { About, Background, Nav } from './components'

export default function Header() {
  return (
    <Background>
      <div className="flex justify-between items-baseline">
        <Logo.Root>
          <Logo.Name />
          <Logo.Symbol />
        </Logo.Root>

        <Nav.Root>
          {siteConfig.nav?.map((item) => (
            <Nav.Item key={item.title} href={item.href}>
              {item.title}
            </Nav.Item>
          ))}
        </Nav.Root>
      </div>

      <About.Root>
        <About.Info.Root>
          <About.Info.Heading>
            Full-Stack Developer and Designer
          </About.Info.Heading>

          <About.Info.Text>
            Hello, my name is Lorenzo Aceti and I work developing front-end and
            back-end applications, as well as prototyping intuitive interfaces
            with my design knowledge. My main goal is to add value through
            programming creativity.
          </About.Info.Text>

          <About.Info.Button icon={ChevronsDown}>scroll down</About.Info.Button>
        </About.Info.Root>

        <About.Profile />
      </About.Root>

      <div className="flex items-center justify-center gap-20 bg-white rounded-md shadow-2xl absolute bottom-0 left-1/2 -translate-x-1/2 z-10 px-24 py-9">
        <div className="flex flex-col items-center text-rose-500 gap-3 cursor-pointer">
          <Github width={45} height={45} />
          <span className="uppercase text-2xl font-semibold">Github</span>
        </div>

        <div className="flex flex-col items-center text-rose-500 gap-3 cursor-pointer">
          <Linkedin width={45} height={45} />
          <span className="uppercase text-2xl font-semibold">Linkedin</span>
        </div>

        <div className="flex flex-col items-center text-rose-500 gap-3 cursor-pointer">
          <FileText width={45} height={45} />
          <span className="uppercase text-2xl font-semibold">CV</span>
        </div>
      </div>
    </Background>
  )
}
