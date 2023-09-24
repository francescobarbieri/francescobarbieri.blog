import Feed from '@/components/Feed'
import SidebarButton from '@/components/SidebarButton'
import { fetchInitialPosts } from './actions'

export const metadata = {
  title: "Francesco Barbieri's Blog",
  description: 'Blogging about finance and current events',
}

export default async function Home() {

  const res = await fetchInitialPosts();

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
      <Feed initialPosts={initialPosts}  />
    </>
  )
}
