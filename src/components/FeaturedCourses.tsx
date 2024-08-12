"use client";
import React from 'react'
import Link from 'next/link'
import {properties} from "../data/propeties"
import { BackgroundGradient } from './ui/background-gradient'
import { Button, Text } from '@radix-ui/themes';

function FeaturedCourses() {

    interface property{
        title: string,
        description:string,
        slug: string
    }

  return (
    <div className='max_width_sc p-6 m-2 text-center'>
     <div className='p-4 pt-3'>
      <h2 className='text-center text-2xl pt-3'>FEATURED COURSES</h2>
      <Text size="9" color='gray' className=' text-center'>Learn with the Best</Text>

     </div>

     <div className='my-4'>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8'>
     {properties.map((item:property)=>(
         <div className='flex justify-center py-3' key={item.slug}>
            <div className='flex flex-col 
             dark:bg-zinc-900 overflow-hidden h-full
              rounded-[22px] max-w-sm shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md'>
             <div className='p-4 flex flex-col justify-center gap-3'>
              <p className='text-2xl font-semibold text-center'>{item.title} </p>
              <p className='text-center'>{item.description} </p>
             <div className='text-center'>
             <Button size="3" variant="classic" asChild>
               <Link href={`/courses/${item.slug}`} >
               Learn More 
               </Link>
               </Button>
               </div>
             </div>
            </div>
         </div>
     ))}
     </div>
     </div>
    </div>
  )
}

export default FeaturedCourses