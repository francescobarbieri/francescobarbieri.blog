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
