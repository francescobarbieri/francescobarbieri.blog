import SidebarButton from '@/components/SidebarButton'
import Archive from '@/pages/Archive'
import { fetchPosts } from '../actions'

export const metadata = {
  title: 'Archive',
  description: 'Archive of all my posts.',
  alternates: {
    canonical: '/archive',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Archive - Francesco Barbieri's Blog",
    description: 'Archive of all my posts.',
    url: 'https://francescobarbieri.blog/archive',
    siteName: "Francesco Barbieri's Blog",
    locale: 'en_US',
    /*
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
    ],
    */
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


export default async function Home() {

  const allPosts = await fetchPosts();

  return (
    <>
      <SidebarButton />
      <Archive allPosts={allPosts} />
    </>
  )
}
