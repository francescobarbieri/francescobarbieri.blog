import Collections from '@/components/Collections'
import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'

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
          {/* <Collections /> */}
        </div>
      </main>
    </div>
  )
}
