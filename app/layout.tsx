import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

// import { ToasterProvider } from '@/components/toaster-provider'
// import { ModalProvider } from '@/components/modal-provider'
// import { CrispProvider } from '@/components/crisp-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Verbavision',
  description: 'AI Platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <CrispProvider /> */}
        <body className={inter.className}>
          {/* <ToasterProvider />
          <ModalProvider /> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
