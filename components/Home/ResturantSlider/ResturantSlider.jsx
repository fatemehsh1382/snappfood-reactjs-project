import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from './Slider'


 function SliderResturant({title,restaurants}) {
    return (
    <section className='h-auto'>
        <section className='opacity-100 flex flex-col transition-[opacity] duration-700 ease-[cubic-bezier(0.5,0,0,1)]'>
            <div className='mb-6 flex justify-between'>
                <p className='font-iransans font-bold text-2xl inline-block text-carbon-main'>{title}</p>
                <Link href={"/resturants"} >
                    <div className='cursor-pointer flex items-center'>
                        <p className='font-iransans font-bold text-lg text-accent2-main inline-block'>مشاهده همه</p>
                        <Image width={9} height={16} src={"/icons/home/left-green.svg"} alt="left" className='mr-4'/> 
                    </div>
                </Link>
            </div>

                <Slider restaurants={restaurants}/>

        </section>
    </section>
  )
}

export default SliderResturant