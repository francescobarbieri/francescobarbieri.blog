import Feed from '@/components/Feed'
import SidebarButton from '@/components/SidebarButton'
import { fetchInitialPosts } from './actions'

export const metadata = {
  title: 'Francesco Barbieri',
  description: 'Blogging about tech, finance and coding.',
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
