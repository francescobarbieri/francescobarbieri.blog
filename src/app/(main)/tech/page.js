import SidebarButton from '@/components/SidebarButton'
import { fetchInitialPosts } from '@/app/actions.js'
import Feed from '@/components/Feed';

export const metadata = {
  title: 'Tech Insights',
  description: 'Feed about tech insight.',
  alternates: {
    canonical: '/tech',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Tech Inshights - Francesco Barbieri's Blog.",
    description: 'Feed about tech insight',
    url: 'https://francescobarbieri.blog/tech',
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

export default async function Finance() {

    const res = await fetchInitialPosts("tech");

    const initialPosts = res.map((i, index) => (
        {
            id: i.id,
            title: i.title,
            tag: i.tag,
            date: i.date,
            content: i.content
        }
    ))

    return (
        <>
          <Feed initialPosts={initialPosts} />
        </>
    )
}
