import { headerConfig } from '@/config/header'
import { About, Background, FloatingMenu } from './components'

export default function Header() {
  return (
    <Background>
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

          <About.Info.Button>scroll down</About.Info.Button>
        </About.Info.Root>

        <About.Profile
          imageUrl="/images/photo_badge3.png"
          imageAlt="A picture of Lorenzo Aceti."
        />
      </About.Root>

      <FloatingMenu.Root>
        {headerConfig.floatingMenu?.map((item) => (
          <FloatingMenu.Item key={item.title} href={item.href} icon={item.icon}>
            {item.title}
          </FloatingMenu.Item>
        ))}
      </FloatingMenu.Root>
    </Background>
  )
}
