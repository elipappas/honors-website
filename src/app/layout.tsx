'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className="">
        <main className="bg-white min-h-screen">
          <div className="flex p-4 pl-16 w-full items-center bg-zinc-950">
            <h1 className="text-4xl font-extrabold left-6 mr-8">Eli Pappas</h1> 
            <nav>
                <ul className='flex space-x-4'>
                    {/* <Link href="/Home" className={`link ${pathname=== '/Home' ? 'underline underline-offset-4' : ''}`}><li className="mb-4 hover:underline underline-offset-4 text-left w-44 active:underline inline">Home</li></Link> */}
                    {/* <div>|</div> */}
                    <Link href="/About" className={`link ${pathname=== '/About' ? 'underline underline-offset-4' : ''}`}><li className="mb-4 hover:underline underline-offset-4 text-left w-44 inline">About Me</li></Link>
                    <div>|</div>
                    <Link href="/YIR" className={`link ${pathname=== '/YIR' ? 'underline underline-offset-4' : ''}`}><li className="mb-4 hover:underline underline-offset-4 text-left w-44 inline">Year In Review</li></Link>
                    <div>|</div>
                    <Link href="/Experiences" className={`link ${pathname=== '/Experiences' ? 'underline underline-offset-4' : ''}`}><li className="mb-4 hover:underline underline-offset-4 text-left w-44 inline">Honors Experiences</li></Link>
                </ul>
            </nav>
          </div>
          <div className="flex p-16 pt-8 text-black font-bold">
                {children}
            </div>
        </main>
      </body>
    </html>
  )
}
