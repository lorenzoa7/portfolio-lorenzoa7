import { headerConfig } from '@/config/header'
import { Background, FloatingMenu, Profile } from './components'

export default function About() {
  return (
    <Background>
      <Profile.Root>
        <Profile.Info.Root>
          <Profile.Info.Heading>
            Full-Stack Developer and Designer
          </Profile.Info.Heading>

          <Profile.Info.Text>
            Hello, my name is Lorenzo Aceti and I work developing front-end and
            back-end applications, as well as prototyping intuitive interfaces
            with my design knowledge. My main goal is to add value through
            programming creativity.
          </Profile.Info.Text>

          <Profile.Info.Button>scroll down</Profile.Info.Button>
        </Profile.Info.Root>

        <Profile.Photo
          imageUrl="/images/photo_badge3.png"
          imageAlt="A picture of Lorenzo Aceti."
        />
      </Profile.Root>

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
