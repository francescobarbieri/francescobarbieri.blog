import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import Sidebar from "@/components/sidebar";
import MenuContent from "@/components/menu-content";
import { SOCIALS, commonMetadata } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistSans.className, "bg-white")} suppressHydrationWarning>
        <div className="flex">
          <Sidebar className="relative hidden lg:flex">
            <MenuContent />
          </Sidebar>
          <main className="w-full max-w-[672px] pl-4 pr-4 mx-auto bg-white" vaul-drawer-wrapper="" id="scroll-area">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL('https://francescobarbieri.blog'),
  robots: {
    index: true,
    follow: true
  },
  title: {
    template: `%s — ${commonMetadata.title}`,
    default: commonMetadata.title
  },
  description: commonMetadata.description,
  openGraph: {
    title: {
      template: `%s — ${commonMetadata.title}`,
      default: commonMetadata.title
    },
    description: commonMetadata.description,
    alt: commonMetadata.title,
    type: 'website',
    url: '/',
    siteName: commonMetadata.title,
    locale: 'en_IE'
  },
  alternates: {
    canonical: '/'
  },
  twitter: {
    card: 'summary_large_image',
    site: `@${SOCIALS.twitter.username}`,
    creator: `@${SOCIALS.twitter.username}`
  },
  other: {
    pinterest: 'nopin'
  }
}

export const viewport = {
  themeColor: 'white',
  colorScheme: 'only light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
}