/* Importy elementov */
import Header from '@/components/header'

import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mikulas │ portfolio',
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
        <div className='absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] bg-[#bdebff] dark:bg-[#946263] sm:w-[68.75rem] dark:bg-'></div>
        <div className='absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] bg-[#ffc3e8d5] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header/>
          {children}
          <Toaster position='top-center'/>
          <Footer/>
          <ThemeSwitch/>
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}