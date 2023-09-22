import SidebarButton from '@/components/SidebarButton'
import About from '@/components/About';

export const metadata = {
  title: 'Readings - Francesco Barbieri',
  description: 'Blogging about tech, finance and coding.',
}

export default async function Finance() {

    return (
        <>
            <SidebarButton />
            <About />
        </>
    )
}
