'use client'
import { 
  LayoutDashboard, 
  Home, 
  LogOut,
  HelpCircle,
  Settings,
  Search,
  Wallet
} 
  from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { PrimaryInputSearchIcon } from './primary-input'
import { Gerenciar } from './icons/manage-product-icon'
import { GraficoVendas } from './icons/grafico-icon'
import { Ajuste } from './icons/ajustes-icon'
import { Contact } from './icons/contact-icon'
import { Exit } from './icons/exit-icon'

export function Nav() {
  const [filterNav, setfilterNav] = useState<string>('')
  const inactiveLink = 'flex items-center gap-4 mb-6 border-gray-600 transition ease-in-out delay-200 hover:border-purple-250 duration-150 ...';
  const activeLink = inactiveLink+'border-l-2 bg-blue-200 rounded-lg p-2 items-center';
  const pathname = usePathname();

  return (
    <aside className='flex flex-col justify-between w-80 p-6 text-gray-50 font-sans text-xs '>

      <nav className='flex flex-col justify-center'>
        <div className='flex justify-center items-center mb-6'>
          <Image src={logo} alt='logos' />
          <p className='text-2xl'>Pizzaria Fulanim</p>
        </div>        
        <Link href={'/manageProduct'} className={pathname.includes('/manageProduct') ? activeLink : inactiveLink}>
          <Gerenciar />
          Gerenciar produtos
        </Link>
        <Link href={'/graphic'} className={pathname.includes('/graphic') ? activeLink : inactiveLink}>
          <GraficoVendas />
          Gráficos de vendas
        </Link>
        <Link href={'/help'} className={pathname.includes('/help') ? activeLink : inactiveLink}>
          <Ajuste />
          Ajustes do aplicativo
        </Link>        
        <p className='text-sm mb-4 mt-2 border-b-2 '></p>
        <Link href={'/support'} className={pathname.includes('/support') ? activeLink : inactiveLink}>
          <Contact />
          Contato com suporte
        </Link>
      </nav>
        <div className="flex ">
          <Link href={'/'} className='flex flex-grow items-center justify-center bg-blue-300'>
            <Exit /> 
            Sair
          </Link>
        </div>
    </aside>
  )
}