'use client';
import React from 'react';
import { cn } from '@/utils/cn';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicSchoolTestimonials=[
    {
        quote: "The courses at this music school transformed my understanding of music theory. The instructors are top-notch!",
        name: "Alice Johnson",
        title: "Music Producer",
    },
    {
        quote: "I loved the songwriting course! It helped me find my unique voice and style.",
        name: "Bob Smith",
        title: "Songwriter",
    },
    {
        quote: "The advanced composition class was challenging but incredibly rewarding. I learned so much about orchestration and arrangement.",
        name: "Charlie Brown",
        title: "Composer",
    },
    {
        quote: "This school offers a fantastic environment for learning music production. The hands-on approach is invaluable.",
        name: "Diana Prince",
        title: "Music Producer",
    },
]



export default function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(94,234,212,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(94,234,212,0.2)_1px,transparent_1px)]"
        )}
      />
        <h2 className="text-white text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl mx-auto px-4 py-8">
                <InfiniteMovingCards
                    items={musicSchoolTestimonials}
                    direction="right"
                    speed="slow"
                    pauseOnHover={true}
                    // className="bg-gray-900 text-white p-6 rounded-lg shadow-lg"
                />
            </div>
        </div>
     
    </div>
  )
}


