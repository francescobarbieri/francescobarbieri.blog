import Feed from '@/components/Feed'
import SidebarButton from '@/components/SidebarButton'
import { fetchInitialPosts } from '@/app/actions'

export default async function Home() {

  const res = await fetchInitialPosts();

  const initialPosts = res.map((i, index) => (
      {
          id: i.id,
          title: i.title,
          tag: i.tag,
          date: i.date,
          link: i.link,
          content: i.content
      }
  ))

  return (
    <>
      <Feed initialPosts={initialPosts}  />
    </>
  )
}
