import SidebarButton from '@/components/SidebarButton'
import { fetchInitialPosts } from '@/app/actions.js'
import Feed from '@/components/Feed';

export const metadata = {
  title: 'Thoughts - Francesco Barbieri',
  description: 'Blogging about tech, finance and coding.',
}

export default async function Finance() {

    const res = await fetchInitialPosts("thoughts");

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
            <SidebarButton />
            <Feed initialPosts={initialPosts} />
        </>
    )
}
