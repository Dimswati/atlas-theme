import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '@/provider/theme-provider'
import { cn } from '@/lib/utils'
import Header from '@/components/app/Header'
import ThemeSwitcher from '@/components/app/ThemeSwitcher'
import Footer from '@/components/app/Footer'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Atlas Blog theme',
  description: 'Blog theme for your beautiful saas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, ' dark:text-white text-black')}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
          <Header />
          <div className='max-w-[1070px] mx-auto px-5 xl:px-0'>
            {children}
          </div>
          <Footer />
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}
