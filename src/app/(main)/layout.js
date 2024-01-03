import '@/styles/globals.css'
import Sidebar from '@/components/Sidebar'
import { sourceSans3 } from '@/lib/fonts'
import Topbar from '@/components/TopBar'

export const metadata = {
  title: {
    template: "%s - Francesco Barbieri's Blog",
    default: "Francesco Barbieri's Blog",
  },
  description: 'Blogging about tech, thoughts and current events',
  applicationName: "Francesco Barbieri's Blog",
  keywords: ['Francesco', 'Barbieri', 'Blog', 'Developer', 'Freelance', 'Coding', 'Tech'],
  authors: [{ name: "Francesco Barbieri"}],
  colorScheme: "light",
  creator: 'Francesco Barbieri',
  publisher: 'Francesco Barbieri',
  manifest: 'https://francescobarbieri.blog/manifest.webmanifest',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Francesco Barbieri's Blog",
    description: 'Blogging about tech, thoughts and current events',
    url: 'https://francescobarbieri.blog',
    siteName: "Francesco Barbieri's Blog",
    locale: 'en_US',
    images: [
      {
        url: 'https://francescobarbieri.blog/og/og.png',
        width: 800,
        height: 400,
      },
    ],
    type: 'website'
  },
  /*
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
  },
  */
  themeColor: 'light',
  archives: ['https://francescobarbieri.blog/archive'],
  category: 'technology',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/icons/faviconDark.ico',
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/icons/faviconLight.ico',
      media: '(prefers-color-scheme: light)',
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body
          className={sourceSans3.className}
          id="body"
        >
          <div className='container'>
            <Topbar />
            <header>
              <div className="headerWrapper" id="header">
                <Sidebar />
              </div>
            </header>
            <main>
              <div className="mainWrapper" id="mainWrapper">
                {children}
              </div>
            </main>
          </div>
        </body>
    </html>
  )
}
