import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="en">
        <body className={inter.className}>
        <Theme appearance='dark' accentColor='gray'>
          <Navbar/>
          {children}
          <Footer/>
          </Theme>
          </body>
      </html>
    </NextIntlClientProvider>
  )
}