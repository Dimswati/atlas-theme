import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/provider/theme-provider'
import { cn } from '@/lib/utils'
import Header from '@/components/app/Header'
import ThemeSwitcher from '@/components/app/ThemeSwitcher'

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
      <body className={cn(font.className, 'max-w-[1070px] mx-auto dark:text-white text-black px-4 xl:px-0')}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
          <div className='my-[15px]'>
            <Header />
          </div>
          {children}
          <ThemeSwitcher/>
        </ThemeProvider>
      </body>
    </html>
  )
}
