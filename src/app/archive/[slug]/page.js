import { fetchPosts, getSinglePost } from "@/app/actions"
import Article from "@/components/Article";

export default async function ReadPost({ params }) {

    const res = await getSinglePost(params.slug);

    console.log(res)

    return(
        <div>
            { res ?
                (
                    <Article 
                        title={res.title}
                        tag={res.tag}
                        date={res.date}
                        content={res.content}
                    />
                ) : 'Error'
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