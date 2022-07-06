import React from 'react'

export default function About() {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-green-200 to-green-700 text-red-900'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
                </div>
                <p className='text-xl mt-2'>
                    Hi, I am Vaishnavi Gupta, A Front-end developer,  worked on 10 different projects using HTML, CSS, Tailwind, JavaScript and React.js. I love to write code and exploring a new tech, I like to always be updated with new technologies.
                </p>
                <br />
                <p className='text-xl'>
                    I start one start-up in 2018 meragrocry.com e-commerce website in Mirzapur, I design the front-end of the website and manage  the website,
                </p>
                <p className='text-xl'>
                I taught at Globus Institute in 2017, programming language e.g:-C, C++, JavaScript, HTML, and CSS. 
                </p>
            </div>

        </div>
    )
}
