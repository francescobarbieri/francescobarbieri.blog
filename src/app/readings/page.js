import SidebarButton from '@/components/SidebarButton'
import Readings from '@/pages/Readings';

export const metadata = {
  title: 'Readings - Francesco Barbieri',
  description: 'Blogging about tech, finance and coding.',
}

export default async function Finance() {

    return (
        <>
            <SidebarButton />
            <Readings />
        </>
    )
}
