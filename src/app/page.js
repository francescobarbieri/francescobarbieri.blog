import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import SidebarButton from '@/components/SidebarButton'
import { fetchInitialPosts } from './actions'
import Article from '@/components/Article'

export const metadata = {
  title: 'Francesco Barbieri',
  description: 'Blogging about tech, finance and coding.',
}

export default function Home() {

  const initialPosts = [];

  fetchInitialPosts().then((res) => {
    res.map((i, index) => {
      initialPosts.push(<Article 
          title={i.title}
          tag={i.tag}
          date={i.date}
          content={i.fileContents}
        />)
    })
  })

  return (
    <div className='container'>
      <header>
        <div className="headerWrapper" id="header">
          <Sidebar />
        </div>
      </header>
      <main>
        <div className="mainWrapper" id="mainWrapper">
          <SidebarButton />
          <Feed initialPosts={initialPosts}  />
        </div>
      </main>
    </div>
  )
}
