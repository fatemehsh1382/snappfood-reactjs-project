'use client'

import clsx from 'clsx';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

 function Services({services}) {

  const pathname = usePathname();
  const isHomePage = pathname === "/"
  const isRestaurantsPage = pathname === "/resturants"

  return (
    
    <nav className={clsx('pt-4 z-20 overflow-x-auto flex bg-white px-[16px]  ml-50', !isHomePage ? "shadow-shadows-small-r" : "shadow-shadows-small", isHomePage && "sticky top-[72px] right-0 left-0 w-full", !(isHomePage||isRestaurantsPage) && "hidden")}>
    {services.map((item) => (
                <Link href={item.href} className='grow ' title={item.title} key={item.id}>
                    <div className='w-[6.375rem] h-[8.375rem] border border-gray-200 bg-gray-50 pb-4 cursor-pointer flex justify-center items-center flex-col rounded-xl mb-5 '>
                        <Image className='mb-4' src={item.img} width={102} height={102} alt={item.title} />
                        <span className=' font-iransans text-sm text-carbon-light inline-block'> {item.title}</span>
                    </div>
                </Link>
            ))}
    </nav>
        

  )
}

export default Services