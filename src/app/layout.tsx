'use client'


import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Gets the current path
  return (
    <html lang="en">
      <body>
        <main>
            <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto bg-opacity-50 bg-gray-700 p-2 w-fit rounded-full pr-4 pl-4 mt-4">
              <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
              </button>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <Link
                  href="/"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold text-2xl ${
                    pathname === '/' ? '!text-blue-500' : ''
                  }`}
                  >
                  About Me
                  </Link>
                </li>
                {/*<li>
                  <Link
                  href="/About"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent font-bold text-2xl ${
                    pathname === '/About' ? '!text-blue-500' : ''
                  }`}
                  >
                  About Me
                  </Link>
                </li>*/}
                <li>
                  <Link
                  href="/YIR"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold text-2xl ${
                    pathname === '/YIR' ? '!text-blue-500' : ''
                  }`}
                  >
                  Year In Review
                  </Link>
                </li>
                <li>
                  <Link
                  href="/Experiences"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold text-2xl ${
                    pathname === '/Experiences' ? '!text-blue-500' : 'text-gray-900'
                  }`}
                  >
                  Experiences
                  </Link>
                </li>
                </ul>
              </div>
            </div>
            </nav>
          <div className="flex p-16 pt-8 dark:text-white font-semibold">
                {children}
          </div>
        </main>
      </body>
    </html>
  )
}
