"use client"
import Image from 'next/image'
import React from 'react'
import {ac1,ac2,ac3,ac4} from  "../../../public/assets"

const notificationImages=[
    ac1,ac2,ac3,ac4
]

function accordion() {
    const animation=(e:any)=>{
        const cards=document.querySelectorAll('.card')
        const reset=()=>{
            cards.forEach(card =>{
                card.classList.remove('animation')
            })
        }
        if(!e.target.closest('.card')) return;
        reset()
        e.target.parentElement.classList.add('animation')
    }
    return (
        <div >
            <div className='h-[100vh] grid place-items-center'>
                <div className='flex gap-[0.15rem] p-[0.15rem]'>
                {notificationImages.map((item:any, index:number) => (
                    <>
                    <div 
                    onClick={animation}
                    className='card flex-1 h-[70vmin] cursor-pointer
                    overflow-hidden transition delay-700' key={index}>
                <Image 
                src={item}
                width={500} height={400} 
                alt="image" 
                className=' w-[100%] h-[80%] object-cover'/>
                    </div>
                    </>
                ))}
                </div>
            </div>
        </div>
    )
}

export default accordion
