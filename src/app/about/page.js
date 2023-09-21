import Sidebar from '@/components/Sidebar'
import SidebarButton from '@/components/SidebarButton'
import About from "@/components/About"

export const metadata = {
  title: 'Francesco Barbieri',
  description: 'Blogging about tech, finance and coding.',
}

export default function Home() {
  return (
    <>
      <SidebarButton />
      <About />
    </>
  )
}
