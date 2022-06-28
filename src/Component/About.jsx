import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
            </div>
            <p className='text-xl mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem praesentium, ipsum saepe beatae libero sequi blanditiis et totam, enim numquam velit aspernatur dignissimos nihil nam quis. Necessitatibus voluptate numquam porro.
            </p>
            <br/>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cum eos dolor veritatis obcaecati corrupti! Ipsa sequi consectetur natus fuga aperiam hic, nesciunt beatae, officia quibusdam optio pariatur, quae numquam?
            </p>
        </div>
      
    </div>
  )
}
