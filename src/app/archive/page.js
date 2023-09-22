import SidebarButton from '@/components/SidebarButton'
import Archive from '@/pages/Archive'
import { fetchPosts } from '../actions'

export const metadata = {
  title: 'Archive - Francesco Barbieri',
  description: 'Blogging about tech, finance and coding.',
}

export default async function Home() {

  const allPosts = await fetchPosts();

  return (
    <>
      <SidebarButton />
      <Archive allPosts={allPosts} />
    </>
  )
}
