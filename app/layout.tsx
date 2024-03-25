/* Importy elementov */
import Header from '@/components/header'

import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

// meranie vykonnosti na webe vercelu
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dávid Mikuláš',
  description: 'Full-Stack developer',
}

/* Layout stránky */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header/>
          {children}
          <SpeedInsights/>
          <Toaster position='top-center'/>
          <Footer/>
          <ThemeSwitch/>
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
