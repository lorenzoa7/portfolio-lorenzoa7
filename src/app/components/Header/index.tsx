import { Logo } from '../Logo'
import Background from './components/Background'
import { Nav } from './components/Nav'

import { siteConfig } from '@/app/config/site'

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

      <div>
        <section></section>
        <section></section>
      </div>

      <div></div>
    </Background>
  )
}
