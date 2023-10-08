import SidebarButton from '@/components/SidebarButton'
import About from "@/pages/About"

export const metadata = {
  title: 'About',
  description: 'About me page.',
  alternates: {
    canonical: '/about',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "About - Francesco Barbieri's Blog",
    description: 'About me page.',
    url: 'https://francescobarbieri.blog/about',
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
}

export default function Home() {
  return (
    <>
      <SidebarButton />
      <About />
    </>
  )
}
