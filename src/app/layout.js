import '@/styles/globals.css'
import { Roboto_Slab, Source_Sans_3 } from 'next/font/google'

export const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })
export const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sourceSans3.className}>{children}</body>
    </html>
  )
}
