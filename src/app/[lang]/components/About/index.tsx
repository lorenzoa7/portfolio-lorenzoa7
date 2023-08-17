import { generateFloatingMenuConfig } from '@/config/header'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Background, FloatingMenu, Profile } from './components'

type AboutProps = {
  lang: Locale
}

export default async function About({ lang }: AboutProps) {
  const { aboutSection } = await getDictionary(lang)
  const floatingMenuConfig = await generateFloatingMenuConfig({ lang })
  return (
    <Background>
      <Profile.Root>
        <Profile.Info.Root>
          <Profile.Info.Heading>
            {aboutSection.profileInfoHeading.replace(/-/gm, '-\u2060')}
          </Profile.Info.Heading>

          <Profile.Info.Text>{aboutSection.profileInfoText}</Profile.Info.Text>

          <Profile.Info.Button>
            {aboutSection.profileInfoButton}
          </Profile.Info.Button>
        </Profile.Info.Root>

        <Profile.Photo
          imageUrl="/images/profile_photo.jpg"
          imageAlt={aboutSection.profilePhotoAlt}
        />
      </Profile.Root>

      <FloatingMenu.Root>
        {floatingMenuConfig?.map((item) => (
          <FloatingMenu.Item key={item.title} href={item.href} icon={item.icon}>
            {item.title}
          </FloatingMenu.Item>
        ))}
      </FloatingMenu.Root>
    </Background>
  )
}
