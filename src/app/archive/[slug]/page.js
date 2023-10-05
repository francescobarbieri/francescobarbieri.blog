import { fetchPosts, getSinglePost } from "@/app/actions"
import Article from "@/components/Article";
import styles from '@/styles/feed.module.css'

export default async function ArchiveSlug({ params }) {

    const post = await getSinglePost(params.slug);

    return(
        <div className={styles.feed}>
            {
                post ? (
                    <Article
                        title={post.title}
                        tag={post.tag}
                        date={post.date}
                        content={post.content}
                    />
                ) : 'Error, post not found.'
            }
        </div>
    )
}


export async function generateStaticParams() {
    const res = await fetchPosts();

    const posts = res.map((post) => {
        return post.link;
    })
   
    return posts.map((post) => ({
        slug: post,
    }))
}

export async function generateMetadata({params}, parent) {
    const id = params.slug;
    const post = await getSinglePost(id);

    return {
        title: post.title,
        description: 'About me page.',
        alternates: {
            canonical: '/archive/' + post.link,
            languages: {
            'en-US': '/en-US',
            },
        },
        openGraph: {
            title: post.title + " - Francesco Barbieri's Blog",
            description: 'About me page.',
            url: 'https://francescobarbieri.blog/archive/' + post.link,
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
        category: post.tag,
    }
}