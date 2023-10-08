import SidebarButton from '@/components/SidebarButton'
import Readings from '@/pages/Readings';

export const metadata = {
    title: 'Reading List',
    description: 'Recommended readings.',
    alternates: {
      canonical: '/readings',
      languages: {
        'en-US': '/en-US',
      },
    },
    openGraph: {
      title: "Reading List - Francesco Barbieri's Blog.",
      description: 'Recommended readings',
      url: 'https://francescobarbieri.blog/readings',
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

    return (
        <>
            <SidebarButton />
            <Readings />
        </>
    )
}
