'use client'

import { useSession } from 'next-auth/react'
import Image from "next/image";
import Link from "next/link";
import { Button } from './components/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import DarkModeToggle from './components/darkModeButton';


export default function Navbar() {

  const { data } = useSession()
  let image = data?.user?.image as string


  return (
    <nav className="bg-white border-gray-200 dark:bg-bondi-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" passHref>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-bondi-50">Tarefas</span>
        </Link>

        <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

          <DarkModeToggle />

          {!data?.user && (
            <Button variant='default' onClick={() => window.location.href = '/api/auth/signin'}>Criar</Button>
          )}

          {data?.user && (

            <DropdownMenu>
              <DropdownMenuTrigger><Image src={image} alt="Foto de Perfil" width={40} height={40} className="rounded-full" /></DropdownMenuTrigger>
              <DropdownMenuContent className='mt-2 mr-10 md:mr-0 flex flex-col gap-1 bg-bondi-950 py-4 px-2'>

                <DropdownMenuItem className='justify-center ' >
                 
                    <Link className='underline' href="/dashboard">Dashboard</Link>
              
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className='justify-center' onSelect={() => window.location.href = '/dashboard'}>
                  <Button variant="destructive" className='justify-center w-full h-7' onClick={() => window.location.href = '/api/auth/signout'} >Sair</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          )}

        </div>
      </div>
      {/** 
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  dark:text-gray-40 " aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-bondi-950 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-bondi-50 bg-bondi-300 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">In</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-bondi-400 dark:text-bondi-50 dark:hover:bg-gray-700 dark:hover:text-bondi-50 md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-bondi-400 dark:text-bondi-50 dark:hover:bg-gray-700 dark:hover:text-bondi-50 md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-bondi-400 dark:text-bondi-50 dark:hover:bg-gray-700 dark:hover:text-bondi-50 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
        
      </div>
      */}
    </nav>

  )
}
