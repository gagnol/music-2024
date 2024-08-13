"use client"
import Image from 'next/image'
import React from 'react'


const notificationImages = [
    "/230.jpg",
    "/231.jpg",
    "/232.jpg",
    "/233.jpg",
]

function accordion() {
    const animation = (e: any) => {
        const cards = document.querySelectorAll('.card')
        const reset = () => {
            cards.forEach(card => {
                card.classList.remove('animation')
            })
        }
        if (!e.target.closest('.card')) return;
        reset()
        e.target.parentElement.classList.add('animation')
    }
    return (
        <div className='hidden xl:block' >
            <div className='h-[100vh] grid place-items-center mx-40'>
                <div className='flex gap-[0.15rem] p-[0.15rem]'>
                    {notificationImages.map((item: any, index: number) => (
                        <div key={index}>
                            <div
                                onClick={animation}
                                className='card flex-1 h-[70vmin] cursor-pointer
                    overflow-hidden transition delay-700' key={index}>
                                <Image
                                    src={item}
                                    width={500} height={400}
                                    alt="image"
                                    className=' w-[100%] h-[80%] object-cover' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default accordion
