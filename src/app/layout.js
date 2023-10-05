'use server'

import '@/styles/globals.css'
import { Roboto_Slab, Source_Sans_3 } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export const metadata = {
  title: "Francesco Barbieri's Blog",
  description: 'Blogging about tech, thoughts and current events',
  applicationName: "Francesco Barbieri's Blog",
  keywords: ['Francesco', 'Barbieri', 'Blog', 'Developer', 'Freelance', 'Coding', 'Tech'],
  authors: [{ name: "Francesco Barbieri"}],
  colorScheme: "light",
  creator: 'Francesco Barbieri',
  publisher: 'Francesco Barbieri',
  openGraph: {
    title: "Francesco Barbieri's Blog",
    description: 'Blogging about tech, thoughts and current events',
    url: 'https://francescobarbieri.blog',
    siteName: "Francesco Barbieri's Blog",
    locale: 'en_US',
    type: 'website'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body
          
          id="body"
        >
          <div className='container'>
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
