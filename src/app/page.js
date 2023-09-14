import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import SidebarButton from '@/components/SidebarButton'

export const metadata = {
  title: 'Francesco Barbieri',
  description: 'Blogging about tech, finance and coding.',
}

export default function Home() {
  return (
    <div className='container'>
      <header>
        <div className="headerWrapper">
          <Sidebar />
        </div>
      </header>
      <main>
        <div className="mainWrapper">
          <SidebarButton />
          <Feed />
          {/* <Collections /> */}
        </div>
      </main>
    </div>
  )
}
