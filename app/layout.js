import './globals.css'
import Head from 'next/head'

import { Young_Serif } from 'next/font/google'

const young_serif = Young_Serif({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'The Horological Company',
  description: 'Timepiece overhaul, repair, and refurbishment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>The Horological Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={young_serif.className}>{children}</body>
    </html>
  )
}


