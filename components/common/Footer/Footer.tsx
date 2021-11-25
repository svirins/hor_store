import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import s from './Footer.module.css'
import Logo from '../../ui/Logo/Logo'
import { SocialIcon } from 'react-social-icons'
interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      <Container>
        <div className="grid grid-cols-1 gap-8 py-6 transition-colors duration-150 border-b lg:grid-cols-12 border-accent-2 text-primary bg-primary">
          <div className="col-span-1 lg:col-span-12">
            <div className="grid md:grid-rows-3 md:grid-cols-4 md:grid-flow-col">
              {[...links, ...sitePages].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="transition duration-150 ease-in-out text-accent-9 hover:text-accent-6">
                      {page.name}
                    </a>
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-6 pb-10 space-y-4 text-xs md:flex-row text-accent-6">
          <SocialIcon
            url="https://www.instagram.com"
            label="Our portfolio"
            style={{ height: 32, width: 32 }}
          />

          <div>
            <span>&copy; 2022 Say Dezign,LLC. All rights reserved.</span>
          </div>
          <div className="flex items-center text-xs text-primary">
            <span className="text-primary">Powered by</span>
            <a
              rel="noopener noreferrer"
              href="https://vercel.com"
              aria-label="Vercel.com Link"
              target="_blank"
              className="text-primary"
            >
              <Vercel
                className="inline-block h-3 text-primary"
                alt="Vercel.com Logo"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

//           {/*
//           <div className="flex items-start col-span-1 lg:col-span-2 lg:justify-end text-primary">
//             <div className="flex items-center h-10 space-x-4">
//               <SocialIcon
//                 network="instagram"
//                 style={{ height: 32, width: 32 }}
//                 url="https://instagram.com/jaketrent"
//               />
//               <SocialIcon
//                 network="facebook"
//                 style={{ height: 32, width: 32 }}
//                 url="https://facebook.com/jaketrent"
//               />
//             </div>
//           </div> */}
//         </div>
//         <div className="flex flex-col items-center justify-between pt-2 pb-2 space-y-4 text-accent-6">
//           <Link href="/">
//             <a className="flex items-center flex-initial font-bold md:mr-24">
//               <span className="mr-2 border rounded-full border-accent-6">
//                 <Logo />
//               </span>
//               <span>And say it F****g LOUD! </span>
//             </a>
//           </Link>
//           <div className="flex items-center text-lg text-primary">
//             <span className="text-primary"></span>
//             <span role="img" aria-labelledby="mixed">
//               🧑‍💻&nbsp;by &nbsp;👾
//             </span>
//             <a
//               target="_blank"
//               className="text-red"
//               rel="noopener noreferrer"
//               href="https://twitter.com/svirins"
//             >
//               @svirins
//             </a>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   )
// }

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
