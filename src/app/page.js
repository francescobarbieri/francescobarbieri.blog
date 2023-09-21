import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import SidebarButton from '@/components/SidebarButton'
import { fetchInitialPosts } from './actions'
import Article from '@/components/Article'

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
          content: i.fileContents
      }

      /*
      <Article 
          title={i.title}
          tag={i.tag}
          date={i.date}
          content={i.fileContents}
      />
      */
  ))
  return (
    <>
      <SidebarButton />
      <Feed initialPosts={initialPosts}  />
    </>
  )
}
